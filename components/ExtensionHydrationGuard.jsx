'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// Remove only the extension marker reported in hydration errors. Keep real
// application mismatches visible, and stop observing once hydration finishes.
const bootstrap = `(() => {
  const attribute = 'bis_skin_checked';
  function clean(root) {
    if (root.nodeType !== 1) return;
    root.removeAttribute(attribute);
    root.querySelectorAll('[' + attribute + ']').forEach(element => {
      element.removeAttribute(attribute);
    });
  }
  const observer = new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'attributes') {
        if (record.target.hasAttribute(attribute)) record.target.removeAttribute(attribute);
      } else {
        record.addedNodes.forEach(clean);
      }
    }
  });
  clean(document.documentElement);
  observer.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: [attribute]
  });
  document.addEventListener('xtragenius:hydrated', () => observer.disconnect(), { once: true });
})();`;

export default function ExtensionHydrationGuard() {
  useEffect(() => {
    document.dispatchEvent(new Event('xtragenius:hydrated'));
  }, []);

  return <Script id="extension-hydration-guard" strategy="beforeInteractive">{bootstrap}</Script>;
}
