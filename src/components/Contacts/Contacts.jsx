import {Contact} from 'components/Contact/Contact';


export const Contacts = ({contacts, filterName, onContactDelete}) => {  


   const  onFilterChange = () => { 
        
        return (contacts.filter((contact) => contact.name.toLowerCase().includes(filterName.toLowerCase())));
    }


  
    return (
        <div>
            
            <ul>
                {onFilterChange().map((contact) => {
                    return (
                        <Contact
                            key={contact.id}
                            name={contact.name}
                            number={contact.number}
                            onContactDelete={onContactDelete}
                        />
                    )
                 })
                        
                }
            </ul>
        </div>
    )

}
