import React from "react";
import "./footer.css";

export default function Footer(){
    return(
        <footer className="footer" id="contacts">
            <h1>Contactos</h1>
            <section>
                <article>
                    <h1>Enviame ums sms</h1>
                    <p>
                        Para falares comigo basta escrever lá o formulário e enviar pra mim. <br />
                        Podes escrever o que achou do meu porfifólio e o que desejas para comigo , qm seguida hei de responde imediatamente via whats ou chamada normal. <br />
                        Se fores um recrutador , por favor não perca tempo e chama que estou desponivel para ti!
                    </p>
                    <div>
                        <span><img src="/whats.png" alt="" />(+244) 941-137-038</span>
                        <span><img src="/email.png" alt="" /> quinguri0@gmail.com</span>
                        <span><img src="/gps.png" alt="" />Luanda/Angola</span>
                    </div>
                </article>
                <article>
                        <form action="" method="post">
                            <div>
                                <input type="number" placeholder="Seu Número : "/>
                            </div>
                            <div>
                                <input type="text" placeholder="Seu Nome : "/>
                            </div>
                            <div className="last_div">
                                <textarea name="" id="" ></textarea>
                            </div>
                            <button>Enviar</button>
                        </form>
                </article>
            </section>
            <address>
                    <p>
                        <span>
                            <img src="/qui.png" alt="" />
                            Quinguri
                        </span>
                    </p>
                    <p>2025/01/10 todos direitos resrvados by Quingury</p>
                    <p>
                        <img src="/fb.jpg" alt="" />
                        <img src="/git.jpg" alt="" />
                        <img src="/email.jpg" alt="" />
                        <img src="/what.jpg" alt="" />
                    </p>
            </address>
        </footer>
    )
}
