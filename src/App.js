import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random'

function App() {
  return (
    <div className="first">
      <div className="box">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>

      <div className="box">
        <IdCard
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <div className="box">
        <Greetings lang="de">Ludwig</Greetings>
      </div>
      <div className="box">
        <Greetings lang="fr">François</Greetings>
      </div>
    </div>

    
  );
}

export default App;
