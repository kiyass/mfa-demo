import { loadRemote } from "@module-federation/runtime";
import React, { useEffect, useRef, useState } from "react";

export default function useDynamicImport({ module, scope }) {
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
