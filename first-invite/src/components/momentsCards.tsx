import { useEffect } from 'react';
import '../pages/landing.css';
import foto2 from "../assets/foto2.jpeg";
import foto3 from "../assets/foto3.jpeg";
import foto4 from "../assets/foto4.jpeg";



export default function MomentCard() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.2 } // Se activa cuando el 20% del elemento es visible
        );

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);


    return (
        <>
       
        <div className="moments-container">
            <p className="moment-paragraph top-left fade-in">
                El destino cruzó nuestros caminos <br />
                y el amor hizo el resto...
            </p>
            <div className="moment-card card-1 fade-in">
                <img src={foto2} alt="Momento especial 1" />
            </div>
            <div className="moment-card card-2 fade-in">
                <img src={foto3} alt="Momento especial 2" />
            </div>
            <div className="moment-card card-3 fade-in">
                <img src={foto4} alt="Momento especial 3" />
            </div>
            <p className="moment-paragraph middle-center fade-in">
                Nuestra historia de amor está llena de momentos hermosos
            </p>
            <p className="moment-paragraph bottom-right fade-in">
                y este es uno de los más importantes.
            </p>
        </div>
        </>
    );
};


