
import React, { useState } from 'react';


export default function App() {
    
  const [message, setMessage] = useState('Hello')
  
  let test =fetch('http://localhost:3000/message/show').then(function (response) {
	// The API call was successful
	// (wait, it was?)
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	
    setMessage(data);
}).catch(function (error) {
	// There was an error
	console.warn(error);
});

 
  
  return (<main>
      <div className="container">
     
        <p>
        {message}
        </p>
      </div>
    </main>);
}