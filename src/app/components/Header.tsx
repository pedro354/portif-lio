import Link from "next/link";

export default async function Header() {
    return ( 
        <header className="" >
            <div>
                <nav className="d-flex justify-content-between align-items-center" >
                <h3 className="mb-0" >Portifolio</h3>
                <div className="d-flex gap-3">
                <Link className="links" href="/" >Inicio</Link>
                <Link className="links" href="#projetos" >Projetos</Link>
                <Link className="links" href="#contact">Contato</Link>
                <Link className="links" href="#sobre">Sobre</Link>
                </div>
                </nav>
            </div>
        </header>
    )
}