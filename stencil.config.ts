import { Config } from '@stencil/core';
import { windicssStencil } from '@codeperate/stencil-windicss';
export const config: Config = {
  namespace: 'cdp-ui-library',
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  taskQueue: 'async',
  plugins: [
    ...windicssStencil({
      preflight: true,
    }),
  ],
  nodeResolve: {
    browser: true,
  },
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      copy: [
        {
          src: '../typedoc',
          dest: './typedoc',
        },
        {
          src: '../CHANGELOG.md',
          dest: './CHANGELOG.md',
        },
        {
          src: '../doc',
          dest: './doc',
        },
        { src: './_headers' },
        { src: './_redirects' },
      ],
    },
  ],
};
