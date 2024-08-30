import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {useRef} from "react";
import CustomHook from "./CustomHook";

export const Contact = () => {
    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);

    return (

        <section className="contato" ref={scrollTab}>
            <div className="title">Meus contatos</div>
            <div className="list">
                <div className="item">aline.s.hamano@gmail.com</div>
            </div>
            <div className="network">
                <a target={'_blank'} href='https://www.linkedin.com/in/aline-hamano' rel="noreferrer">
                    <FontAwesomeIcon fontSize={70} icon={faLinkedin}/>
                </a>
                <a target={'_blank'} href={'https://github.com/AyuHamano'} rel="noreferrer">
                    <FontAwesomeIcon fontSize={70} icon={faGithub}/>
                </a>
                <a target={'_blank'} href={'https://www.instagram.com/ayuhamano/'} rel="noreferrer">
                    <FontAwesomeIcon fontSize={70} icon={faInstagram}/>
                </a>
            </div>
        </section>
    )
}