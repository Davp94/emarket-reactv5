
import { Carrousel } from "./components/carrousel/Carrousel";
import { Promotions } from "./components/Promotions/Promotions";
import { Navbar } from "./components/navbar/Navbar";


function App() {

  return (
    <>
      <Navbar/>
      <main style={{marginTop: '5rem'}}>
        <div style={{maxWidth: 'var(--spacing-container-max-width)', marginInline: 'auto' }}>
          <Carrousel/>
          <Promotions />
        </div>
      </main>

    </>
  );
}

export default App;
