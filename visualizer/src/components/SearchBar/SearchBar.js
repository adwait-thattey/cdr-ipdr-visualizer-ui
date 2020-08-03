import React from 'react';
import { Dropdown, Menu, Button as AiButton, Checkbox } from 'antd';
import styling from './SearchBar.module.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './SearchBar.module.scss';
import Circle from '../Circle/Circle';

const SearchBar = ({ onFilterClick, wishlists, updateWishList, selectedUserList, header, showClusterButton }) => {


  const genDropD = (wishlists) => {
    return (
      <Menu>
        {wishlists && wishlists.map((wishlist, key) => (<Menu.Item key={key}>
          <div className={styles.watchList}>
            <h4>{wishlist.name}</h4>
            <Checkbox checked={wishlist.selected} onChange={(e) => updateWishList(e.target.checked, wishlist.id)}/>
            <Circle color={wishlist.color}/>
          </div>
        </Menu.Item>))}
      </Menu>
    )
  }

  const onClusterClick = () => {
      window.location= "/cluster"
  }
  const menu = genDropD(wishlists);

  return (
    <nav className={styling.nav}>
      <div>
        <h1 className={styling.heading}>{header}</h1>
      </div>

      <div className={styles.buttons}>
        <Button text="Show Clusters" onClick={onClusterClick} />
        <Button text="Filter" onClick={onFilterClick} />
        <Dropdown overlay={menu} placement="topCenter">
          <AiButton className={styles.dropdownbtn} size="large">{(selectedUserList && selectedUserList.name) || "Watch Lists"}</AiButton>
        </Dropdown>
      </div>
    </nav>
  );
};

export default SearchBar;
