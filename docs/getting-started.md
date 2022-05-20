---
nav:
  title: 快速上手
  order: 1
---

# 快速上手

## 安装

**使用 npm 或 yarn 安装**

```shell
npm install mi-ui
```

```shell
yarn add mi-ui
```

## 示例

```js
import Alert from 'mi-ui/es/alert'; // 手动按需加载 js
import 'mi-ui/es/alert/style'; // 手动按需加载 less

ReactDOM.render(<Alert type="warning">这是一条警告提示</Alert>, mountNode);
```

### 自动按需加载

使用 [babel-plugin-import ](https://www.npmjs.com/package/babel-plugin-import) 优化引入方式，如下：

```js
import { Alert } from 'mi-ui'; // 与上述示例等价

ReactDOM.render(<Alert type="warning">这是一条警告提示</Alert>, mountNode);
```

安装 `babel-plugin-import`

```
yarn add babel-plugin-import --dev
```

配置`.babelrc` 或 `babel-loader`

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "mi-ui",
        "libraryDirectory": "esm",
        "style": true
      }
    ]
  ]
}
```
