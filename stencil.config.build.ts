import { Config } from '@stencil/core';
import { windicssStencil } from '@codeperate/stencil-windicss';
export const config: Config = {
  namespace: 'cdp-ui-library',
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  taskQueue: 'async',
  plugins: [
    ...windicssStencil({
      preflight: false,
    }),
  ],
  tsconfig: 'tsconfig.build.json',
  nodeResolve: {
    jsnext: true,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
  ],
};
