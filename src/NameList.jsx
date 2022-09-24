import React from 'react';
import { Person } from './Person';

export const NameList = () => {
  const persons = [
    {
      id: 1,
      name: 'Upendra',
      age: 25,
      skill: 'react',
    },
    {
      id: 2,
      name: 'Surya',
      age: 24,
      skill: 'html',
    },
    {
      id: 3,
      name: 'Pujitha',
      age: 19,
      skill: 'java',
    },
    {
      id: 4,
      name: 'Teja',
      age: 20,
      skill: 'python',
    },
  ];

  const PersonList = persons.map((person) => <Person key = {person.id} person={person} />);
  return <div> {PersonList}</div>;
};
