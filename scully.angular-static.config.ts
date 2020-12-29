import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "angular-static",
  outDir: './dist/static',
  routes: {
    '/product/:productID': {
      type: 'json',
      productID: {
        url: 'https://raw.githubusercontent.com/Chenzo/angular-static/main/src/assets/data.json',
        //url: 'http://localhost:4200/assets/data.json',
        //resultsHandler: (response) => response.data,
        property: 'guid'
      },
    },
  },

};