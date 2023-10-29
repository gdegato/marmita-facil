import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { ReactComponent as ArrowBack } from '../../assets/images/arrow_back.svg'
import { ReactComponent as Spoon } from '../../assets/images/spoon.svg'

const Header = () => {
    const history = useHistory()

    const backPage = (e) => {
        e.preventDefault();
        history.goBack();
    }

    return (
        <nav className="flex justify-center items-center mb-8">
            <div className="w-full">
                <a title='Voltar!' onClick={backPage} href='/'>
                    <ArrowBack />
                </a>
            </div>
            <div className="w-full">
                <Spoon className='mx-auto' />
            </div>
            <div className='w-full'></div>
        </nav>
    )
}

export default Header
