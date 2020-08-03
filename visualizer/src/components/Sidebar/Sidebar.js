import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  AiOutlineBarChart,
  AiFillBell,
  AiOutlineUpload,
  AiFillFileText,
} from 'react-icons/ai';

import styling from './Sidebar.module.scss';

const Sidebar = ({ history }) => {
  return (
    <aside className={styling.sidebar}>
      <div className={styling.content}>
        <div>
          <div className={styling.logo}>A</div>

          <ul className={styling.menu}>
            <li onClick={() => history.push('/dashboard')}>
              <AiFillFileText className={styling.icon} />
            </li>

            <li onClick={() => history.push('/visualize')}>
              <AiOutlineBarChart className={styling.icon} />
            </li>

            <li onClick={() => history.push('/upload')}>
              <AiOutlineUpload className={styling.icon} />
            </li>

            <li onClick={() => history.push('/alerts')}>
              <AiFillBell className={styling.icon} />
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default withRouter(Sidebar);
