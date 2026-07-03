import { useState } from "react";
import { MyButton } from "../MyButton/MyButton";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>E-Market</div>
          <ul className={styles.navLinks}>
            <li>
              <a href="#carrousel" onClick={()=>setIsSelected(0)} className={`${styles.navLink} ${isSelected == 0 ? styles.navLinkActive : ''}`} >Inicio</a>
            </li>
            <li>
              <a href="#promociones" onClick={()=>setIsSelected(1)} className={`${styles.navLink} ${isSelected == 1 && styles.navLinkActive}`}>Promociones</a>
            </li>
            <li>
              <a href="#contacto" onClick={()=>setIsSelected(2)} className={`${styles.navLink} ${isSelected == 2 && styles.navLinkActive}`}>Contact</a>
            </li>
          </ul>
          <div className={styles.actionSection}>
            <MyButton size="sm" variant="primaryContainer">Ingresar a la tienda</MyButton>
          </div>
        </nav>
      </header>
    </>
  );
};
