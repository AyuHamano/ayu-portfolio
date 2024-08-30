import {useRef} from "react";
import CustomHook from "./CustomHook";

export const Home = () => {
    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);

    return (
        <section className="home" ref={scrollTab}>
            <section className="content" style={{fontFamily: 'MuseoModerno'}}>
                <div className="name">
                    Olá, meu nome é <span>Aline Hamano</span>
                </div>

                <div className="description">
                    Sou estudante de engenharia de software da UFG e desenvolvedora React no LabTIME
                </div>

                <a href="./Currículo-AlineHamano.pdf" target='_blank' rel="noopener noreferrer">Meu Currículo</a>

            </section>
            <div className="avatar">
                <div className="card">
                    <img className={'avatar-img'} src='./aline-hamano2.jpg' alt='Avatar' width={300} height={400}/>

                    <div>Desenvolvedora Front end</div>
                    <div>20 anos</div>
                </div>

            </div>

        </section>
    )
}