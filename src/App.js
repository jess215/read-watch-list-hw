
import './App.css';
import WatchList from './WatchList';

function App() {
  return (
   <div>
     <WatchList name='TV Shows' initalShows={[{id: 1, title: 'The Witcher', completed: false}]}/>
   </div>
  );
}

export default App;
