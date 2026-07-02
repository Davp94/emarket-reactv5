import { useEffect, useState } from "react";
import { PromocionCard } from "./components/PromocionCard";
import { MyButton } from "./components/MyButton/MyButton";
import { Carrousel } from "./components/Carrousel";
import type { Promocion } from "./types/Promotion";
import { Promotions } from "./components/Promotions/Promotions";
import { Navbar } from "./components/navbar/Navbar";


function App() {

  return (
    <>
      <Navbar/>
      <main>
        <div>
          <Carrousel/>
          <Promotions />
        </div>
      </main>

    </>
  );
}

export default App;
