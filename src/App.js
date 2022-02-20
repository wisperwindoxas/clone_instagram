import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import VideoContent from './components/VideoContent/VideoContent';

function App() {




  return (
    <div className="App" >
        <Header/>
        <div className='container'>
          <div className='wrapper'>
            <Slider/>
       
                <VideoContent 
                    authorPhoto="./image/profile_dili.me.jpg"
                    content=""
                
                    video="./video/dili.me.mp4"
               
                    nameAuthor="dili.me" 
                    contentName="" 
                    counts="45700"
                />
                <VideoContent 
                    authorPhoto="./image/sollihon.jpg"
                    content=""

                    video="./video/Sollihon.mp4"
                   
                    nameAuthor="Sollihon domla" 
                    contentName="" 
                    counts="1200"
                />
                <VideoContent 
                    authorPhoto="./image/shukrullo.jpg"
                    content=""
                
                    video="./video/Shukrullo_domla.mp4"
             
                    nameAuthor="Shukrullo domla
                    " 
                    contentName="" 
                    counts="1000000"
                />
                <VideoContent 
                    authorPhoto="./image/abdukarim.jpg"
                    content=""
                
                    video="./video/abdukarim.mp4"
                    
                    nameAuthor="abdukarim mirzayev" 
                    contentName="" 
                    counts="14510"
                />
                <VideoContent 
                    authorPhoto="./image/muhammad.jpg"
                    content=""
                
                    video="./video/MuhamadAli.mp4"
                  
                    nameAuthor="MuhammadAli Eshonqulov
                    " 
                    contentName="" 
                    counts="100"
                />

           
          
           
           
          </div>
        </div>
    </div>
  );
}

export default App;
