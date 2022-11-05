import React, { useState } from 'react';
import './Navbar.scss';
import { ReactComponent as Settings} from '../../../../assets/icons/settings.svg';
import { ReactComponent as Help } from '../../../../assets/icons/help-outline.svg';
import { ReactComponent as NotificationOutline } from '../../../../assets/icons/notification-outline.svg';
import { ReactComponent as ExpandMore } from '../../../../assets/icons/expande_more.svg';
import { ReactComponent as AddProject} from '../../../../assets/icons/add_project.svg';
import { Link } from 'react-router-dom';

export function Navbar() {

    const [isOpenProjectDropdown, setIsOpenProjectsDropdown] = useState(false);

    const openProjectsList = () => {
        setIsOpenProjectsDropdown(!isOpenProjectDropdown);
    }

    return <nav className='flex f-baseline'>
        <div className='section'>
            <div className='logo'>
                <img src={require('../../../../assets/images/YouTrack_Icon.png')} 
                    alt='' 
                    width='38' 
                    height='38' />
                    AntoTrack
            </div>
            <ul className='no-bullet flex'>
                <li>Dashboard</li>
                <li>Agile Board</li>
                <li>Reports</li>
                <li>
                    <span onClick={openProjectsList}>Projects <ExpandMore width={15} height={15} /></span>
                    <div style={{display:  isOpenProjectDropdown ? 'block': 'none'}} 
                        className='projects-list'
                        data-testid="projects-list">
                        <ul className='no-bullet'>
                            <li>
                                <Link to='/new-project' onClick={openProjectsList}>
                                    <AddProject width={15} height={15} /> New Project
                                </Link>
                            </li>
                            <li>Project 1</li>
                            <li>Project 2</li>
                            <li>Project 3</li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div className='section'>
                <button className="btn btn-primary">New Issue</button>
            </div>
        </div>
        <div className='section pr-1'>
            <NotificationOutline className='margin-icon'/>
            <Help className='margin-icon'/>
            <Settings className='margin-icon'/>
            <img src={require('../../../../assets/images/default-user.png')} 
                alt='' width={24} height={24}
                className="margin-icon"
                style={{border: '1px solid lightgray'}} />
        </div>
    </nav>
}