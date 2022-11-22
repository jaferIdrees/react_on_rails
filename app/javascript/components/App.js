import React, { useState, useEffect } from 'react';

export default function App() {
  const [message, setMessage] = useState('Hello');

  const fetchMessage = () => fetch('http://localhost:3000/message/show').then((response) => response.json()).then((data) => {
    setMessage(data);
  });

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <main>
      <div className="container">

        <p>
          {message}
        </p>
      </div>
    </main>
  );
}
