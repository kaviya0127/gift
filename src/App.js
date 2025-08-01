import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import songs from '../src/assets/song.mp3'
import Front from './Front.jsx';
import Second from './Second';
import Photo from './Photo.jsx';
import  { useRef, useState } from 'react'



const App = () => {
  const audioRef = useRef(null)
   const [playing,setPlaying] =useState(false);

   function handleClick(){
      
          const song = audioRef.current;
          if(playing){
           song.pause()
          }
          else{
           song.play()
          }
          setTimeout(()=>{
            setPlaying(!playing)
          },100)
          
        
      }
  return (
    <div>
       <audio ref={audioRef}>
        <source src={songs}></source>
      </audio>
      <BrowserRouter basename="/gift">
    
      <Routes>
        <Route path='/' element={<Front playing={playing} setPlaying={setPlaying} audioRef={audioRef} handleClick={handleClick}/>} />
        <Route path='/second' element={<Second playing={playing} setPlaying={setPlaying} audioRef={audioRef} handleClick={handleClick}/>} />
        <Route path='/photo' element={<Photo/>}/>

      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App