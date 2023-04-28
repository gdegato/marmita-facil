
import Header from '../components/Header'
import './default.css'

const Default = ({ children, withHeader }) => {
    const getHeader = () => {
        if (withHeader) {
            return (<Header />)
        }
        return <></>
    }

    return (
        <div className="container">
            {getHeader()}
            {children}
        </div>
    )
}

export default Default;