# mfa-demo

# 问题记录

## qiankun 应用嵌套

参考实现：https://juejin.cn/post/6856569463950639117#heading-30

1）注意 router basename 和 registerMicroApps activeRule 的正确配置

在嵌套的前提下，子应用的子应用所在层级发生变化，它的 basename 和 activeRule 需要基于自己的父应用

2）正常挂载应用后，触发整个应用的循环加载

当第一步被正确处理后，应用可以被加载，但是瞬间会被重新刷新页面，陷入循环刷新。在父应用的 beforeunload 事件中添加断点，发现在刷新前存在热更新的日志信息。配置关闭热更新后，问题解决。

注意，在 rsbuild 中仅配置 hmr: false 后会默认使用 liveReload 模式，所以需要把 liveReload 也配置关闭。

```js
export default defineConfig({
  // ...
  dev: {
    hmr: false,
    liveReload: false,
  },
});
```

qiankun 中的相关配置说明：https://qiankun.umijs.org/zh/guide/tutorial#react-%E5%BE%AE%E5%BA%94%E7%94%A8

## 第三方依赖共享
