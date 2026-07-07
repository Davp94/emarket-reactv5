import styles from "./Footer.module.css";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  {
    title: "Productos",
    links: [
      { label: "Ofertas", href: "#" },
      { label: "Novedades", href: "#" },
      { label: "Más vendidos", href: "#" },
      { label: "Categorías", href: "#" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Envíos", href: "#" },
      { label: "Devoluciones", href: "#" },
      { label: "Soporte", href: "#" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { label: "Sobre nosotros", href: "#" },
      { label: "Trabaja con nosotros", href: "#" },
      { label: "Prensa", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={`${styles.logoIcon} material-symbols-outlined`}>
            shopping_bag
          </span>
          <span className={styles.logoText}>eMarket</span>
          <p className={styles.brandDesc}>
            Tu tienda online de confianza. Los mejores productos al mejor
            precio.
          </p>
        </div>
        <nav className={styles.nav}>
          {columns.map((col) => (
            <div key={col.title} className={styles.column}>
              <h4 className={styles.columnTitle}>{col.title}</h4>
              <ul className={styles.linkList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.link}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} eMarket. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
