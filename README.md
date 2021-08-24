## quick start

1. 安装依赖，根目录运行命令

```bash
yarn install
```

ios安装依赖

```bash
cd examples/demo1/ios
pod install
```

2. 启动实时编译包 根目录运行命令

```bash
npm run watch
```

3. 打包 根目录运行命令

```bash
npm run build
```

## 开发计划

- [ ] 封装原生日历组件 进行中
- [ ]  热跟新demo

## 开发随记


### 由`lerna`创建的`package(examples)`中，`rn demo1`会找不到软链接下`packages`里的包

#### 方法1 `watchFolders`

```javascript

const path = require('path');

const watchFolders = [
  //Relative path to packages directory
  path.resolve(__dirname + '/../../packages/add'),
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders,
};


```

遇到的问题是如果修改`packages`包，`demo`不会生效，无法`debug`

#### 方法2 打包package到demo中

```javascript

const path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: {
      add: path.resolve(`${__dirname}/lib/add/lib`),
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

```

将`packages`里的包打包到`rn demo1`中,修改引入`package`包的位置


### `workspaces`

#### package.json配置

```json
{
  "workspaces": {
    "packages": [
      "examples/*",
      "packages/*"
    ],
    "nohoist": [
      "**/react",
      "**/react*",
      "**/react/**",
      "**/react*/**",
      "**/@babel",
      "**/@babel/**"
    ]
  }
}
```

用`yarn workspaces` 管理包依赖，`lerna`发布包

`workspaces`可以把`examples`、`packages`将模块提升到其父项目的 `node_modules`, 当考虑到这些包很可能相互依赖（拥有 `monorepo` 的主要原因）时，这种优化变得更加突出，即更高程度的冗余。

#### 找不到模块

虽然看起来我们可以从项目的根节点 `node_modules` 访问所有模块，但我们经常在其本地项目中构建每个包，其中模块可能在其自己的 `node_modules` 下不可见。 此外，并非所有 `crawlers` 都会遍历符号链接(`link`)。

#### 修复问题

在私有项目根目录下，使用 `nohoist`