import { Badge, Button, Card, CardBody, CardFooter, CardImg, CardImgOverlay, CardSubtitle, CardText, CardTitle, Container } from "reactstrap";
import moment from 'moment';

function getLastUpdate() {
    return moment().format('DD/MM/YYYY HH:mm');
}
export default function Cards() {
    return (
        <div className="cards">
            <Card tag="a" href="https://falcon9-murex.vercel.app/" target="_blank"  className="bg-dark text-white w-100 card-transition" >
                <CardImg src="/Screenshot 2024-06-18 at 00-28-39 Projeto.png" width={ 100 } height={ 200 } alt="Card image" />
                <CardImgOverlay>
                    <CardTitle className="">Projeto ladingPage</CardTitle>
                    <CardText>Tecnologias usadas:
                        <br />
                        <Badge color="secondary">HTML</Badge>
                        <Badge color="secondary">SCSS</Badge>
                        <Badge color="secondary">BOOSTRAP</Badge>
                    </CardText>
                    <div className="card-info">
                        <CardFooter>Última atualização em: { getLastUpdate() }</CardFooter>
                    </div>
                </CardImgOverlay>
            </Card>
            <Card tag="a" href="dashboard-estoque.vercel.app/" target="_blank"  className="bg-dark text-white w-100 card-transition" >
                <CardImg src="/Screenshot 2024-06-17 at 23-58-46 Vite React.png" width={ 100 } height={ 200 } alt="Card image" />
                <CardImgOverlay>
                    <CardTitle>Dashboard de Estoque</CardTitle>
                    <CardText>Tecnologias usadas:
                        <br />
                        <Badge color="secondary">React</Badge>
                        <Badge color="secondary">Typescript</Badge>
                        <Badge color="secondary">Bootstrap</Badge>
                    </CardText>
                    <div className="card-info">
                        <CardFooter>Última atualização em: { getLastUpdate() }</CardFooter>
                    </div>
                </CardImgOverlay>

            </Card>
            <Card tag="a" href="https://black-nextjs-cyan.vercel.app/" target="_blank"  className="bg-dark text-white w-100 card-transition" >
                <CardImg src="Screenshot 2024-06-18 at 22-38-14 Create Next App.png" width={ 100 } height={ 200 } alt="Card image" />
                <CardImgOverlay>
                    <CardTitle>E-Commerce de produtos</CardTitle>
                    <CardText>Tecnologias usadas:
                        <br />
                        <Badge color="secondary">NextJs</Badge>
                        <Badge color="secondary">Typescript</Badge>
                        <Badge color="secondary">Tailwind</Badge>
                    </CardText>
                    <div className="card-info">
                        <CardFooter>Última atualização em: { getLastUpdate() }</CardFooter>
                    </div>
                </CardImgOverlay>
            </Card>
            <Card tag="a" href="/" target="_blank"  className="bg-dark text-white w-100 card-transition" >
                <CardImg src="/Screenshot 2024-06-18 at 21-59-00 Front-End Insights.png" width={ 100 } height={ 200 } alt="Card image" />
                <CardImgOverlay>
                    <CardTitle>Newsletter</CardTitle>
                    <CardText>Tecnologias usadas:
                        <br />
                        <Badge color="secondary">NextJs</Badge>
                        <Badge color="secondary">Javascript</Badge>
                        <Badge color="secondary">Bootstrap</Badge>
                    </CardText>
                    <div className="card-info">
                        <CardFooter>Última atualização em: { getLastUpdate() }</CardFooter>
                    </div>
                </CardImgOverlay>

            </Card>
        </div>
    )
}
