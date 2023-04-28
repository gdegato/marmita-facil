import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { ReactComponent as ArrowBack } from '../../assets/images/arrow_back.svg'
import { ReactComponent as Spoon } from '../../assets/images/spoon.svg'

import './styles.css'

const Header = () => {
    const history = useHistory()

    const backPage = (e) => {
        e.preventDefault();
        history.goBack();
    }

    return (
        <nav className="navbar-container">
            <div className="navbar-column">
                <a className='navbar-icon' title='Voltar!' onClick={backPage} href='/'>
                    <ArrowBack />
                </a>
            </div>
            <div className="navbar-column">
                <Spoon className='navbar-spoon' />
            </div>
            <div className='navbar-column'></div>
        </nav>
    )
}

export default Header
