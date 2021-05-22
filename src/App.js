import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';


const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div class='app-wrapper-content'>
        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/profile' component={Profile}/>
        {/* <Route path='/news' component={News}/>
       */}
       {/* <News/> */}
       <Music/>
      </div>
    </div>
    </BrowserRouter>)
}



export default App;
