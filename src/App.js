import './App.css';
import React,{useEffect, useState} from 'react'
import Icerik from './icerik';


export const TemaVerisi=React.createContext()
var sayi=0;
var  tema={
  dark:{
  color: "white",
  backgroundColor:"black"
  },light:{
    color:"black",
    backgroundColor:"white"
  }
  }

function App() {
  const[temas,setTemas]=useState(tema.dark);
  const[timer,setTimer]=useState(sayi)

  useEffect(()=>{

    if(timer!==10){
      const interval=setInterval(()=>{
        setTimer(timer+1)
      },1000)
      return ()=>clearInterval(interval)

    }
  },[timer])
  return (


    
    <div className="App">
    <p style={{height:"100px" ,width:"100px" }}>{timer}</p>
      <TemaVerisi.Provider value={temas}>
        <Icerik/>
      </TemaVerisi.Provider>

      <button onClick={()=>{
        if(temas===tema.dark){setTemas(tema.light)}
        else{ setTemas(tema.dark)}
      }
        }className='buton1'>{tema.dark===temas?"açık":"dark"
      }</button>

     
      
    </div>
  );
}


export default App;



