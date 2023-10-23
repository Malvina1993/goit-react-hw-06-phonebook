
import css from './Contact.module.css'
export const Contact = ({name, number, onContactDelete}) => {


    return (
        <div className={css.contact}>
            <li className={css.liContact}>{name}: {number}</li>
            <button className ={css.delContact} onClick={() => onContactDelete(name)}>Delete</button>
        </div>
    )
  
}
