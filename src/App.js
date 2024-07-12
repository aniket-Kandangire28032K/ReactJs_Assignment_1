import './App.css';
import First, { Fourth, Second, Third } from './App1';
import FirstC, { FourthC, SecondC, ThirdC } from './App2';
import Btn from './Btn';
import Display from './Display';
import Student, { Cls } from './Student';

function App() {
  return (
    <div className="App">
      <>
      <p>Hello World</p>
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <hr/>
      <FirstC/>
      <SecondC/>
      <ThirdC/>
      <FourthC/>
      
      <Student name="Aniket" Address="Chhatrapati Sambhaji Nagar" Score="90"/>
      
      <Cls/>
      <Btn/>
      <br/>
     
      <Display name="Aniket" address="Sambhaji Nagar"/>
      </>
    </div>
  );
}

export default App;
