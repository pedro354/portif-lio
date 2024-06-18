import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardBody, CardFooter, CardGroup, CardHeader, CardImg, CardImgOverlay, CardSubtitle, CardText, CardTitle, Container } from "reactstrap";
function handleclick(){
    window.location.href = 'https://dashboard-estoque.vercel.app';
}
function handleclick2(){
    window.location.href = 'falcon9-murex.vercel.app';

}
export default function Cards() {
    return (
        <Container className="cards">
        <Card className="bg-dark text-white w-100">
        <CardImg src="/Screenshot 2024-06-18 at 00-28-39 Projeto.png" width={100} height={200} alt="Card image" />
            <CardImgOverlay>
                <CardTitle className="">Dashboard Estoque</CardTitle>
                <CardText>Tecnologias usadas: Next.js, css, react</CardText>
            <Button className="btn btn-primary" onClick={handleclick} color="primary">Ver Projeto
            </Button>
            </CardImgOverlay>
            <CardFooter>Last updated 3 mins ago</CardFooter>
        </Card>
        <Card onClick={handleclick} className="bg-dark text-white w-100">
        <CardImg src="/Screenshot 2024-06-17 at 23-58-46 Vite React.png" width={100} height={200} alt="Card image" />
        <CardImgOverlay>
                <CardTitle>Projeto ladingPage</CardTitle>
                <CardText>Tecnologias usadas: html, scss, bootstrap</CardText>
                <Button className="btn btn-primary" onClick={handleclick2} color="primary">Ver Projeto
            </Button>

            </CardImgOverlay>
            <CardFooter>Last updated 3 mins ago</CardFooter>
        </Card>
        </Container>
        )
}
