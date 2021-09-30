## 快速上手

本节将介绍如何在项目中使用 ven-ui。

### 安装

#### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm i ven-ui -S
```
### 引入
#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import VenUi from 'ven-ui';
import 'ven-ui/lib/index.css';
import App from './App.vue';

Vue.use(VenUi);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 ven-ui 的引入。
