/**
 * The react-adapter-runtime-plugin.ts and fallback.js files work together to enable compatibility
 * between different versions of React used by the host and remote modules in a Module Federation setup.
 *
 * In the runtime plugin (react-adapter-runtime-plugin.ts):
 * - It checks if the host and remote modules are using different versions of React.
 * - If they are, it loads the specific versions of react-dom and react used by the remote module.
 * - It then imports the fallback module and returns a function that wraps the remote module's exposed
 *   component with the fallback component, passing the remote and host React versions as props.
 *
 * In the fallback module (fallback.js):
 * - It defines a higher-order component (HOC) called `withVersions`.
 * - The HOC takes the remote module's exposed component (`Original`) and the remote and host React versions as arguments.
 * - It renders a `Component` that displays the host and remote React versions.
 * - Inside the `Component`, it creates a container ref to mount the `Original` component.
 * - In the HOC's lifecycle methods, it mounts, updates, and unmounts the `Original` component using the
 *   remote module's specific React version and ReactDOM.
 * - This ensures that the `Original` component is rendered using the correct React version within the
 *   fallback component's container.
 *
 * By using this approach, the runtime plugin and fallback module allow the host and remote modules to
 * use different versions of React without conflicts, enabling compatibility in a Module Federation architecture.
 */

const runtimePlugin = () => ({
  name: "my-runtime-plugin",
  // resolveShare(args) {
  //   console.log("[xxx] resolveShare: ", args);

  //   const { shareScopeMap, scope, pkgName, version } = args;

  //   if (!["react", "react-dom"].includes(pkgName)) {
  //     return args;
  //   }
  //   console.log(args, "args");
  //   args.resolver = function () {
  //     shareScopeMap[scope][pkgName][version] =
  //       pkgName === "react" ? window.React : window.ReactDOM; // replace local share scope manually with desired module
  //     return shareScopeMap[scope][pkgName][version];
  //   };
  //   return args;
  // },
  beforeInit(args) {
    console.log("[xxx] beforeInit: ", args);
    return args;
  },
  init(args) {
    console.log("[xxx] init: ", args);
    return args;
  },
  loadRemote(args) {
    console.log("[xxx] loadRemote: ", args);
    return args;
  },
  afterResolve(args) {
    console.log("[xxx] afterResolve: ", args);

    return args;
  },
  async onLoad(args) {
    console.log("[xxx] onLoad: ", args, __FEDERATION__.__INSTANCES__);
    //  TODO window.react
    const hostVersion = "17.0.2";
    console.log(__FEDERATION__.__INSTANCES__, "hostVersion");

    const remoteInstance = __FEDERATION__.__INSTANCES__.find(
      (instance) => instance.name === args.pkgNameOrAlias
    );
    console.log(remoteInstance, "remoteInstance");
    const remoteVersion = remoteInstance
      ? remoteInstance?.options?.shared?.["react-dom"]?.[0]?.version
      : false;

    if (remoteVersion && hostVersion && remoteInstance) {
      const remoteReactDOMVersion = await remoteInstance.loadShare(
        "react-dom",
        {
          resolver: (sharedOptions) => {
            console.log(sharedOptions, "sharedOptions");
            return (
              sharedOptions.find((i) => i.version === remoteVersion) ??
              sharedOptions[0]
            );
          },
        }
      );

      const remoteReactVersion = await remoteInstance.loadShare("react", {
        resolver: (sharedOptions) =>
          sharedOptions.find((i) => i.version === remoteVersion) ??
          sharedOptions[0],
      });
      console.log(remoteReactVersion(), "remoteReactVersion");
      const res = (await import("./fallback.js")).default;

      return () =>
        res(
          args.exposeModuleFactory().default,
          remoteVersion,
          hostVersion,
          remoteReactDOMVersion,
          remoteReactVersion
        );
    }
    return args;
  },
  async beforeLoadShare(args) {
    console.log("[xxx] beforeLoadShare: ", args);

    return args;
  },
});

export default runtimePlugin;
