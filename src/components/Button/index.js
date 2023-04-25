import './styles.css'


const Button = ({ text }) => {
  return (
    <div className="button-container">
      <button className="button-customized">
        <h6>{text}</h6>
      </button>     
    </div>
  )
}

export default Button
