import './App.css'
import React, {useState, useEffect} from 'react';
import VideoList from './VideoList';
import SearchHeader from './SearchHeader';
import VideoDetail from './VideoDetail';


function App({youtube}) {
  const [videos, setvideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);

  const search = (q) => {
    youtube.search(q).then(videos => setvideos(videos))
  }

  const mainpage = () => {
    youtube.mostPopular().then(videos => setvideos(videos))
  }

  useEffect(() => {
    youtube.mostPopular().then(videos => setvideos(videos))
  }, []);

  const selectVideo = (video) => {
    setselectedVideo(video)
  }

  return (
    <div className="App">
      <SearchHeader onSearch={search} onMain={mainpage}/>
      <section className="contents">
        {selectedVideo  &&
          <div className="detail"> <VideoDetail iframe={selectedVideo}/></div>
        }
        <div className="lists"><VideoList myvideo = {videos} onVideoClick={selectVideo} display={selectedVideo?'list':'grid'}/></div>
      </section>
      
    {/* myvideo가 이름이기 때문에! 얘를 줘야 했음!!! videos는 useState의 속성(값)이었을 뿐! */}
    </div>
  );

}

export default App;
