import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';
import './index.scss';

const MusicPlayer = () => {
    return (
        <iframe src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM" width="100%" height="100%;" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    )
};

export default MusicPlayer;