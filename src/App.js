import { ChatEngine } from "react-chat-engine";

import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginPage from './components/LoginPage';

// functional component 
const projectID="b3a0f2e7-8207-4f34-8f47-613ef6cc3401";

const App = () => {

    // if we are not logged in show the login page 
    if(!localStorage.getItem('username')) {return <LoginPage/>}

    return (
        <ChatEngine
            height="100vh"
            projectID="b3a0f2e7-8207-4f34-8f47-613ef6cc3401"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            // rendering component for own chat feed i.e. customizing part in the middle 
            renderChatFeed= {(chatAppProps)=> <ChatFeed{ ...chatAppProps}/>}
            // ... spreads the props of chatAppProps to ChatFeed 
        />
    );
} 

export default App;


