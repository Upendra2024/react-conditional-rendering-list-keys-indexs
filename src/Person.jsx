import React from 'react';
//remember here we are destructing the array of objects don't forgot to put the curly braces while destructuring the any thing inside paranthasis.
export const Person =({person ,index}) =>{
  return(
    <div>
      <h4>{index} HI i am {person.name} age is {person.age} and my skill is {person.skill}</h4></div>
  )
}