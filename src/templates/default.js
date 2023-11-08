import Header from '../components/Header'
import { ReactComponent as WhiteLogo } from '../../src/assets/images/logo-branco.svg'
import { Link } from 'react-router-dom'

const Default = ({ children, withHeader, isHome = false }) => {
  const getHeader = () => {
    if (withHeader) {
      return <Header />
    }
    return <></>
  }

  return (
    <div>
      {!isHome && (
        <Link to="">
          <WhiteLogo className="mx-auto my-4 hidden md:block" />
        </Link>
      )}
      <div className="w-[300px] h-auto px-4 py-6 mx-auto my-4 rounded-lg bg-graylight xs:w-5/6">
        {getHeader()}
        {children}
      </div>
    </div>
  )
}

export default Default
