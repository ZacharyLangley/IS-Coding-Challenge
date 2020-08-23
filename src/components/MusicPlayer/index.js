import React from 'react';
import './index.scss';

const MusicPlayer = () => {
    return (
        <iframe title={"spotify_player_iframe"} src={"https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM"} width={"100%"} height={"100%"} frameBorder={"0"} allowtransparency={"true"} allow={"encrypted-media"}/>
    )
};

MusicPlayer.propTypes = {}

export default MusicPlayer;