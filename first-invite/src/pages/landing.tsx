import './landing.css';
import MomentCard from '../components/momentsCards';
import InviteSection from '../components/inviteSection';
import TimeLine from '../components/timeline';
import iglesia from "../assets/iglesia.png"
import recepcion from "../assets/recepcion.png"


export default function Landing() {


    return (
        <div className='main-container'>
            <section className="main-view">
                <div className='overlay'>
                    <div className='content'>
                        <div>
                            <p className="verse">Uno solo puede ser vencido, pero dos pueden resistir...</p>
                            <p className="quote">¡La cuerda de tres hilos no se rompe fácilmente!</p>
                            <p className='verse'>Ecle. 4:12</p>
                        </div>
                        <div className="names">
                            <div className="july">Keivin</div>
                            <span className="ampersand">&</span>
                            <span className="keivin">July</span>
                        </div>
                        <p className="date">29 diciembre 2024</p>
                    </div>
                </div>
            </section>
            <section className='container-moments'>
                <div className="moments-container">
                    <MomentCard />
                </div>
                <div className='container-moments-end' >
                    <h2>Gracias por ser parte de él...</h2>
                    <hr></hr>
                </div>
            </section>
            <section className='invite-section'>
                <InviteSection />
            </section>
            <section className='timeline-section'>
                <div className='indication-container'>
                    <div className="indication">
                        <h3 className="event-title">CEREMONIA</h3>
                        <div>
                            <img src={iglesia} style={{ width: "70px" }} alt="" />
                        </div>
                        <button
                            onClick={() => window.open("https://maps.app.goo.gl/sCj8ukyGPkaLnhcn8", "_blank")}
                            className="event-button">IR</button>
                    </div>

                    <div className="indication">
                        <h3 className="event-title">RECEPCIÓN</h3>
                        <div>
                            <img src={recepcion} style={{ width: "49px" }} alt="" />
                        </div>
                        <button
                            onClick={() => window.open("https://maps.app.goo.gl/M2gTgervJrGJL4y66", "_blank")}
                            className="event-button">IR</button>
                    </div>

                </div>
                <TimeLine />
            </section>
            <footer className="footer">
                <p>Creado por MUF</p>
            </footer>
        </div>

    )
}


