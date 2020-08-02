import React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import Nav from '../Header/Header';

const SearchBar = ({ onFilterClick }) => {
  const child = (
    <>
      <div>
        <Input placeholder="Search here" width="40rem" />
      </div>

      <Button text="Filter" onClick={onFilterClick} />
    </>
  );
  return <Nav child={child} />;
};

export default SearchBar;
