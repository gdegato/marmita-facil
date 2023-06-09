import './index.css'
const Button = ({ text, isSecondary, onClick = () => {}, ...props }) => {
  let className = 'btn ';
  isSecondary ? className += 'btn-secondary' : className += 'btn-primary'
  
  return (
    <button className={className} onClick={(e) => onClick(e)} {...props}>
      {text}
    </button>     
  )
}

export default Button
