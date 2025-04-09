import React from "react";
import "./header.css";


export default function Header(){

    setTimeout(() => {
        var spans = document.querySelectorAll(".photo_me span");
        spans.forEach((element,pos) => {
            element.classList.remove("zero")
        });
    }, 2000);

    return(
        <header className="header">
            <span>
               <div>
                        <span>
                            <img src="/qui.png" alt="" />
                            Quinguri
                        </span>
               </div>
               <nav>
                    <ol>
                        <li><a href="#me">Quem sou</a></li>
                        <li><a href="#me">Qualidades</a></li>
                        <li><a href="#expe">experiencias</a></li>
                        <li><a href="#projects">Progetos</a></li>
                        <li><a href="#contacts">contactos</a></li>
                    </ol>
               </nav>
            </span>
            <section id="eu" className="sec_eu">
                <article>
                    <h2 className="red_color">Ola, Eu Sou O</h2>
                    <h1>Sadraque Quinguri</h1>
                    <h3>O <span className="green_color">Programador Front-End</span> de Luanda/Angola</h3>
                    <p>Enbora esta como <span className="green_color">Programador Front-End</span> Também Atuo como
                    <span className="yellow_color">Programador Back-End</span> se necessário...!
                    </p>
                    <p>
                        Dedicado e bastante envolvido pelo trabalho <br /> por isso candidato-me a tal vaga! <br />
                        Analize mais sobre mim e depois diz me o que decidiste!
                    </p>
                    <div className="bt_box">
                        <a href="#contacts" className="buttom out_mov" >Contactar</a>
                        <ol>
                            <li><img src="/whats.jpg" alt="" /></li>
                            <li><img src="/fb.jpg" alt="" /></li>
                            <li><img src="/git.jpg" alt="" /></li>
                        </ol>
                    </div>
                </article>
                <article className="center">
                    <div className="photo_me">
                        <div className="photo_me_div rota">
                        <span className="js1 zero"><img src="/js.png" alt="" /></span>
                            <span className="html zero"><img src="/react.js.png" alt="" /></span>
                            <span className="css zero"><img src="/github.png" alt="" /></span>
                            <span className="js zero"><img src="/mongo.png" alt="" /></span>
                            <span className="php zero"><img src="/sql.png" alt="" /></span>
                            <span className="sql zero"><img src="/php.png" alt="" /></span>
                        </div>
                    </div>
                </article>
            </section>
        </header>
    )
}