'use client'
import Image from "next/image";
import { Button, Container } from "reactstrap";

export default function Page() {

  return (
    <Container>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>

    <main className="d-flex flex-column align-items-center">
      <section className="sectionFirst py-4 m-5 align-items-center col-8 w-full ">
        <div className="">
          <h1 className="" >Olá, eu sou o Pedro</h1>
          <h4>Frontend Developer</h4>
          <p>Tenho paixão por tecnologia, sempre buscando aprimorar minhas habilidades e criar soluções eficientes e escaláveis. </p>
          <div className="text-center p-2" >
            <Button className="btn">Projetos</Button>
          </div>
        </div>
        <div className="container text-center">
          <Image
            src="/logo.png"
            width={ 300 }
            height={ 300 }
            alt="logo"
          />
        </div>
      </section>
      <section className="sectionSecond ">
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
      <section className="sectionFour">
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
    </main>
    </Container>
  )
}