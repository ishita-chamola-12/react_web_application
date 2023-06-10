import { useState } from "react";
// Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.
import axios from "axios";
const projectID="b3a0f2e7-8207-4f34-8f47-613ef6cc3401";

const LoginPage=()=>{

    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');
// in try catch block we use asynchronus code there function has to be async
    const handleSubmit=async(e)=>{
        e.preventDefault();

        // first we authenticate whether that user exists or not 
        const authUser={'Project-ID' : 'b3a0f2e7-8207-4f34-8f47-613ef6cc3401',
                        'User-Name':username,'User-Secret':password };
        try {

            await axios.get('https://api.chatengine.io/chats',{headers:authUser});

            // after authorization, we store login info in local storage 
             localStorage.setItem('username',username);
             localStorage.setItem('password',password);
            // reload page so second time page reloads we can render something differently 
             window.location.reload();
 
        } catch (error) {
            setError("Incorrect credentials")
            
        }
        






    }

    return(
        <div className="wrapper">

            <div className="form">

                <h1 className="title">Chat Application </h1>
                <form onSubmit={handleSubmit}>

                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="input" placeholder="Enter Username " required/>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input" placeholder="Enter Password " required/>
                    <div align="center">

                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>

                    </div>
                    <h2 className="error">{error}</h2>



                </form>
            </div>


        </div>
    )


}

export default LoginPage;