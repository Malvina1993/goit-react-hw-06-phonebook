import { useState } from 'react'
import css from './Filter.module.css'


export const Filter = ({filter, onChange}) => {

  
  const [filterValue, setFilter] = useState(filter);
  
    const handleChange = (e) => { 
    
        
      setFilter(e.target.value);

      onChange(e.target.value);
        
    }


    return (
      <div>
        <p className={css.filterTittle}>Find contacts by name</p>
        <input
          className={css.input}
                type="text"
                name="filter"
                value={filterValue}
                onChange={handleChange}
            />
      </div>
    )
  
}
