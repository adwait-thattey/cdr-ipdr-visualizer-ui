import React from 'react';
import { withRouter } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogout, AiOutlineSetting, AiOutlineUnorderedList } from 'react-icons/ai';

import styling from './Sidebar.module.scss';

const Sidebar = ({ history }) => {
    
    return (
        <aside className={styling.sidebar}>
            <div className={styling.content}>
                <div>
                    <div className={styling.logo}>A</div>
                    
                    <ul className={styling.menu}>
                        <li onClick={() => history.push('/services')}>
                            <AiOutlineUnorderedList />
                        </li>
                        
                        <li onClick={() => history.push('/organization')}>
                            <AiOutlineHome />
                        </li>
                        
                        <li onClick={() => history.push('/settings')}>
                            <AiOutlineSetting />
                        </li>
                        
                        <li>
                            <AiOutlineLogout />
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default withRouter(Sidebar);