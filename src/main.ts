import getDescriptors from 'object.getownpropertydescriptors';
import App from './App.svelte';

getDescriptors.shim();

const app = new App({
  target: document.body,
});

export default app;
