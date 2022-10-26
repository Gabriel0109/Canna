import { Container, Content } from "./syles";
import teste from '../../assets/imgs/IMG_1201.png'
import black from '../../assets/imgs/black.png'
import yellow from '../../assets/imgs/yellow.png'



export function Scrollable() {
    return (
        <Container>
            <Content>
                <div className="box1">
                    <img src={teste} alt="" />
                </div>
            <div className="middle">
                    <div className="box2">
                        <img src={yellow} alt="" />
                    </div>
                    <div className="box3">
                        <img src={black} alt="" />
                    </div>
            </div>
            <div className="box4">
                <h1>Sobre a marca</h1>
                <p className="regular">Canna é uma marca de roupas autoral, sensibilizada pelo meio ambiente, com o intuito de trazer melhores soluções para o mundo. Tem o canhamo como matéria-prima principal. A marca apresenta ao mercado brasileiro uma nova forma de consumo consciente, com peças em tecidos duráveis, oferecendo modernindade e tendência de forma inclusiva.</p>
            </div>
            </Content>
        </Container>



    )
}