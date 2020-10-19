import react from 'react';
import {atom} from 'recoil';

export const id = atom({
  key: 'id',
  default: 1,
});

export const playStart = atom({
  key: 'playStart',
  default: false,
});