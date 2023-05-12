import { lazy } from 'react';

export const getLazyComponent = (resolvePath: string, componentName: string) => {
  return lazy(() =>
    import(`../../${resolvePath}/lazy-index.tsx`).then((component) => ({ default: component[componentName] }))
  );
};
