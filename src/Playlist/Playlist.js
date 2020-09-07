import React from 'react'
import VideoCard from '../VideoCard/VideoCard'
import axios from 'axios';
import classes from './Playlist.module.css'

class Playlist extends React.Component {
    state = {
        videoList: [],
        activeCard:1
    }

    componentDidMount() {
        axios.get("https://5ee4ea29ddcea00016a37041.mockapi.io/home")
        .then(response => {
            this.setState({videoList: [...response.data]});
            this.props.showVideo();
        })
        .catch(err => {
            console.log('Call Failed!!');
        });
    }
    onUserClick=(key)=>{
        window.scrollTo(0,100);
        this.setState({
            activeCard:key
        })
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("Hello")
        if(nextState.activeCard!=this.state.activeCard){
            return true;
        }
        return this.state.activeCard!=this.props.video;
    }
    componentDidUpdate(){   
        this.props.rerenderVideoPlayer();
    }

    render() {
        return(
            <div className={classes.PlaylistSection}>
            {

            this.state.videoList.map(item =>{ 
                return <VideoCard key={item.id} id={item.id} thumbnail={item.thumbnail} title={item.title} active={item.id==this.state.activeCard? true:false} cardClick={()=> this.onUserClick(item.id)}/>
                 }
                 
        )}
    
    
    </div>

        )}

}

export default Playlist;