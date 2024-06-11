import Link from "next/link";

export default async function Header() {
    return ( 
        <header>
                <nav className="my-0 py-2" >
                <h3 className="title">Portifolio</h3>
                <div className="link d-flex">
                <Link href="/" >Inicio</Link>
                <Link href="#projetos" >Projetos</Link>
                <Link href="#contact">Contato</Link>
                <Link href="#sobre">Sobre</Link>
                </div>
                </nav>
        </header>
    )
}