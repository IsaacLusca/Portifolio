import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import NavBar from "./scenes/Navbar";

function App() {
  // Estado para armazenar a página selecionada, iniciando com "home"
  const [selectedPage, setSelectedPage] = useState("home") ;
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="App bg-deep-blue">
      <NavBar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App;
