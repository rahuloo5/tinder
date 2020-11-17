import React from 'react'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import tinder from '../../assest/tinderlogo.png';
import './Header.css'
function Header() {
    return (
        <div className="Header">
            <IconButton>
                <PeopleAltIcon fontSize="large" className="header_icon"/>
            </IconButton>

            <img src = {tinder} alt="logo"  className="image"/>

            <IconButton>
                <ForumIcon  fontSize="large" className="header_icon"/>
            </IconButton>

            
            
        </div>
    )
}

export default Header
