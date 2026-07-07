import { MyButton } from "../MyButton/MyButton";
import styles from "./Contact.module.css";

interface ContactItem {
  icon: string;
  title: string;
  content: string;
}

const contactData: ContactItem[] = [
  {
    icon: "call",
    title: "Teléfono",
    content: "+1 (555) 123-4567",
  },
  {
    icon: "mail",
    title: "Correo Electrónico",
    content: "contacto@emarket.com",
  },
  {
    icon: "location_on",
    title: "Dirección",
    content: "Av. Principal 123, Ciudad",
  },
  {
    icon: "schedule",
    title: "Horario",
    content: "Lun - Vie: 9:00 - 18:00",
  },
];

export function Contact() {
  return (
    <section className={styles.section} id="contacto">
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Contáctanos</h2>
          <p className={styles.subtitle}>
            Estamos aquí para ayudarte. No dudes en escribirnos.
          </p>
        </div>
        <div className={styles.toolbar}>
          <a href="#" className={styles.link}>
            Todos los medios de contacto
          </a>
        </div>
      </div>
      <div className={styles.grid}>
        {contactData.map((item) => (
          <article key={item.title} className={styles.card}>
            <span className={`${styles.icon} material-symbols-outlined`}>
              {item.icon}
            </span>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardContent}>{item.content}</p>
          </article>
        ))}
      </div>
      <div className={styles.formWrapper}>
        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>Envíanos un mensaje</h3>
          <p className={styles.formSubtitle}>
            Te responderemos a la brevedad posible.
          </p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formRow}>
              <input
                type="text"
                placeholder="Nombre"
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Correo Electrónico"
                className={styles.input}
              />
            </div>
            <textarea
              placeholder="Mensaje"
              className={styles.textarea}
              rows={4}
            />
            <div className={styles.formActions}>
              <MyButton variant="primary" size="md">
                Enviar mensaje
              </MyButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
