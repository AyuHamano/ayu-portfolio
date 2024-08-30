import {useRef} from "react";
import CustomHook from "./CustomHook";

export const Projects = () => {
    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);

    const projects = [
        {
            name: 'LoopStore - Ecommerce em React',
            img: './projects/ecommerce.png',
            link: 'https://ayuhamano.github.io/generic-react-ecommerce/',
            description: 'Projeto em React que consome uma API pública de produtos do DummyJSON e exibe a lista paginada e view de cada produto. '
        }, {
            name: 'Landing Page de celular',
            img: './projects/landing-page.png',
            link: 'https://ayuhamano.github.io/Landing-Page-Samsung/',
            description: 'Página feita em HTML, CSS e Javascript puro que apresenta novo modelo de celular e permite o usuário visualizar diferentes cores do produto'
        }, {
            name: 'CineView - API',
            img: './projects/cineview.jpg',
            link: 'https://github.com/AyuHamano/CineView',
            description: 'API Rest em Java SpringBoot que importa uma grande base de dados de filmes e permite aos usuários cadastrar reviews de filmes e salvá-los em lista. O sistema também recomenda filmes baseado no histórico do usuário e lista os mais populares'
        }, {
            name: 'Pink Bird Game',
            img: './projects/img.png',
            link: 'https://ayuhamano.github.io/Pink-Bird-Game/',
            description: 'Reprodução do famoso jogo do Flappy Bird, em que o usuário não pode deixar o Bird cair ou tocar nos obstáculos. No jogo, o usuário ganha medalhas diferentes conforme sua pontuação'
        },
    ]


    return (

        <section className="projetos" ref={scrollTab}>
            <h3 className={'title'}>Meus projetos</h3>
            <div className="list">
                {projects.map((project, index) => (
                    <div key={index} className="item">
                        <div className="images">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.img} width={600}/>
                            </a>
                        </div>

                        <div className="content">
                            <h3>{project.name}</h3>
                            <div className="description">
                                {project.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}