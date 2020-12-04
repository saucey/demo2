import { combineEpics } from 'redux-observable';

import { userEpic } from './userEpic';
import  { mediaOwnerEpic } from './mediaOwnerEpic';

export const rootEpic = combineEpics(
  userEpic,
  mediaOwnerEpic
);