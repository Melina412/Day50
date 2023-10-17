// Aufgabe:

// Ihr erstellt eine Landingpage in ReactJs. Erzeugt mit Hilfe des Terminals eine React App.
// Erstellt mindestens 3 Components:
// Head
// Firstsection
// Footer
// Vergeßt den style nicht :-)

import Firstsection from "./components/Firstsection";
import Gallerysection from "./components/Gallerysection";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Firstsection />
      <Gallerysection />
    </>
  );
}

export default App;
