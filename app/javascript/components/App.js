
import React from 'react';

export default function App() {
    /*const loadData = async () => {
        const response = await axios.get('/message/show');
        return response.data.message;
      };*/
   /*const  text = fetch("http://localhost:3000/message/show").then((response) => response.json().then((user) => {
    return user;
  }))*/
  
  function show_message(response) {return (<p>{response}</p>)}
  
  let test =fetch('http://localhost:3000/message/show').then(function (response) {
	// The API call was successful
	// (wait, it was?)
	
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
    show_message(data);
}).catch(function (error) {
	// There was an error
	console.warn(error);
});

   /*const message = async () => {
    const a = await text.then((res)=>
   { 
    console.log(res)
    }); return a
    
   }*/
   const res = async () => {
    await test
    return test
};
   console.log(res().then());
  
  return (<main>
      <div className="container">
     
        <p>
        
        </p>
      </div>
    </main>);
}