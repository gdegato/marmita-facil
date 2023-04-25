import './styles.css'
import Select from 'react-select';

function Filter({ name, id, value, placeholder }) {
    //const [value, setValue] = React.useState<any>({})
  
    return (
      <div className="container-filter">
        <form action="" className='filter-form'>
          <Select
            key={id}
            name={name}
            options={value}
            placeholder={placeholder}
            //onChange={setValue}
            classNamePrefix="filter-select"
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.name}
          />
        </form>
      </div>
    )
  }
  
  export default Filter