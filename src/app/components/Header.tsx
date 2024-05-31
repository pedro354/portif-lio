import Link from "next/link";
import { Container } from "reactstrap";

export default async function Header() {
    return ( 
        <header className="py-1 bg-white" >
            <Container>
                <nav className="d-flex justify-content-between align-items-center" >
                <h3 className="mb-0" >Bem vindo ao meu Portifólio!</h3>
                <div className="d-flex gap-3">
                <Link className="text-dark" href="/" >Inicio</Link>
                <Link className="text-dark" href="/contact">Contato</Link>
                <Link className="text-dark" href="/contact">Sobre</Link>
                </div>
                </nav>
            </Container>
        </header>
    )
}