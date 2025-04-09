import React from "react";
import "./main.css";


export default function Main(){
    const mostrar = ()=>{
        document.getElementById("main_me_txt").classList.toggle("main_me_txt_height");
    }
    return(
        <main className="main_conponent">
            <section className="main_me">
                <div className="main_me_photo" id="me">

                </div>
                <div className="main_me_txt main_me_txt_height" id="main_me_txt">
                    <h1>Sobre mim</h1>
                    <h3>Saiba mais sobre mim e as minhas ideializações</h3>
                    <br />
                    <p>Ola, novamente! Chamo-me <i>Sadraque Quinguri</i> <span className="red_color">Programador Front-End</span> a 1 anos e aproximadamente 6 mêses. </p>
                    <p>Além de trabalhar com o front, também atuo como  <span className="yellow_color">Programador Back-End</span>
                     , isso é , sempre que há tal necessidade.  <br />
                        Também Sou <span className="green_color">falante da língua inglesa</span>, já à 1 ano de estudo e até ao momento estou no nível intermediário , preste a atingir a fluência.
                     </p>

                    <br />
                    <h4>Qualidades como pessoa e trabalhador : <button className="buttom bt_hover" onClick={mostrar}>mostrar</button></h4>
                    <ol>
                        <li>
                            <img src="/rel.jpg" alt="" />
                            <h3>Pontualidade</h3>
                            <p>
                                Chegar 10min antes; chegou na perfeição. <br />
                                Chegar 0min; chegou à horas. <br />
                                Chegar 10min após; não chegou.
                            </p>
                        </li>
                        <li>
                            <img src="/dadecation.jpg" alt="" />
                            <h3>Dedicação</h3>
                            <p>Com senso de responsabilidade e muita dedicação, é assim que devo ser para com o meu chefe e as tarefas que na qual sou encarrege <br /></p>
                        </li>
                        <li>
                            <img src="/respect.jpg" alt="" />
                            <h3>Respeito <br /> Colaboração</h3>
                            <p>
                                Respeitar e ser respeitado .<br /> Colaborar e sempre proporcionar um anbiente agradavel para mim e para meus colegas!
                            </p>
                        </li>
                        <li>
                            <img src="/study.jpg" alt="" />
                            <h3>Aprendizado</h3>
                            <p>Nunca paro de estudar, por nada. <br />
                                Sempre crescendo , pois considero o conhecimento como 
                                o mais importante, sempre!
                            </p>
                        </li>
                    </ol>
                </div>
            </section>
            <section className="experenci_sec">
                <div className="experenci" id="expe">
                    <h1>
                        EXPERIÊNCIA
                    </h1>
                    <ol>
                        <li className="html">
                            <img src="/html.png" alt="" />
                            <h3>HTML</h3>    
                            <a href="" className="buttom">Ver sobre</a>
                        </li>
                        <li className="css3">
                            <img src="/css3.png" alt="" />
                            <h3>CSS3</h3>    
                            <a href="" className="buttom">Ver sobre</a>
                        </li>
                        <li className="jsx">
                            <img src="/js.png" alt="" />
                            <h3>JS</h3>    
                            <a href="" className="buttom">Ver sobre</a>
                        </li>
                        <li className="react">
                            <img src="/react.js.png" alt="" />
                            <h3>REACT</h3>    
                            <a href="" className="buttom">Ver sobre</a>
                        </li>
                        <li className="nod">
                            <img src="/node.png" alt="" />
                            <h3>NODE.JS</h3>    
                            <a href="" className="buttom">Ver sobre</a>
                        </li>
                        <li className="mong1">
                            <img src="/mong1.jpg" alt="" />
                            <h5>MONGODB</h5>    
                            <a href="" className="buttom">Ver sobre</a>
                        </li>
                        <li className="php8">
                            <img src="/php.png" alt="" />
                            <h3>PHP</h3>    
                            <a href="" className="buttom">Ver sobre</a>
                        </li>
                        <li className="mysql">
                            <img src="/sql.png" alt="" />
                            <h3>SQL</h3> 
                            <a href="" className="buttom">Ver sobre</a>
                        </li>
                        <li className="boot">
                            <img src="/boot1.jpg" alt="" />
                            <h5>BOOTSTRAP</h5>    
                            <a href="" className="buttom">Ver sobre</a>
                        </li>
                    
                        <li className="git">
                            <img src="/github.png" alt="" />
                            <h5>GIT/GITHUB</h5>    
                            <a href="" className="buttom">Ver sobre</a>
                        </li>

                    </ol>
                </div>
            </section>
            <section className="projects" id="projects">
                    <h2>Progetos</h2>
                    <h4>Progetos Desenvolvidos nas respectivas tecnologias</h4>
                    <span className="projects_list">
                        <ol>
                            <li>
                                <div className="img_div">
                                    <img src="/p1.jpg" alt="" />
                                </div>
                                <div>
                                    <h5>Projeto 1</h5>
                                    <h3>Wallondo Manager</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel aspernatur quasi voluptate, ex quaerat minus fuga laudantium quia accusamus beatae ea temporibus numquam officia autem aut quibusdam dicta et.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur provident quod error quisquam hic asperiores illo. Distinctio nostrum molestias eligendi fugit illo architecto, ab modi expedita odio magnam iure error.
                                    </p>
                                    <span>
                                        <img src="right.png" alt="" /> <a href="https://wallondo.vercel.app/" target="_blank">Ver mais</a>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h5>Projeto 2</h5>
                                    <h3>Casa Mobiliar</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel aspernatur quasi voluptate, ex quaerat minus fuga laudantium quia accusamus beatae ea temporibus numquam officia autem aut quibusdam dicta et.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur provident quod error quisquam hic asperiores illo. Distinctio nostrum molestias eligendi fugit illo architecto, ab modi expedita odio magnam iure error.
                                    </p>
                                    <span>
                                        <img src="right.png" alt="" /> <a href="https://market-sooty-tau.vercel.app/" target="_blank">Ver mais</a>
                                    </span>
                                </div>
                                <div className="img_div_left">
                                    <img src="/p1.jpg" alt="" />
                                </div>
                            </li>
                            <li>
                                <div className="img_div">
                                    <img src="/p1.jpg" alt="" />
                                </div>
                                <div>
                                    <h5>Projeto 3</h5>
                                    <h3>SMORT_Phone_SHOPING</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel aspernatur quasi voluptate, ex quaerat minus fuga laudantium quia accusamus beatae ea temporibus numquam officia autem aut quibusdam dicta et.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur provident quod error quisquam hic asperiores illo. Distinctio nostrum molestias eligendi fugit illo architecto, ab modi expedita odio magnam iure error.
                                    </p>
                                    <span>
                                        <img src="right.png" alt="" /> <a href="https://shping-phone.vercel.app/samsung" target="_blank">Ver mais</a>
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h5>Projeto 3</h5>
                                    <h3>Lea Já</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel aspernatur quasi voluptate, ex quaerat minus fuga laudantium quia accusamus beatae ea temporibus numquam officia autem aut quibusdam dicta et.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur provident quod error quisquam hic asperiores illo. Distinctio nostrum molestias eligendi fugit illo architecto, ab modi expedita odio magnam iure error.
                                    </p>
                                    <span>
                                        <img src="right.png" alt="" /> <a href="https://books-chi-smoky.vercel.app/" target="_blank">Ver mais</a>
                                    </span>
                                </div>
                                <div className="img_div_left">
                                    <img src="/p1.jpg" alt="" />
                                </div>
                            </li>
                        </ol>
                    </span>
                    <span className="others_projects">
                        <a href="#">Outros Projetos</a>
                    </span>
            </section>
        </main>
    )
}