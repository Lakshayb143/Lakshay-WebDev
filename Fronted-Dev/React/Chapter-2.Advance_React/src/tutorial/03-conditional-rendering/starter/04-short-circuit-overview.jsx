import { useState, useEffect } from 'react';

const ShortCircuitOverview = () => 
{
  // Truthy Value
  const [ name , setName ] = useState('lakshay');
  // Falsy Value
  const [ text , setText ] = useState('');





  return <div>
    {/* { if (name) {"won't work"}} */}
    {/* WE can't use conditionals in JSX */}
    <h4>Falsy OR : {text || "Hello World"}</h4>
    <h4>Falsy AND : {text && "Hello World"}</h4>
    <h4>Truthy OR : {name || "Hello World"}</h4>
    <h4>Truthy AND : {name && "Hello World"}</h4>
  </div>;
};




export default ShortCircuitOverview;
