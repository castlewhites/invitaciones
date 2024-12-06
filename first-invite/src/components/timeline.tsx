import '../pages/landing.css';
import { motion } from "framer-motion";
import iglesia from "../assets/iglesia.png"
import recepcion from "../assets/recepcion.png"
import dresscode from "../assets/dresscode.png"
import confirmacion from "../assets/confirmacion.png"
import sobre from "../assets/sobre.png"



export default function TimeLine() {

    const events = [
        {
            time: "0:00 PM",
            title: "DRESS CODE",
            src: dresscode,
            buttonText: "VER",
            url: "https://co.pinterest.com/scastiblanco2003/dress-code/"
        },
        {
            time: "0:00 PM",
            title: "ASISTENCIA",
            src: confirmacion,
            buttonText: "CONFIRMAR",
            url: ""
        },
        {
            time: "0:00 PM",
            title: "LLUVIA DE SOBRES",
            src: sobre,

        },
        // Agrega más eventos aquí
    ];

    return (
        <div className="timeline-container">
            <div className="timeline-line"></div>
            {events.map((event, index) => (
                <motion.div
                    className=""
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }} // Permite que la animación se repita
                    transition={{ duration: 1, delay: index * 0.3 }}
                >
                    <div
                        className="event-time"
                        style={{ visibility: event.time === "0:00 PM" ? "hidden" : "visible" }}
                    >{event.time}</div>
                    <div className="event-content">
                        <h3 className="event-title">{event.title}</h3>
                        <div>
                            <img src={event.src} style={{ width: "80px" }} alt="" />
                        </div>
                        {event.title != "LLUVIA DE SOBRES" &&
                            <button
                                onClick={() => window.open(event.url, "_blank")}
                                className="event-button">{event.buttonText}</button>
                        }
                    </div>
                </motion.div>
            ))}
        </div>
    );
};











