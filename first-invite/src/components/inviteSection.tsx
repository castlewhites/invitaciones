import '../pages/landing.css';
import ring from "../assets/anillos.png"
import foto5 from "../assets/foto5.jpeg"






export default function InviteSection() {

    return (
        <div className="wedding-invitation-container">
            <div className="wedding-invitation-parents">
                <h2 className="wedding-invitation-h2">Padres:</h2>
                <div className='container-flex'>
                    <div className="wedding-invitation-side">
                        <h3 className="wedding-invitation-h3">Novia</h3>
                        <p className="wedding-invitation-p">Omar Enrique Lubo Crepo</p>
                        <p className="wedding-invitation-p">Julia Patricia Vacca Iglesias</p>
                    </div>
                    <div className="wedding-invitation-side">
                        <h3 className="wedding-invitation-h3">Novio</h3>
                        <p className="wedding-invitation-p">Rafael Antonio Valencia Barros</p>
                        <p className="wedding-invitation-p">Nora García Navarro</p>
                    </div>
                </div>
            </div>

            <div className="wedding-invitation-main">
                <h2 className="wedding-invitation-h2">Invitan a la unión de:</h2>
                <img className="wedding-invitation-wedding-rings" src={ring} alt="Anillo" />
                <div className="wedding-invitation-couple">
                    <h3 className="wedding-invitation-h3">Keivin Rafael Valencia Garcés</h3>
                    <h3 className="wedding-invitation-h3">&</h3>
                    <h3 className="wedding-invitation-h3">July Patricia Lubo Vacca</h3>
                </div>

            </div>
            <div className='moment-card-5_container'>
                <div className="moment-card moment-card_5 ">
                    <img src={foto5} alt="Momento especial 5" />
                </div>
            </div>
            
        </div>
    );
};


