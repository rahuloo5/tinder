import React from 'react'
import './Buttons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StartRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlasOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'


function Buttons() {
    return (
        <div className="buttons">
            <IconButton className="swipeButtons_repeat">
                <ReplayIcon fontSize="large"/>
                 </IconButton>

                 <IconButton className="swipeButtons_left">
                <CloseIcon fontSize="large"/>
                 </IconButton>

                 <IconButton className="swipeButtons_star">
                <StartRateIcon fontSize="large"/>
                 </IconButton>

                 <IconButton className="swipeButtons_right">
                <FavoriteIcon fontSize="large"/>
                 </IconButton>

                 <IconButton className="swipeButtons_light">
                <FlasOnIcon fontSize="large"/>
                 </IconButton>
            
        </div>
    )
}

export default Buttons
