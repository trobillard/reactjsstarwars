import saber from './logo.svg'

function Footer() {
    return(
        <footer className="foot text-center">
           <section className="container">
            <div className="saberimage">
               <img className="saber" src={saber} alt="lightsaber"/>
            </div>
               <h1 className="neon text-center">Swapi</h1>
           </section>
        </footer>
    );
}

export default Footer