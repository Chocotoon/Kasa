import { Link } from "react-router-dom"
import '../styles/Cards.css'

function Card({logement}) {
    return (

        <Link to={`/fiche_logement/${logement.id}`} className="product_card">
            <img src={logement.cover} alt={logement.title} />
            <h3>{logement.title}</h3>

        </Link>

    )
}

export default Card