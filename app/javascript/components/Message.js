import React from 'react';

export default function Message(props) {
  const message = { ...props };
  return (
    <p>{message}</p>
  );
}
