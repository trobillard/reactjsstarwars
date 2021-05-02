import title from './star-wars.png'

function Header() {
    return (
       <header className="top text-center">
           <section className="container">
               <img src={title} alt="logo"/>
               <p className="neon arrow"><ion-icon name="chevron-down-outline"></ion-icon></p>
           </section>
       </header>
    );
}

export default Header;