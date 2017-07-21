import { protect, unprotect, getRoot } from 'mobx-state-tree';

export function async(fn) {
  const runInUnprotect = (store, fn) => {
    unprotect(store);
    const retVal = fn();
    protect(store);
    return retVal;
  };
  return function(...args) {
    const store = getRoot(this);
    const generator = runInUnprotect(store, () => fn.bind(this, ...args)());

    return new Promise((resolve, reject) => {
      const step = value => {
        const item = runInUnprotect(store, () => generator.next(value));

        if (item.done) return resolve(item.value);
        (item.value instanceof Promise
          ? item.value
          : Promise.resolve(item.value))
          .then(step)
          .catch(reject);
      };
      step();
    });
  };
}
