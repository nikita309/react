import './App.css';
import React,{useState,useEffect} from 'react';
import axios from "axios";

function App() {
  const [msgs, setmsg] = useState([]);
  useEffect(()=>{
    async function getAllMsg(){
      try{
        const msgs = await axios.get("http://127.0.0.1:8000/msg/")
        console.log(msgs.data)
        setmsg(msgs.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllMsg()
  },[])
  return (

      <div className='layout'>
        <h4>Healthcheck server result:</h4>
        <div>
          {msgs.map(msg =>{
            return <p>{msg.message}</p>
          })
          }
        </div>
    
    
      </div>

        
  );
}

export default App;
