export default function multipleShareScopePlugin() {
  return {
    name: "multiple-share-scope",
    initContainerShareScopeMap(args) {
      try {
        const { hostShareScopeMap, origin, scopeName } = args;
        if (hostShareScopeMap) {
          Object.keys(hostShareScopeMap).forEach((hostShareScopeName) => {
            if (hostShareScopeName === scopeName) {
              return;
            }
            const hostShareScope = hostShareScopeMap[hostShareScopeName];
            origin.shareScopeMap[hostShareScopeName] = hostShareScope;
          });
        }
      } catch (err) {
        console.error(new Error(err));
      }
      return args;
    },
  };
}
