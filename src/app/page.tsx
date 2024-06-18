'use client'
import Image from "next/image";
import { Button, Container } from "reactstrap";
import Cards from "./components/Cards";

export default function Page() {

  return (
    <div className="container-fluid ">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
    <main className="">
    <Container>
      <section className="sectionFirst col-11 my-5 d-flex">
        <div>
          <h1 className="title" >Olá, eu sou o <span>Pedro</span></h1>
          <h4 className="subTitle">Frontend Developer</h4>
          <p className="description">Sou apaixonado por tecnologia e inovação, com um forte interesse em desenvolvimento front-end. Atualmente, estou cursando Engenharia de Software, o que me permite combinar minha formação acadêmica com minha paixão por criar soluções web elegantes e eficientes.</p>
        </div>
        <div>
          <Image
            src="/aaaa.png"
            width={ 300 }
            height={ 300 }
            alt="logo"
          />
        </div>
      </section>
    </Container>
    <Container className="shadow bg-light subSections col-11 py-5 my-5">
      <section className="m-4">
          <h2 className="">Sobre Mim</h2>
          <p>
            Sou um desenvolvedor frontend e um pouco de backend, cursando Engenharia de Software. Adoro aprender coisas novas e enfrentar desafios, tenho paixão e vocação por tecnologia.
          </p>
      </section>
      <section className="m-4">
        <h2>Minhas Habilidades</h2>
        <div className="">
          <ul className="skills">
            <li><Image className="" src="/html.png" width={ 100 } height={ 80 } alt="Html" title="Html" /></li>
            <li><Image className="" src="/css.png" width={ 100 } height={ 80 } alt="Css" title="Css" /></li>
            <li><Image className="" src="/javascript.png" width={ 100 } height={ 80 } alt="Javascript" title="Javascript" /></li>
            <li><Image className="" src="/bootstrap.png" width={ 100 } height={ 80 } alt="Bootstrap" title="Bootstrap" /></li>
            <li><Image className="" src="/sass.png" width={ 100 } height={ 80 } alt="Sass" title="Sass" /></li>
            <li><Image className="" src="/typescript.png" width={ 100 } height={ 80 } alt="Typescript" title="Typescript" /></li>
            <li><Image className="" src="/react.png" width={ 100 } height={ 80 } alt="React" title="React" /></li>
            <li><Image className="" src="/nodejs.png" width={ 100 } height={ 80 } alt="Node.js" title="Node.js" /></li>
            <li><Image className="" src="/nextjs.png" width={ 100 } height={ 80 } alt="Next.js" title="Next.js" /></li>
          </ul>
        </div>
      </section>
      <section className="m-4 ">
        <h2>Projetos Recentes</h2>
      <Container className="projects ">
      <Cards />
      </Container>
      </section>
      <section className="m-4">
        <h2>Contate-me</h2>
        <div className="btn">
        <Button className="bi-github"> GitHub </Button>
        <Button className="bi-linkedin"> Linkedin </Button>
        <Button className="bi-instagram"> Instagram </Button>
        </div>
      </section>
    </Container>
    </main>
    
    </div>
  )
}