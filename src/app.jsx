import react from "react";
import "./app.css";
import Header from "../components/header/header";
import Main from "../components/main/main";
import Footer from "../components/footer/footer";
import Board from "../components/board/board";

export default function App(){
    return(
        <div className="app" id="app">
            <Board/>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}
