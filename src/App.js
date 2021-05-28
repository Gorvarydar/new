import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/SettingsPage/Settings';


const App = (props) => {

//   let posts = [
//     { id: 1, message: 'Mmm,Hi...', counts: 5},
//     { id: 2, message: 'Hi, Mr.Fox, where is my chicken?', counts: 3 },
//     { id: 3, message: "I don't now,I'am still hungrry...", counts: 21 },
// ]
let messages = [
  { id: 1, text: 'What`s uuuuuuup!!!!' },
  { id: 2, text: 'Niiiice!!!!' },
  { id: 3, text: 'Yeahhhhh...' },
  { id: 4, text: 'YO!!!' },
]

let dialogs = [
  { id: 1, name: 'first' },
  { id: 2, name: 'second' },
  { id: 3, name: 'third' },
  { id: 4, name: 'fourth' }
]
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
     
          <Route path='/messages' render={ () => <Dialogs messages={props.messages} dialogs={props.dialogs}/>} />
          <Route path='/profile' render={ () => <Profile posts={props.posts}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings}/>

        </div>
      </div>
    </BrowserRouter>)
}



export default App;
