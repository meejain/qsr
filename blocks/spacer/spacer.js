import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  const blockCfg = readBlockConfig(block);
  block.innerHTML = '';
  if (window.innerWidth >= 1232) {
    block.style.height = blockCfg.desktop;
  } else if (window.innerWidth >= 992) {
    block.style.height = blockCfg.tablet ? blockCfg.tablet : blockCfg.mobile;
  } else {
    block.style.height = blockCfg.mobile;
  }
}
