import memoize from "memoize-one";
import { wrapPromise } from "./wrapPromise";
import { tvMetadata, tvData, comments } from "./data";

const API_TIMEOUT = 1000;

const tvMetadataApi = memoize(() => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(tvMetadata);
    }, API_TIMEOUT);
  });
});

const tvDataApi = memoize(id => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(tvData[id]);
    }, API_TIMEOUT + 1000);
  });
});

const commentsApi = memoize(id => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(comments.sort((a, b) => 0.5 - Math.random()));
    }, API_TIMEOUT);
  });
});

export const getTvMetadataResource = memoize(() => {
  return wrapPromise(tvMetadataApi());
});

export const getTvDataResource = memoize(id => {
  return wrapPromise(tvDataApi(id));
});

export const getCommentsResource = memoize(id => {
  return wrapPromise(commentsApi(id));
});
