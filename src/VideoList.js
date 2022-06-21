import React from 'react';
import VideoItem from './VideoItem';


export default function VideoList({myvideo, onVideoClick, display}) {

  return (
    <div>
      <ul className='videoList'>
          {myvideo.map(list => <VideoItem mylist={list} key={list.id} onVideoClick={onVideoClick} ifdisplay={display}/>)}
      </ul>
    </div>
  );
}
