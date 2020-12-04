title: Vue
categories:
 - Devops
author: 宋玉
date: 2020-12-04 10:56:47
---

### 好用特性
> 物尽其用。

- vuex
- computed
- watch
- ref&$refs
- $children / $parent
- props / $emit
- mixins
- filters
- directives
- provide/ inject
- eventBus

### 子组件并不能实时根据父组件的值改变
> 使用vue 的watch属性来监听父组件传过来的值

```vue
//基础数据类型
watch:{
     num1(newVal){
         this.img = newVal
     }
}
```
```vue
//数组的监听
watch:{
    arr1: {
        handler(newVal) {
            this.tableData = newVal
        },
        deep: true        //划重点
    }
}
```
```vue
//对象的监听
watch:{
	obj1: {
        handler(newVal) {
            this.form = newVal
        },
        deep: true        //划重点
    }
}
```
> vuex中的数据，在子组件中并不能实时更新、子组件中无法使用watch直接监听this.$store.state

```vue
// 使用computed来配合watch监听
watch:{
  list(newVal){
  		//最好使用vue.set更新数据
      this.$set(this.treeData,'lists',newVal)
  }
},
computed:{
    list(){
        return this.$store.state.menu
    }
}
```
[参考地址](https://blog.csdn.net/weixin_45266125/article/details/102807663)

### vue中使用iframe如何不影响路由
this.$refs.ifr.contentWindow.location.replace('http://baidu.com')

### Vue组件深度(deep)监听props对象属性无效的解决办法
> 之所以会出现这个现象是因为直接ES5已经舍弃了`Object.observe`方法，`Vue`无法监听对象属性删除和新增，故即使使用`deep`方法监听对象`prop`也没有用。

```vue
<!-- 父组件 -->
<template>
  <div class="hello">
    <Child :data="data">
    </Child>
  </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'HelloWorld',

  data () {
    return {
      data: {
        init: 'init',
        // refresh: ''
      }
    }
  },

  components: {
    Child
  },

  mounted () {
    setTimeout(() => {
      this.data.refresh = 'refresh'
      // this.$set(this.data, 'refresh', 'refresh')
      // this.data = Object.assign({}, this.data)
    })
  }
}
</script>

<!-- 子组件 -->
<template>
  <h1>
    <p>init{{data.init}}</p>
    <p>refresh{{data.refresh}}</p>
  </h1>
</template>
<script>
export default {
  name: 'Child',

  props: ['data'],

  watch: {
    data: {
      handler (newVal) {
        console.log(this.data.init, this.data.refresh)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
```

1. 在父组件中声明对象的键
1. 使用`this.$set()`方法
1. 使用`Object.assign({}, obj)`方法

<br />

### 引用类型对象直接赋值导致 Vue 无法监听子属性变更
> 使用深拷贝对对象进行赋值触发 Vue watch

```json
this.searchList = JSON.parse(JSON.stringify(commentsList));
```

### 组件名称重复
```
For recursive components, make sure to provide the "name" option.
```

### 没有实现组件的处理方法
```
Vue warn]: Error in v-on handler: "TypeError: Cannot read property 'apply' of undefined"

found in

---> <CommentCard> at src/components/comment/CommentCard.vue
       <CommentBox> at src/components/comment/CommentBox.vue
         at src/views/fileDetail/fileDetail.vue
```

### 绑定在页面的事件立即执行问题
> 将事件放在了 computed 中（下面是错误代码） ，这种立即执行的问题都是代码绑定有问题，仔细检查代码

```vue
<template>
  <view :class="['comment-card-container', isSelected?'active':'']"
    v-if="commentData">
    <view class="flex-column">
      <view class="flex-row flex-items-center flex-content-between">
        <view class="flex-row flex-items-center">
          <view class="comment-card__head-icon">
            <img :src="commentData.userinfo.avatar"
              alt="">
          </view>
          <view class="comment-card__name">
            {{commentData.userinfo.real_name}}
          </view>
        </view>
        <view class="flex-row flex-items-center">
          <text :class="['iconfont icon-huabi1', isSelected?'active':'']"
            v-if="isShowDraw"></text>
          <view :class="['tag', isSelected?'active':'']"
            v-if="commentData.media_time!=='-1'">{{commentData.media_time | formatDuration}}</view>
        </view>
      </view>
      <view class="comment-body">
        <view class="comment-card__content">
          {{commentData.content}}
        </view>
        <view class="flex-row flex-items-center flex-content-between">
          <view class="comment-card__desc">
            {{commentData.created_at  * 1000 | moment}}
          </view>
          <view class="flex-row flex-items-center">
            <view class="comment-card__desc"
              @tap.stop="handleReply">
              回复 {{replyCount}}
            </view>
            <view class="iconfont icon-shanchu"
              @tap.stop="handleDelete"
              v-if="isMine"></view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    commentData: Object,
    type: String,
    replyCount: Number,
  },
  computed: {
    ...mapGetters({
      selectedComment: "comment/selectedComment",
    }),
    isSelected() {
      const { type } = this;
      return type == "list" ? this.selectedComment.id == this.commentData.id : false;
    },
    handleDelete() {
      const { commentData } = this;
      this.$emit("delete", commentData);
    },
    handleReply() {
      const { commentData } = this;
      this.$emit("reply", commentData);
    },
    isShowDraw() {
      const {
        commentData: { label },
      } = this;
      return label && label !== "";
    },
    isMine() {
      return this.commentData.userinfo.user_id === this.$store.state.user.userInfo.uId;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@assets/style/mixin.scss";

.comment-card-container {
  padding: 40rpx;
  background-color: #010616;
  &.active {
    background: #1c2233;
  }
  .comment-body {
    margin-left: 80rpx;
  }
  .comment-card__head-icon {
    width: 64rpx;
    height: 64rpx;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: inherit;
      height: inherit;
    }
  }
  .comment-card__name {
    font-size: 28rpx;
    font-weight: 500;
    color: #ffffff;
    margin-left: 10rpx;
    @include max-text(200rpx);
  }
  .comment-card__content {
    font-size: 24rpx;
    color: #ffffff;
    line-height: 40rpx;
    letter-spacing: 0rpx;
    margin: 22rpx 0 18rpx;
  }
  .comment-card__desc {
    font-size: 24rpx;
    color: rgba(255, 255, 255, 0.5);
  }
  .iconfont {
    color: #ffffff;
    &.icon-shanchu {
      font-size: 32rpx;
      color: rgba(255, 255, 255, 0.8);
      margin-left: 12rpx;
    }
    &.icon-huabi1 {
      font-size: 40rpx;
      margin-right: 24rpx;
    }
    &.active {
      color: #3468fe;
    }
  }
}
.tag {
  display: inline-block;
  padding: 0.15em 0.75em;
  border-radius: 0.2em;
  color: #fff;
  font-size: 24rpx;
  line-height: 1.5em;
  background-color: #353b4f;
  border-radius: 6rpx;
  font-weight: 500;
  &.active {
    background: linear-gradient(90deg, #3e3bff, #336dfe);
  }
}
</style>
```
