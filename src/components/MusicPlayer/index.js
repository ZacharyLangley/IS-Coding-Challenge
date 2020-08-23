import React from 'react';
import './index.scss';

// <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/655383102&color=%237dbfc5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/perfectmsc" title="Perfect" target="_blank" style="color: #cccccc; text-decoration: none;">Perfect</a> · <a href="https://soundcloud.com/perfectmsc/sets/lofi" title="Lofi?" target="_blank" style="color: #cccccc; text-decoration: none;">Lofi?</a></div>

const MusicPlayer = () => {
    return (
        <iframe width="100%" height="90" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/655383102&color=%237dbfc5&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
    )
};

MusicPlayer.propTypes = {}

export default MusicPlayer;