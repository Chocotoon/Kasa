import { Link } from 'react-router-dom'
import '../styles/Error.css'

function Error() {
    return (
        <div className='error_wrapper'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retouner sur la page d'accueil</Link>
        </div>
    )
}

export default Error