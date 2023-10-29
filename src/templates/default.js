
import Header from '../components/Header'

const Default = ({ children, withHeader }) => {
    const getHeader = () => {
        if (withHeader) {
            return (<Header />)
        }
        return <></>
    }

    return (
        <div className="w-[300px] h-auto px-4 py-6 mx-auto my-4 rounded-lg bg-graylight">
            {getHeader()}
            {children}
        </div>
    )
}

export default Default;