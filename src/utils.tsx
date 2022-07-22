import React from 'react';
import type { OptionsWithoutRender } from 'react-loadable';

/**
 * get default loadable options.
 * @template T
 * @return {*}  {Pick<OptionsWithoutRender<T>, 'loading'>}
 */
export const getDefaultOptions = <T,>(): Pick<OptionsWithoutRender<T>, 'loading'> => {
  return {
    loading: ({ error, isLoading }) => {
      if (process.env.NODE_ENV === 'development') {
        if (isLoading) {
          return <p>loading...</p>;
        }
        if (error) {
          return (
            <p>
              {error.message}
              <br />
              {error.stack}
            </p>
          );
        }
      }
      return <p>loading...</p>;
    },
  };
};
