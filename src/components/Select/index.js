import ReactSelect from 'react-select'

const Select = (props) => {
  let color = ''

  switch (props.borderColor) {
    case 'red':
      color = 'border-red'
      break

    case 'green':
      color = 'border-green'
      break

    case 'orange':
      color = 'border-orange'
      break

    case 'gray':
      color = 'border-gray-400'
      break

    default:
      color = 'border-gray'
  }

  return (
    <ReactSelect
      {...props}
      classNamePrefix="react-select"
      classNames={{
        control: () => `h-[60px] border-2 ${color} rounded-lg text-left`,
        indicatorSeparator: () => 'hidden',
      }}
    />
  )
}

export default Select
