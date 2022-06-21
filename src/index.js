import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Youtube from './youtubeAPI';

const root = ReactDOM.createRoot(document.getElementById('root'));

const youtube = new Youtube()
root.render(
    <React.StrictMode>
        <App youtube={youtube}/>
    </React.StrictMode>,
);