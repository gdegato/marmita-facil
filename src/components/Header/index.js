import { Link } from 'react-router-dom'
import { ReactComponent as ArrowBack } from '../../assets/images/arrow_back.svg'
import { ReactComponent as Spoon } from '../../assets/images/spoon.svg'

import './styles.css'

const Header = () => {
    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-icons">
                    <div className="navbar-icons-arrow">
                        <Link to="/">
                            <ArrowBack />
                        </Link>
                        <div className="navbar-icons-others">
                        </div>
                    </div>
                </div>
                <div className="navbar-spoon">
                    <Spoon />
                </div>
            </nav>
        </>
    )
}

export default Header
