'use client'
import Image from "next/image";
import { Button, Container } from "reactstrap";

export default function Page() {

  return (
    <div className="">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
    <main className="d-flex flex-column align-items-center">
    <Container>

      <section className="sectionFirst col-11 align-items-center w-full text-dark">
        <div className="container p-5">
          <h1 className="title" >Olá, eu sou o <span className="name">Pedro</span></h1>
          <h4 className="subTitle">Frontend Developer</h4>
          <p className="description">Sou apaixonado por tecnologia e inovação, com um forte interesse em desenvolvimento front-end. Atualmente, estou cursando Engenharia de Software, o que me permite combinar minha formação acadêmica com minha paixão por criar soluções web elegantes e eficientes.</p>
        </div>
        <div className="d-block" >
          <Image
            src="/aaaa.png"
            width={ 300 }
            height={ 300 }
            alt="logo"
          />
        </div>
      </section>
    </Container>
    <Container className="shadow bg-light">
      <section className="sectionSecond " id="sobre">
        <div className="aboutMe col-8 ">
          <h2 className="aboutMe">Sobre Mim</h2>
          <p>
            Sou um desenvolvedor frontend e um pouco de backend, cursando Engenharia de Software. Adoro aprender coisas novas e enfrentar desafios, tenho paixão e vocação por tecnologia.
          </p>
        </div>

      </section>
      <section className="sectionThird ">
        <h2>Minhas Habilidades</h2>
        <div className="skills container py-4 col-8">
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
      <section className="sectionFour" id="projetos">
        <h2>Projetos Recentes</h2>
        <div className="container projects py-4 col-8 d-flex flex-wrap justify-content-evenly">
          <div className="card mb-3 text-center" style={{width:'18rem'}}>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Calculadora</h5>
                <i className="bi bi-image"></i>
              <a href="#" className="btn btn-primary">Ir para o projeto</a>
            </div>
          </div>
          <div className="card mb-3 text-center" style={{width:'18rem'}}>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">TO-DO-LIST</h5>
              <i className="bi bi-image"></i>
              <a href="#" className="btn btn-primary">Ir para o projeto</a>
            </div>
          </div>
          <div className="card mb-3 text-center" style={{width:'18rem'}}>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Dashboard de estoque</h5>
              <i className="bi bi-image"></i>
              <a href="#" className="btn btn-primary">Ir para o projeto</a>
            </div>
          </div>
          <div className="card mb-3 text-center" style={{width:'18rem'}}>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Lading Page</h5>
              <i className="bi bi-image"></i>
              <a href="#" className="btn btn-primary">Ir para o projeto</a>
            </div>
          </div>
        </div>
      </section>
      <section className="sectionFive">
        <h2>Contate-me</h2>
        <div className="container projects py-4 col-8 d-flex flex-wrap justify-content-evenly">
          <div className="d-flex gap-2">
        <Button className="bi-github"> GitHub </Button>
        <Button className="bi-linkedin"> Linkedin </Button>
        <Button className="bi-instagram"> Instagram </Button>

          </div>
        </div>
      </section>
    </Container>
    </main>
    </div>
  )
}