import './App.css';
import Cards from './components/Cards';
const App = () => {

  return (
    <div className="App">
      <h1>Upcoming Game Releases</h1>
      <h2>Peep the upcoming game releases for July 2026 👾</h2>
      <img src="src\assets\handheld.png" id="handheld" width="350" height="350"/>
      <Cards />
    </div>
  )
}

export default App