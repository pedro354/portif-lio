import { Card, CardBody, CardGroup, CardImg, CardSubtitle, CardTitle } from "reactstrap";

export default function Cards(){
    return (
        <CardGroup>
            <Card inverse>
            <CardImg className="cardImg" />
                    <CardTitle>Tic-Tac-Toe</CardTitle>
                    <CardSubtitle>Tecnologias usadas:<span>html | css  </span></CardSubtitle>
            </Card>
            <Card inverse>
            <CardImg className="cardImg" />
                    <CardTitle>Tic-Tac-Toe</CardTitle>
                    <CardSubtitle>Tecnologias usadas:<span>html | css  </span></CardSubtitle>
            </Card>
            <Card inverse>
            <CardImg className="cardImg" />
                    <CardTitle>Tic-Tac-Toe</CardTitle>
                    <CardSubtitle>Tecnologias usadas:<span>html | css  </span></CardSubtitle>
            </Card>
        </CardGroup>
    )
}