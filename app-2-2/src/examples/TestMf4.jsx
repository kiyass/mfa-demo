// import { lifecycle } from "mf4/Mf4";
import { loadRemote } from "@module-federation/runtime";
import React, { useEffect, useRef, useState } from "react";

function useDynamicImport({ module, scope }) {
  const [component, setComponent] = useState(null);

  useEffect(() => {
    if (!module || !scope) return;

    const loadComponent = async () => {
      try {
        const result = await loadRemote(`${scope}/${module}`);
        console.log(result);
        setComponent(result);
      } catch (error) {
        console.error(`Error loading remote module ${scope}/${module}:`, error);
      }
    };

    loadComponent();
  }, [module, scope]);

  return component;
}

export default () => {
  const containerRef = useRef(null);
  const { lifecycle } = useDynamicImport({ module: "Mf4", scope: "mf4" }) || {};

  useEffect(() => {
    if (!lifecycle) {
      return;
    }
    lifecycle.mount({ test: "123" }, containerRef.current);
    return () => {
      lifecycle.unmount();
    };
  }, [lifecycle]);

  return (
    <div style={{ margin: 100, color: "#000" }}>
      <div ref={containerRef}></div>
    </div>
  );
};
