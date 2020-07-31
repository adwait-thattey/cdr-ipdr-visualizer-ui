import React from 'react';

import styling from './SearchBar.module.scss';
import Avatar from '../Avatar/Avatar';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Nav = ({ onFilterClick }) => {
    return (
        <nav className={styling.nav}>
            <div>
                <Input placeholder="Search here" width="600px" />
            </div>
            
            <Button text="Filter" onClick={onFilterClick}/>

            <div className={styling.user}>
                <Avatar firstName="Brijesh" lastName="Bumrela" />
                
                <div>
                    <div className={styling.name}>Brijesh Bumrela</div>
                    <div className={styling.email}>brijesh@gmail.com</div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;