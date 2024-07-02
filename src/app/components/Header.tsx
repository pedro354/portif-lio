'use client'
import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";
export default function Header() {
    return (
        <header>
            <nav className="my-0 py-2" >
            <DarkModeToggle/>
                <h3 className="title">Portifolio</h3>
                <div>
                </div>
                <Link href="/" >Inicio</Link>
                <Link href="#projetos" >Projetos</Link>
                <Link href="#contact">Contato</Link>
                <Link href="#sobre">Sobre</Link>
                <div>
                </div>
            </nav>
        </header>
    )
}