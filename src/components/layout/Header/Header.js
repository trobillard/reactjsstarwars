import title from './star-wars.png'

function Header() {
    return (
       <header className="top text-center">
           <section className="container">
               <img src={title} alt="logo"/>
               <div className="arrow">
               <p className="neon"><ion-icon name="chevron-down-outline"></ion-icon></p>
               </div>
           </section>
       </header>
    );
}

export default Header;