import {connect, useDispatch} from "react-redux";
import {changeTabActive} from "../redux/action";

const NavBar = ({activeTab}) => {
    const menu = ['home', 'skills', 'projetos', 'contato',];

    const dispatch = useDispatch();

    const changeNameTab = (data) => {
        dispatch(changeTabActive(data))
    }
    return (
        <header>

            <nav>
                {
                    menu.map((item, index) => (
                        <a className={activeTab === item ? 'active' : ''} key={index}
                           onClick={() => changeNameTab(item)}>{item}</a>
                    ))
                }
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
})

export default connect(mapStateToProps, {changeTabActive})(NavBar);