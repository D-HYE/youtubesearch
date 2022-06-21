import React from 'react';

export default function VideoItem({mylist, mylist:{snippet}, onVideoClick, ifdisplay}) {
    const displayType =  ifdisplay === 'list'?'list':'grid'
  return (
        <li className={`container ${displayType}`} onClick={() => onVideoClick(mylist)}>
            <div className="Thumnail">
                <img src={snippet.thumbnails.medium.url} alt="thumnail"></img>
            </div>
            <div className="Desc">
                <h3>{snippet.title}</h3>
                <p>{snippet.channelTitle}</p>
            </div>
        </li>
  );
}
