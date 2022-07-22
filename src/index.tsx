import type { OptionsWithoutRender } from 'react-loadable';
import Loadable from 'react-loadable';
import { getDefaultOptions } from './utils';

export default <T,>(opts: OptionsWithoutRender<T>['loader'] | OptionsWithoutRender<T>) => {
  const defaultOptions = getDefaultOptions<T>();

  // eg: dynamic(() => import('../hello-world'))
  if (typeof opts === 'function') {
    return Loadable({ ...defaultOptions, loader: opts });
    // eg: dynamic({loader: import('../hello-world'), loading: Loading})
  } else if (typeof opts === 'object') {
    return Loadable({ ...defaultOptions, ...opts });
  } else {
    throw new Error(`Unexpected arguments: ${opts}`);
  }
};
