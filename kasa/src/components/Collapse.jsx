import '../styles/Collapse.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Collapse({ title, children }) {

    const [isOpen, setIsOpen] = useState(false)


    return isOpen ? (

        <div className='collapse'>
            <div className='collapse_title'>
                <h2>{title}</h2>
                <button onClick={() => setIsOpen(false)}><FontAwesomeIcon icon={faChevronUp} /></button></div>
            <p className='collapse_content'>{children}</p>
        </div>

    ) : (
        <div className='collapse'>
        <div className='collapse_title'>
            <h2>{title}</h2>
            <button onClick={() => setIsOpen(true)}><FontAwesomeIcon icon={faChevronDown} /></button></div>
            </div>
    )

}

export default Collapse 