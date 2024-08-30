import {faAngular, faCss3, faHtml5, faJava, faJs, faReact} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRef} from "react";
import CustomHook from "./CustomHook";

const Skills = () => {
    const refTab = useRef()
    CustomHook(refTab)

    const skills = [
        {
            name: 'Javascript',
            desc: 'Lógica de programção front end intermediária',
            img: faJs
        }, {
            name: 'HTML',
            desc: 'Estrutura de páginas',
            img: faHtml5
        }, {
            name: 'CSS',
            desc: 'Estilização intermediária',
            img: faCss3
        }, {
            name: 'Java',
            desc: 'Criação de páginas responsivas e interativas. Conhecimento em React Hooks e Redux',
            img: faJava
        }, {
            name: 'React',
            desc: 'Criação de páginas responsivas e interativas. Conhecimento em React Hooks e Redux',
            img: faReact
        }, {
            name: 'Angular',
            desc: 'Criação de páginas responsivas e interativas. Conhecimento em React Hooks e Redux',
            img: faAngular
        },

    ]

    return (

        <section className="skills" id={'skills'} ref={refTab}>
            <div className="title">Conhecimentos Web</div>
            <div className="description"></div>

            <div className="list">
                {skills.map((skill, index) => (
                    <div key={index} className="item">
                        <FontAwesomeIcon icon={skill.img}/>
                        <h3>{skill.name} </h3>
                        <span>{skill.desc}</span>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default Skills