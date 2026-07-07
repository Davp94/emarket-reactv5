import { useEffect, useRef, useState } from "react";
import type { SlideData } from "../../types/SlideData";
import { MyButton } from "../MyButton/MyButton";
import styles from "./Carrousel.module.css";
import { supabase } from "../../utils/supabase";

export function Carrousel() {
  //let currentSlide: number = 0;
  const [currentSlide, setCurrentSlide] = useState(0);
  const carrouselRef = useRef<HTMLDivElement>(null);
  const [slides, setSlides] = useState<SlideData[]>([]);

  useEffect(() => {
    async function fetchSlides() {
      const { data, error } = await supabase.from("slides").select("*");
      if (error) {
        console.error("Error recuperando promociones");
      } else if (data) {
        setSlides(data as SlideData[]);
      }
    }
    fetchSlides();
  }, []);

  useEffect(() => {
    if (carrouselRef.current) {
      const scrollAmount = carrouselRef.current?.offsetWidth * currentSlide;
      carrouselRef.current?.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
    console.log("CHANGE CARROUSEL TO", currentSlide);
  }, [currentSlide]);
  //data info slides
  const handleScroll = () => {};
  return (
    <section className={styles.section} id="carrousel">
      <div
        ref={carrouselRef}
        className={styles.carrouselContainer}
        onScroll={handleScroll}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <div className={styles.overlay}></div>
            <div
              style={{ backgroundImage: `url(${slide.bg_url})` }}
              className={styles.bgImage}
            ></div>
            <div className={styles.content}>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.description}>{slide.description}</p>
              <MyButton variant="secondaryContainer">
                {slide.button_text}
              </MyButton>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <button
            onClick={() => setCurrentSlide(index)}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
