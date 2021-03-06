import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  return (
    <div className="container">
      <Header qualifier = "Awe" title = "Task Tracker"/>
      {/* <Header /> */}
      <Tasks />
    </div>
  );
}

export default App;
