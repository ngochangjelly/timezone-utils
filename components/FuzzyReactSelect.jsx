import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select/async';
import debounce from 'debounce-promise';
import Fuse from 'fuse.js';

import MenuList from './MenuList';

const FuzzyReactSelect = ({ options, fuzzyOptions, wait, ...props }) => {
  const [fuse, setFuse] = useState(null);

  // use fuse to search
  const searchOptions = (inputValue) =>
    new Promise((resolve) => {
      resolve(fuse.search(inputValue).map((c) => ({ ...c.item })));
    });

  // call promiseOptions
  const loadOptions = (inputValue) => searchOptions(inputValue);

  // debouncer
  const debouncedLoadOptions = debounce(loadOptions, wait);

  useEffect(() => {
    setFuse(new Fuse(options, fuzzyOptions));
    return () => setFuse(null);
  }, [options, fuzzyOptions]);

  useEffect(() => {
    if ((options, fuse)) {
      fuse.setCollection(options);
    }
  }, [fuse, options]);

  return (
    <Select
      defaultOptions={options}
      {...props}
      components={{ MenuList }}
      loadOptions={(value) => debouncedLoadOptions(value)}
    />
  );
};

FuzzyReactSelect.defaultProps = {
  wait: 300,
};

FuzzyReactSelect.propTypes = {
  options: PropTypes.array.isRequired,
  fuzzyOptions: PropTypes.object.isRequired,
  wait: PropTypes.number,
};

export default FuzzyReactSelect;
