title: Slider.vue
categories:
 - 基础库
author: 宋玉
date: 2021-03-03 19:18:03
---
```vue
<template>
  <cover-view :class="['slider-box flex-row flex-all-center', styleMode, isActive?'active':'']"
    @tap="handleTap">
    <cover-view class="readers-slider-container flex-row flex-items-center">
      <cover-view class="readers-slider">
        <cover-view class="readers-slider__value"
          :style="{
					width: `${widthPx}px`,
				}">
        </cover-view>
      </cover-view>
    </cover-view>
    <cover-view class="rid-box-container flex-row flex-items-center"
      :style="{
          transform: `translateX(${widthPx}px)`
					}">
      <cover-view class="rid-box"
        @touchstart="touchS"
        @touchmove="touchM"
        @touchend="touchE">
      </cover-view>
    </cover-view>
    <template v-if="isRangeComment">
      <cover-view class="slider-range__mark"
        :style="{left:`${rangeStartX}px`}"></cover-view>
      <cover-view class="slider-range__mark"
        :style="{left:`${rangeEndX}px`}"></cover-view>
    </template>
  </cover-view>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Slider",
  props: {
    styleMode: {
      type: String,
      default: "",
    },
    value: {
      default: 0,
      type: Number,
    },
    min: {
      default: 0,
      type: Number,
    },
    max: {
      default: 100,
      type: Number,
    },
  },
  data() {
    return {
      posVal: 0, //进度条值
      val: 0, // 进度条原始值
      moveLock: false, //操作锁，双向绑定音频进度拖动操作可用
      sliderWidth: 0, // 进度条宽度
      sliderLeft: 0, // 进度条起点位置
      sTouches: {}, // 起始触摸点
      isActive: false, // 是否激活进度条
    };
  },
  watch: {
    value: {
      //监听进度值变化
      handler(val) {
        const { moveLock, min, max } = this;
        if (moveLock || !max) {
          return;
        }
        let _val = this.limit((val - min) / (max - min));
        this.val = _val;
        this.posVal = _val * 100;
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState({
      commentRanges: (state) => state.comment.commentRanges,
    }),
    ...mapGetters({
      isRangeComment: "comment/isRangeComment",
    }),
    widthPx() {
      const { sliderWidth, posVal } = this;
      let _width = (sliderWidth * posVal) / 100;
      return Math.min(_width, sliderWidth);
    },
    rangeStartX() {
      const {
        sliderWidth,
        max,
        commentRanges: [sTime],
      } = this;
      const durationMS = max * 1000;
      if(!durationMS) return -2;
      return (sTime / durationMS) * sliderWidth;
    },
    rangeEndX() {
      const {
        sliderWidth,
        max,
        commentRanges: [, eTime],
      } = this;
      const durationMS = max * 1000;
      if(!durationMS) return -2;
      return (eTime / durationMS) * sliderWidth;
    },
    valueMs() {
      const { value } = this;
      return value * 1000;
    },
  },
  mounted() {
    this.initSlider();
    uni.onWindowResize(() => {
      this.initSlider();
    });
  },
  methods: {
    // 初始化Slider组件数据
    initSlider() {
      const query = uni.createSelectorQuery().in(this);
      const that = this;
      setTimeout(() => {
        query
          .select(".readers-slider")
          .boundingClientRect((data) => {
            that.sliderWidth = data.width; // 节点的宽度
            that.sliderLeft = data.left; // 节点的左边界坐标
          })
          .exec();
      }, 300);
    },
    // 点击进度条跳到进度位置
    handleTap({ detail: { x: sliderX, y } }) {
      this.lockSlider(true);
      const { sliderWidth, sliderLeft, isActive } = this;
      if (isActive) return;
      // （当前坐标-起点坐标）/进度条宽度
      let val = this.increase({
        startX: sliderLeft,
        endX: sliderX,
      });
      // 进度值限制在 0 到 1 之间
      val = this.limit(val);
      // 设置当前值
      this.val = val;
      // 进度条值
      this.posVal = val * 100;
      // 根据用户传入 min 和 max 将值出来成用户使用的实际值
      val = this.format(val);
      this.$emit("changed", {
        progress: this.posVal,
        value: val,
        valueMs: this.valueMs,
      });
      this.lockSlider(false);
    },
    touchS({ changedTouches }) {
      this.sTouches = changedTouches[0];
    },
    touchM({ changedTouches: [mTouches] }) {
      this.lockSlider(true);
      // 当前值 + 移动的值
      let { val, sTouches } = this;
      val = this.increase({
        val,
        startX: sTouches.pageX,
        endX: mTouches.pageX,
      });
      // 进度值限制在 0 到 1 之间
      val = this.limit(val);
      // 进度条值
      this.posVal = val * 100;
      // 根据用户传入 min 和 max 将值出来成用户使用的实际值
      const { min, max } = this;
      val = this.format(val);
      this.$emit("changing", {
        progress: this.posVal,
        value: val,
        valueMs: val * 1000,
      });
    },
    touchE({ changedTouches: [eTouches] }) {
      let { val, sTouches } = this;
      if (!this.isMove({ sTouches, eTouches })) return;
      // 当前值 + 移动的值
      val = this.increase({
        val,
        startX: sTouches.pageX,
        endX: eTouches.pageX,
      });
      // 进度值限制在 0 到 1 之间
      val = this.limit(val);
      // 设置当前值
      this.val = val;
      // 进度条值
      this.posVal = val * 100;
      // 根据用户传入 min 和 max 将值出来成用户使用的实际值
      val = this.format(val);
      this.$emit("changed", {
        progress: this.posVal,
        value: val,
        valueMs: this.valueMs,
      });
      this.lockSlider(false);
    },
    // 是否有移动
    isMove({ sTouches, eTouches }) {
      return Math.abs(eTouches.pageX - sTouches.pageX) > 0;
    },
    // 当前值 + 移动的值
    increase({ val = 0, startX, endX } = {}) {
      const { sliderWidth } = this;
      return val + (endX - startX) / sliderWidth;
    },
    // 进度值限制在 0 到 1 之间
    limit(val) {
      return Math.min(Math.max(0, val), 1);
    },
    // 根据用户传入 min 和 max 将值出来成用户使用的实际值
    format(val) {
      const { min, max } = this;
      return min + (max - min) * val;
    },
    // 上锁/解锁
    lockSlider(locked) {
      if (locked) {
        this.moveLock = true;
      } else {
        setTimeout(() => {
          this.moveLock = false;
        }, 1000);
      }
    },
    // 更新进度条激活状态
    updateActiveState(isActive) {
      this.isActive = isActive;
    },
  },
};
</script>
<style lang="scss" scope>
@import "@assets/style/mixin.scss";
.slider-box {
  position: relative;
  z-index: 3;
  height: 40rpx;
  &.active {
    .readers-slider {
      transform: scaleY(2);
      transform-origin: bottom;
    }
    .rid-box {
      display: block;
    }
  }
  &.normal {
    .rid-box-container {
      margin-left: -18rpx;
    }
    .readers-slider {
      transform: scaleY(2);
      transform-origin: bottom;
    }
    .readers-slider-container {
      width: calc(100% - 36rpx);
      @include extend-tap-area();
    }
    .rid-box {
      margin: 0 18rpx;
      display: block;
      @include extend-tap-area(-40rpx, -40rpx, -40rpx, -140rpx);
    }
  }
}
.readers-slider-container {
  width: 100%;
  height: 100%;
}
.rid-box-container {
  position: absolute;
  z-index: 1;
  top: -4rpx;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateX(0);
  margin-left: -16rpx;
}
.readers-slider {
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 4rpx;
  transition: 0.3s all ease-out;
}
.readers-slider__value {
  background-color: #3567fe;
  width: 0;
  height: 100%;
}
.rid-box {
  display: none;
  width: 36rpx;
  height: 36rpx;
  background-color: #3468fe;
  border-radius: 50%;
}
.slider-range__mark {
  position: absolute;
  width: 8rpx;
  height: 20rpx;
  background: #ffffff;
  border-radius: 4rpx;
  margin-left: -5rpx;
  margin-top: -8rpx;
}
</style>
```
```vue
<template>
  <div class="slider">
    <div ref="slider"
      :class="['slider__runway flex-row flex-items-center', btnIsClick?'active':'']"
      @mousedown="onSliderClick">
      <div class="slider__bar"
        :style="{width:`${percentVal}%`}"></div>
      <div class="slider__btn-wrapper"
        @mousedown.stop="onBtnClick"
        :style="{left: `${percentVal}%`}">
        <div class="slider__btn"></div>
      </div>
      <template v-if="isShowRangeComment">
        <div class="slider-range__mark"
          :style="{left:`${rangeStartX}px`}"></div>
        <div class="slider-range__mark"
          :style="{left:`${rangeEndX}px`}"></div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Slider",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
    },
  },
  data() {
    return {
      val: 0,
      offsetLeft: 0,
      offsetWidth: 0,
      btnIsClick: false,
    };
  },
  computed: {
    ...mapState({
      isCommentsFocus: (state) => state.comment.isCommentsFocus,
      commentRanges: (state) => state.comment.commentRanges,
    }),
    ...mapGetters({
      isRangeComment: "comment/isRangeComment",
      hasSelectedComment: "comment/hasSelectedComment",
    }),
    newValue() {
      const { val, max } = this;
      return val * max;
    },
    percentVal() {
      const { val } = this;
      return val * 100;
    },
    rangeStartX() {
      const {
        offsetWidth,
        $parent: { durationMS },
        commentRanges: [sTime],
      } = this;
      return (sTime / durationMS) * offsetWidth;
    },
    rangeEndX() {
      const {
        offsetWidth,
        $parent: { durationMS },
        commentRanges: [, eTime],
      } = this;
      return (eTime / durationMS) * offsetWidth;
    },
    isShowRangeComment() {
      const { isCommentsFocus, isRangeComment, hasSelectedComment } = this;
      if (hasSelectedComment) {
        return isRangeComment;
      }
      return isCommentsFocus && isRangeComment;
    },
  },
  watch: {
    value(val) {
      const { max } = this;
      this.val = val / max;
    },
  },
  mounted() {
    this.initSlider();
    // 窗口大小改变
    window.addEventListener("resize", () => {
      this.initSlider();
    });
  },
  beforeDestroy() {
    // 解除resize事件
    window.removeEventListener("resize", () => {
      this.initSlider();
    });
  },
  methods: {
    initSlider() {
      const {
        $refs: { slider },
      } = this;
      if (!slider) return;
      const { offsetWidth } = slider;
      this.offsetLeft = slider.getBoundingClientRect().left;
      this.offsetWidth = offsetWidth;
      // 鼠标移动事件, 用于拖动
      document.onmousemove = async (e) => {
        if (this.btnIsClick) {
          const { pageX } = e;
          this.move({ curX: pageX });
          await this.$nextTick();
          this.$emit("change", this.newValue);
        }
      };
      // 鼠标弹起事件，用于释放拖动
      document.onmouseup = () => {
        this.btnIsClick = false;
      };
      this.setSlider();
    },
    // 设置Slider组件
    setSlider() {
      this.$store.commit("setSlider", this.$refs.slider);
    },
    /**
     * 进度条整体的鼠标按下事件
     */
    async onSliderClick({ pageX }) {
      this.move({ curX: pageX });
      await this.$nextTick();
      this.$emit("change", this.newValue);
    },
    /**
     * 鼠标点击按钮事件
     */
    onBtnClick() {
      this.btnIsClick = true;
      this.initSlider();
    },
    /**
     * 进度条拖动
     */
    move({ curX }) {
      const {
        max,
        offsetLeft,
        offsetWidth,
        isRangeComment,
        commentRanges: [sTime, eTime],
      } = this;
      let val = (curX - offsetLeft) / offsetWidth;
      // 将值限制在时间区间内
      const minVal = isRangeComment ? sTime / max : 0;
      const maxVal = isRangeComment ? eTime / max : 1;
      val = Math.min(Math.max(minVal, val), maxVal);
      this.val = val;
    },
    updateCommentRanges() {
      if (isRangeComment) return;
      const { newValue, isRangeComment } = this;
      const commentRanges = [newValue, newValue];
      this.$store.commit("comment/updateCommentRanges", commentRanges);
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  z-index: 3;
}
.slider__runway {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 6px;
  background-color: #4b4c52;
  cursor: pointer;
  &:hover {
    transform: scaleY(2);
    transform-origin: bottom;
    .slider__btn {
      display: block;
      transform: scaleY(0.5);
      transform-origin: center;
    }
  }
  &.active {
    .slider__btn {
      display: block;
    }
  }
}
.slider__bar {
  position: absolute;
  height: 6px;
  background-color: #3e3bff;
}
.slider__btn-wrapper {
  position: absolute;
  transform: translateX(-50%);
  z-index: 2;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
}
.slider__btn {
  display: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #ffffff;
  &:hover {
    transform: scale(2);
  }
}
.slider-range__mark {
  position: absolute;
  width: 4px;
  height: 10px;
  background: #ffffff;
  border-radius: 2px;
  margin-left: -2px;
}
</style>
```
