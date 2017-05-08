import React from 'react';
import head from './head';
import icon from './icon';
import './App.css';

const {PUBLIC_URL} = process.env;

function Link(props) {
  return <a className='App__link' {...props}/>
}

export default function App() {
  return (
    <div className='App'>
      {head}
      {icon}
      <div className='App__links'>
        <Link href='https://github.com/jshanson7'>github</Link>
        <Link href='https://www.linkedin.com/in/jshanson7/'>linkedin</Link>
        <Link href={`${PUBLIC_URL}/resume.pdf`}>resume</Link>
        <Link href='https://www.smartyplantsapp.com/'>latest project</Link>
      </div>
    </div>
  );
}
