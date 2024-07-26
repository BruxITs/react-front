import { Navbar,Hero } from "./components";
import Acccueil from "./pages/Accueil/accueil";
import Detecter from "./pages/detecter/detecter";
import Generer from "./pages/generation/generer";
import { Route,Routes } from 'react-router-dom';
import styles from "./style";
 
const App = () => (

  <div className="bg-primary w-full overflow-hidden">
  <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

  <Routes>
  <Route exact path="/" element={<Acccueil/>}/>
  <Route exact path="/generer" element={<Generer/>}/>
  <Route exact path="/detect" element={<Detecter/>}/>

  </Routes>


  </div>
);

export default App;
