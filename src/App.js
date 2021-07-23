import './App.css';
import Header from "./components/header";
import Footer from "./components/Footer";
import HeaderMobil from "./components/mainPage/mobil/HeaderMobil";
import {useEffect, useState} from "react";
import {context} from './components/utils/context'
import ChangePage from "./changePage";


function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return (
        <context.Provider value={
            {
                windowWidth
            }
        }>
            <div className="App">
                {windowWidth < 1024 ? <HeaderMobil/> : <Header/>}
                <ChangePage/>
                <Footer/>
            </div>
        </context.Provider>
    );
}

export default App;
