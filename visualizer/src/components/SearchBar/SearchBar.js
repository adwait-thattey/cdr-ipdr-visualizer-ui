import React from 'react';
import { Dropdown, Menu, Button as AiButton } from 'antd';
import styling from './SearchBar.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './SearchBar.module.scss';

const SearchBar = ({ onFilterClick, wishlists, updateWishList, selectedUserList }) => {


  const genDropD = (wishlists) => {
    return (
      <Menu>
        {wishlists && wishlists.map(wishlist => (<Menu.Item>
          <a href="#" onClick={() => updateWishList(wishlist.id)}>
            {wishlist.name}
          </a>
        </Menu.Item>))}
      </Menu>
    )
  }

  const menu = genDropD(wishlists);

  return (
    <nav className={styling.nav}>
      <div>
        <Input placeholder="Search here" width="40rem" />
      </div>

      <div className={styles.buttons}>
        <Button text="Filter" onClick={onFilterClick} />
        <Dropdown overlay={menu} placement="topCenter">
          <AiButton className={styles.dropdownbtn} size="large">{selectedUserList && selectedUserList.name || "Watch Lists"}</AiButton>
        </Dropdown>
      </div>
    </nav>
  );
};

export default SearchBar;
