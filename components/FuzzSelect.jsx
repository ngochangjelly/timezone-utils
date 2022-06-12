import React from 'react';
import ReactDOM from 'react-dom';

import FuzzyReactSelect from './FuzzyReactSelect';

import MOCKDATA from './MOCKDATA.json';

// React-Select requires a value and a label key
// and i'm lazy so this could be ignored
export const pickedMockdata = MOCKDATA.map((data) => ({
  ...data,
  label: data['first_name'] + ' ' + data['last_name'],
  value: data.id,
}));

// fuze.js options
export const fuzzyOptions = {
  keys: [
    { name: 'first_name', weight: 0.7 },
    { name: 'last_name', weight: 0.5 },
    { name: 'email', weight: 0.2 },
  ],
  valueKey: 'first_name',
  maxPatternLength: 8,
  includeScore: true,
  maxResults: 25,
  threshold: 0.3,
};
