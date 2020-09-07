import React from 'react';

import classes from './VideoPlayer.module.css';

class VideoPlayer extends React.Component {
    componentDidUpdate(){
        console.log("Video Player")
        console.log(this.props)
    }
    render(){
    return(
        <div className={classes.VideoSection}>
    <div className={this.props.showVideo?classes.VideoDetails:classes.None}>
    <iframe src={`https://player.vimeo.com/video/${this.props.videoData.vimeoId}`}></iframe>
      <div className={classes.VideoInfo}>
        <p>{this.props.videoData.views} views</p>
        <div>
        <i className={this.props.videoData.isLiked=="true" || this.props.videoData.isLiked==true ?`far fa-heart ${classes.Active}`:"far fa-heart"}></i>
        <i className="far fa-comment-alt"></i>
        <i className={this.props.videoData.isSaved=="true" || this.props.videoData.isSaved==true ?`far fa-bookmark ${classes.Active}`:"far fa-bookmark"}></i>
        </div>
      </div>
    </div>
    <div className={this.props.showVideo?classes.VideoAddnInfo:classes.None}>
    <h2>{this.props.videoData.title}</h2>
    <p>{this.props.videoData.description}</p>
    </div>
    </div>
    );
}
}

export default VideoPlayer;