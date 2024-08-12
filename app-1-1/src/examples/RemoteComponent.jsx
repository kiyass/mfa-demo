import { loadRemote } from "@module-federation/runtime";
import React, { useEffect, useRef, useState } from "react";

function useDynamicImport({ module, scope }) {
  const [component, setComponent] = useState(null);
  console.log(window.__MICRO_APP_NAME__);

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

export default ({ module, scope }) => {
  const containerRef = useRef(null);
  const { lifecycle } = useDynamicImport({ module, scope }) ?? {};

  useEffect(() => {
    if (!lifecycle) {
      return;
    }
    lifecycle.mount({ test: "123" }, containerRef.current);
    return () => {
      lifecycle.unmount();
      containerRef.current = null;
    };
  }, [lifecycle]);

  return (
    <div style={{ margin: 100, color: "#000" }}>
      <div key={`${scope}/${module}`} ref={containerRef}></div>
    </div>
  );
};
