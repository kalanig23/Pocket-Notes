import MainPage from './pages/mainPage';
import { useState, createContext } from "react";

export const NoteListContext = createContext();

function App() {
  const [noteLists, setNoteLists] = useState([]);
  return (
    <>
    <NoteListContext.Provider value={{noteLists,setNoteLists}}>
      <MainPage/>
    </NoteListContext.Provider>
    </>
  );
}

export default App;
