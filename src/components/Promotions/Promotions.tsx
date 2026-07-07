import { useEffect, useState } from "react";
import type { Promocion } from "../../types/Promotion";
import { PromocionCard } from "../PromocionCard/PromocionCard";
import styles from "./Promotions.module.css";
import { supabase } from '../../utils/supabase';

export function Promotions() {
  //passwordSupabase passwordBlumbit1!
  const [promotions, setPromotions] = useState<Promocion[]>([]);


  useEffect(() => {
    async function fetchPromotions() {
      const { data, error } = await supabase.from('promotions').select('*');
      if(error){
        console.error('Error recuperando promociones');
      } else if (data) {
        setPromotions(data as Promocion[]);
      }
    } 
    fetchPromotions(); 
  }, []);
  
  return (
    <section className={styles.section} id="promociones">
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Promociones Destacadas</h2>
          <p className={styles.subtitle}>
            Aprovecha nuestras mejores ofertas seleccionadas para ti.
          </p>
        </div>
        <div className={styles.toolbar}>
          <a href="#" className={styles.link}>
            Ver todas las ofertas
          </a>
        </div>
      </div>
      <div className={styles.grid}>
        {promotions.map((p) => (
          <PromocionCard
            key={p.id}
            titleProp={p.title}
            descripcionProp={p.description}
            imageUrl={p.image_url}
          />
        ))}
      </div>
    </section>
  );
}
