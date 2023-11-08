const Button = ({
  text,
  isSecondary,
  isSmall,
  onClick = () => {},
  ...props
}) => {
  const btnPrimary = `h-12 ${
    isSmall ? 'w-[90px] xs:w-[170px]' : 'w-[188px]'
  } text-sm uppercase font-bold text-white rounded-md disabled:opacity-80 disabled:bg-gray-500 disabled:cursor-not-allowed shadow-md hover:bg-greenDark bg-green`

  const btnSecondary = `h-12 ${
    isSmall ? 'w-[90px] xs:w-[170px]' : 'w-[188px]'
  } text-sm uppercase font-bold text-white rounded-md disabled:opacity-80 disabled:bg-gray-500 disabled:cursor-not-allowed shadow-md hover:bg-redDark bg-red`

  return (
    <button
      className={isSecondary ? btnSecondary : btnPrimary}
      onClick={(e) => onClick(e)}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button
