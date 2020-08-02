import React from 'react';

import styling from './Header.module.scss';
import Avatar from '../Avatar/Avatar';

const Nav = ({ title, child }) => {
  return (
    <nav className={styling.nav}>
      {title && <div className={styling.title}>{title}</div>}

      {child}

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
