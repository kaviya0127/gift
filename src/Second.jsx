import React, { useState } from 'react'
import "./App.css"
import './Photo.jsx'
import { useNavigate } from 'react-router-dom';


function Second(){
  const navigate = useNavigate()
 function handleRun(){
  setTimeout(()=>{
        navigate("/Photo")
       });
   
}
  
  const [text,setText] = useState('');
  const [text1,setText1] = useState('');
  const [text2,setText2] = useState('');
  const [text3,setText3] = useState('');
  
  const [text7,setText7] = useState('');
  const [text8,setText8] = useState('');
  const [text9,setText9] = useState('');
  const [text00,setText00] = useState('');

  
  return(
    <>
    
 <div className='fair'>
  <button className='circle' onClick={()=>setText("𝐻𝒜𝒫𝒫𝐼𝐸𝒮𝒯 ")}>{text}</button>
  <button className='circle' onClick={()=>setText1("𝐵𝐼𝑅𝒯𝐻𝒟𝒜𝒴")}>{text1}</button>
  <button className='circle' onClick={()=>setText2(" 𝑀𝒴 𝐵❤𝒴  🎀 ")}>{text2}</button>
  </div>
  <br/><br/>
  <div className='rec'>
  <button className='rec1' onClick={()=>setText3("𝟤𝟢 𝓎𝑒𝒶𝓇𝓈 𝒸𝑜𝓂𝓅𝓁𝑒𝓉𝑒𝒹 — 𝓃𝑜𝓉 𝒶 𝒹𝒶𝓎 𝓂𝑜𝓇𝑒, 𝓃𝑜𝓉 𝒶 𝓂𝑜𝓃𝓉𝒽 𝓁𝑒𝓈𝓈.")}>{text3}</button><br/><br/>
  <button className='rec5' onClick={()=>setText7("sǝʎǝ ʎɯ uı ʇsǝq ǝɥʇ ǝq llıʇs p,noʎ 'ǝnʇɐʇs ɐ ʇsnɾ ǝɹǝʍ noʎ ɟı uǝʌƎ")}>{text7}</button><br/><br/>
  <button className='rec6' onClick={()=>setText8("Yσυɾ ‘ɱɱ’ ιʂ ɱყ ϝαʋσɾιƚҽ Ⴆαƈƙɠɾσυɳԃ ʂσυɳԃ—I ƈσυʅԃ ƚҽʅʅ ყσυ ʂƚσɾιҽʂ ϝσɾҽʋҽɾ")}>{text8}</button><br/><br/>
  <button className='rec7' onClick={()=>setText9("𝒜𝓈 𝓉𝒽𝑒 𝓃𝒶𝓂𝑒 𝒫𝒶𝓃𝑔𝓊 𝓈𝓊𝑔𝑔𝑒𝓈𝓉𝓈, 𝓎❀𝓊 𝒶𝓇𝑒 𝓂𝓎 ♡𝓉𝒽𝑒𝓇 𝒽𝒶𝓁𝒻—𝓂𝓎 𝓈𝒽𝒶𝓇𝑒 𝒾𝓃 𝓉𝒽𝒾𝓈 𝓌❀𝓇𝓁𝒹")}>{text9}</button><br/><br/>
  <button className='rec8' onClick={()=>setText00("As you sail through discoveries, my young cadet, pause to witness this timeless treasure in the museum ♥")}>{text00}</button><br/><br/>
  <br/>
  <button  className="last" onClick={handleRun}>𝔾𝕌𝔻 ℕ𝔸𝔸ℍℍ!!</button>
  
</div>
  </>
  )
}   

export default Second