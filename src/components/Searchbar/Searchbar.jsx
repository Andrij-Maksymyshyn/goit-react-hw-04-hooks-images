import React, { useState } from 'react';
import toast from 'react-hot-toast';
import IconButton from '../IconButton';
import { BiSearch } from 'react-icons/bi';
import PropTypes from 'prop-types';

import { Header, SearchForm, Input } from './Searchbar.styled';

function Searchbar({ propSubmit }) {
  const [inputFormValue, setInputFormValue] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;

    setInputFormValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputFormValue.trim() === '') {
      toast.error('Please, fill in the field of search');
      return;
    }

    propSubmit(inputFormValue);

    setInputFormValue('');
  };

  return (
    <>
      <Header>
        <SearchForm onSubmit={handleSubmit}>
          <IconButton aria-label="search">
            <BiSearch width="40" height="40" />
          </IconButton>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputFormValue}
            onChange={handleChange}
          />
        </SearchForm>
      </Header>
    </>
  );
}

export default Searchbar;

Searchbar.propTypes = {
  propSubmit: PropTypes.func.isRequired,
};
