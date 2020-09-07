import React from 'react';
import { Link } from 'react-router-dom';

import classes from './VideoCard.module.css';

const VideoCard = (props) => {

    return(
        <Link className={classes.VideoCard} to={`/?Vid=${props.id}`}>
            <div onClick={props.cardClick} className={props.active?`${classes.VideoCardDiv} ${classes.Active}`:classes.VideoCardDiv}>
                <img className={classes.Thumbnail} src={props.thumbnail} alt="Video Thumbnail" />
                <h3 className={classes.Title}>{props.title}</h3>
            </div>
        </Link>
    );
}

export default VideoCard;