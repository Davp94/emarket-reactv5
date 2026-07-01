import { useEffect, useRef, useState } from "react";
import type { SlideData } from "../types/SlideData";
import { MyButton } from "./MyButton";

export function Carrousel () {

    //let currentSlide: number = 0;
    const [currentSlide, setCurrentSlide] = useState(0);
    const carrouselRef = useRef<HTMLDivElement>(null);
    const [slides, setSlides] = useState<SlideData[]>([
        {
            id: 1,
            bgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqtX_RJ96e-VKZVQNH5CA27IHXglb7IARgztcyujku_ZMUBSFdfh3Jozy9d5bH9oyyaFguAJXGvyGflq5f01kkx7CgREFW7JGlIjyZpcB4cuUQ_egd2KGC2XlyI8Orn9e6ef4GRiyUNzepwCnpvfkLyfzh9X9YlKqp9G4jd_qQYxq0t8lPGyO4n1qX-G3U0jdJl8Ze04dM7OFw_2ktU1x1AfiSnqwdVoBNJ82yUOECxNkm0eK3RW3YXg',
            title: 'Envíos gratis en todas tus compras',
            description: 'Disfruta de la mejor experiencia de compra sin cargos adicionales de entrega en todo el país.',
            buttonText: 'Comprar Ahora'
        },
        {
            id: 2,
            bgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2glnYQUFFhtzna2tok1XOrlpg0qQAl-N4JvtN2rWHzYZ_Y2RFMnGyFBwxMGKOKdU6-NZsMFhQzx0PHuns8sIQ_VqSVmDyRmwZVlENeo0kdyqqUDz9qEa2jY24RZGgCGFfjK68DJMvsYT0RXpa6yJ5OACgs5MweuAGX9MaQKMloqIUQlhmcrxRUHHWCxSC7yj_4q_ZqKR015tNI-zH0NiDj5kbMuHvFzWKXcFSITL6WPI83A7TjjwS0g',
            title: 'Gran Liquidación: hasta 50% off',
            description: 'Renueva tu hogar y tu estilo con descuentos imperdibles en todas las categorías de nuestra tienda.',
            buttonText: 'Ver Ofertas'
        }
    ]);

    useEffect(() => {
        if(carrouselRef.current)
        {
            const scrollAmount = carrouselRef.current?.offsetWidth * currentSlide;
            carrouselRef.current?.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
        console.log('CHANGE CARROUSEL TO', currentSlide)
    }, [currentSlide])
    //data info slides

    return (
        <section>
            {currentSlide}
            <div ref={carrouselRef}>
                {slides.map(
                    slide => (
                    <div key={slide.id}>
                        <div style={{backgroundImage: `url(${slide.bgUrl})`}}>
                        </div>
                        <div>
                            <h1>{slide.title}</h1>
                            <p>{slide.description}</p>
                            <MyButton>
                                {slide.buttonText}
                            </MyButton>
                        </div>
                    </div>)
                )}
            </div>
            <div>
                {slides.map((_, index)=>(
                    <button onClick={()=>setCurrentSlide(index)
                    }></button>
                ))}
            </div>
        </section>
    )
}