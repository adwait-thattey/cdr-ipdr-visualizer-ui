import React from 'react';

import styling from './SearchBar.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './SearchBar.module.scss';

const Nav = ({ onFilterClick }) => {
  return (
    <nav className={styling.nav}>
      <div>
        <Input placeholder="Search here" width="40rem" />
      </div>

      <div className={styles.buttons}>
        <Button text="Filter" onClick={onFilterClick} />
        <Button text="List" onClick={onFilterClick} />
      </div>


      <div className={styling.user}>
        
      </div>
    </nav>
  );
};

export default Nav;
