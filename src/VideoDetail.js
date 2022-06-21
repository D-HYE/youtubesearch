import React from 'react';

function VideoDetail({iframe, iframe:{snippet}}) {
  return (
    <div>
      <iframe className="iframevideo" type="text/html" width="720" height="405" src={`https://www.youtube.com/embed/${iframe.id}`} frameBorder="0" allowFullscreen></iframe>
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre>{snippet.description}</pre>
    </div>
  );
}

export default VideoDetail;
