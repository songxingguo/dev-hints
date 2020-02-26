title: z-index
categories:
 - CSS
author: 宋玉
date: 2020-02-26 01:03:08
---

<a name="mQ3Dd"></a>
## 层级

![image.png](https://cdn.nlark.com/yuque/0/2019/png/394169/1574152736070-6d3ae8fa-cb80-4e27-b383-47499cedbe5e.png#align=left&display=inline&height=467&name=image.png&originHeight=467&originWidth=624&size=99370&status=done&style=none&width=624)

- 形成层叠上下文环境的元素的背景与边框
- 拥有负 z-index 的子堆叠上下文元素 （负的越高越堆叠层级越低）
- 正常流式布局，非 inline-block，无 position 定位（static除外）的子元素
- 无 position 定位（static除外）的 float 浮动元素
- 正常流式布局,inline-block元素,无 position 定位（static除外）的子元素（包括 display:table 和display:inline ）
- 拥有 z-index:0 的子堆叠上下文元素
- 拥有正 z-index: 的子堆叠上下文元素（正的越低越堆叠层级越低）

<a name="NIdrX"></a>
## 参考链接

- [看似简单的z-index会让你吐血](https://www.jianshu.com/p/a7cf99fc3b2f)

