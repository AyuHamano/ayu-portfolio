import './App.css';
import {Home} from "./components/Home";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {

    return (
        <main>
            <NavBar/>
            <scroll-container style={{scrollBehavior: 'smooth', overflowY: 'scroll'}}>

                <scroll-page><Home/></scroll-page>
                <scroll-page><Skills/></scroll-page>
                <scroll-page><Projects/></scroll-page>
                <scroll-page><Contact/></scroll-page>

            </scroll-container>
        </main>
    );
}

export default App;
