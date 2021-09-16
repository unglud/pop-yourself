/*(async () => {
  const src = chrome.runtime.getURL('popper.js');
  const contentScript = await import(/!* webpackIgnore: true *!/ src);
  console.log(`contentScript`, contentScript);
  contentScript.monitorPops();
})();*/

import { monitorPops } from "./popper";

monitorPops();
