import { embed } from '@nebula.js/stardust';

import barchart from '@nebula.js/sn-bar-chart';
import line from '@nebula.js/sn-line-chart';

const n = embed.createConfiguration({
  context: {
    theme: 'light',
    language: 'en-US',
  },
  types: [
    {
      name: 'barchart',
      load: () => Promise.resolve(barchart),
    },
    {
      // register line chart
      name: 'line-chart',
      load: () => Promise.resolve(line),
    },
  ],
});

export default n;
