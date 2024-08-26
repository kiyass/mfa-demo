import type { RsbuildPlugin } from '@rsbuild/core';

export type PluginFooOptions = {
  isChangeHtml: boolean;
  children: string;
};

export const htmlPlugin = (options: PluginFooOptions): RsbuildPlugin => ({
  name: 'html-plugin',

  setup: api => {
    api.modifyHTMLTags(({ headTags, bodyTags }) => {
      if (options.isChangeHtml) {
        const src = headTags[headTags.length - 1].attrs?.src;
        headTags[headTags.length - 1] = {
          tag: 'script',
          attrs: {
            type: 'module',
          },
          children: (options.children += `await import("${src}")`),
        };
        console.log(headTags, 'children');
        return { headTags, bodyTags };
      } else {
        return { headTags, bodyTags };
      }
    });
  },
});
