export const store = {}; // Create your Store here

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks

declare global {
  interface Window {
    Cypress: object | undefined;
    store: object;
  }
}
if (window.Cypress) {
  window.store = store;
}
