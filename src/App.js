
import './App.css';
import Activity from './components/Activity';
import Body1 from './components/Body1';
import Body2 from './components/Body2';
import Menu from './components/Menu';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='container' width="100%">
    <div   style={{backgroundColor:"rgb(240, 244, 247)",height:"100%"}}>

      <div><Navbar/></div>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center",gap:"20px",flexWrap:"wrap"}}>
        <div style={{}}><Menu/></div>
      <div className='body'>
      <Body1/>
      <Body2/>
      </div>
      <div className='activity' style={{marginTop:"108px"}}>
        <Activity/>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
