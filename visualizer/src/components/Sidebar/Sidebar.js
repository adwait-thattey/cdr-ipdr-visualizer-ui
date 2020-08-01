import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  AiOutlineBarChart,
  AiOutlineLogout,
  AiOutlineUpload,
} from 'react-icons/ai';

import styling from './Sidebar.module.scss';

const Sidebar = ({ history }) => {
  return (
    <aside className={styling.sidebar}>
      <div className={styling.content}>
        <div>
          <div className={styling.logo}>A</div>

          <ul className={styling.menu}>
            <li onClick={() => history.push('/visualize')}>
              <AiOutlineBarChart />
            </li>

            <li onClick={() => history.push('/upload')}>
              <AiOutlineUpload />
            </li>

            <li>
              <AiOutlineLogout onClick={() => history.push('/auth')} />
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default withRouter(Sidebar);
