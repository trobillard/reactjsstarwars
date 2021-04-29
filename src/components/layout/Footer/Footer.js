import saber from './lightsaber.png'

function Footer() {
    return(
        <footer className="foot text-center">
           <section className="container">
            <div className="saberimage">
               <img className="saber" src={saber} alt="lightsaber"/>
            </div>
               <h1 className="neon text-center">ReactJS <br></br>and<br></br>Swapi</h1>
           </section>
        </footer>
    );
}

export default Footer