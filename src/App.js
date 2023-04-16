import { useEffect } from 'react';
import './App.css';

const tg=window.Telegram.WebApp;

function App() {

  useEffect( () => {
    tg.ready();
  }, [])
  
  const onClose = () => {
    tg.close();
  }


  return (
    <div className="App">
      тут будет каталог
      <button onClick={onClose}>Это кнопка закрытия</button>
    </div>
  );
}

export default App;
