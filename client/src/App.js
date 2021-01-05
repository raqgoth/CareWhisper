import WhisperEntry from './components/WhisperEntry'
import Memes  from './components/Memes'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <h3>Care Whisper</h3>
      <WhisperEntry />
      <h3>Memes</h3>
      <Memes />
    </div>
  )
}

export default App
