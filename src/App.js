import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import VideoContent from './components/VideoContent/VideoContent';
import { useInView } from 'react-intersection-observer';
function App() {

  const {ref, inView} = useInView({
    /* Optional options */
    threshold: 1,
  });

console.log(inView);


  return (
    <div className="App">
        <Header/>
        <div className='container'>
          <div className='wrapper'>
            <Slider/>
       
                <VideoContent 
                    authorPhoto="./image/profile_dili.me.jpg"
                    content=""
                    videPlayer={ref}
                    video="./video/dili.me.mp4"
                    poster="./image/dili.me.png"
                    nameAuthor="dili.me" 
                    contentName="" 
                    count=""
                />
                <VideoContent 
                    authorPhoto="./image/profile_dili.me.jpg"
                    content=""
                    videPlayer={ref}
                    video="./video/dili.me.mp4"
                    poster="./image/dili.me.png"
                    nameAuthor="dili.me" 
                    contentName="" 
                    count=""
                />
                <VideoContent 
                    authorPhoto="./image/profile_dili.me.jpg"
                    content=""
                    videPlayer={ref}
                    video="./video/dili.me.mp4"
                    poster="./image/dili.me.png"
                    nameAuthor="dili.me" 
                    contentName="" 
                    count=""
                />

           
          
           
           
          </div>
        </div>
    </div>
  );
}

export default App;
