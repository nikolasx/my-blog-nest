import { useCallback } from 'react';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const useApi = (): {
  apiFetcher: <T = unknown>(
    url: RequestInfo,
    options?: RequestInit,
  ) => Observable<[number, T]>;
} => {
  const apiFetcher = useCallback(
    <T>(
      url: RequestInfo,
      defaultOptions?: RequestInit,
    ): Observable<[number, T]> => {
      const options: RequestInit = {
        ...defaultOptions,
        headers: {
          'content-type': 'application/json',
        },
      };
      return from(
        fetch(url, options).then((res) => {
          const { status } = res;
          return res.json().then((json) => [status, json]);
        }),
      ).pipe(
        map(([status, data]) => {
          return [status, data];
        }),
      );
    },
    [],
  );

  return { apiFetcher };
};
