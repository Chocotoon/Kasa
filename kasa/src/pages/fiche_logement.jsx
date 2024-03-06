import '../styles/fiche_logement.css'
import { useNavigate, useParams } from 'react-router'
import Slideshow from '../components/Slideshow'
import Tag from '../components/Tags'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'
import { useState, useEffect} from 'react'


function Fiche() {
    const logementId = useParams()
    const navigate = useNavigate()

    const [logements, setLogements] = useState()
    useEffect(() => {
        fetch('/data/logements.json').then(response => 
            response.json().then((data) => {
                setLogements(data)})
                .catch((error) => console.log(error)))
    }, [])

    if (!logements || logements.length === 0) {
        return <div>No data available</div>;
    }
    const currentLogement = logements.find(logement => logement.id === logementId.id);
    if (!currentLogement) {
        navigate('/error');
        return null;
    }

    return (
        <div className='main_content_logement'>
            <Slideshow currentLogement={currentLogement} />
            <div className='logement_info'>
                <div className='titles'>
                    <h2>{currentLogement.title}</h2>
                    <h3>{currentLogement.location}</h3>
                    <div className='tags'>
                        {currentLogement.tags.map(tag => (
                            <Tag key={`${currentLogement.id}-${tag}`} tag={tag} />
                        ))}
                    </div>
                </div>
                <div className='host_info'>
                    <div className='info_perso'>
                        <h4>{currentLogement.host.name}</h4>
                        <img src={currentLogement.host.picture} alt={currentLogement.host.name} />
                    </div>
                    <Rating rating={currentLogement.rating} />
                </div>
            </div>

            <div className='collapses'>
                <Collapse title="Description">
                    {currentLogement.description}
                </Collapse>
                <Collapse title="Equipements">
                    {currentLogement.equipments.map(equipment =>
                        (<span key={`${currentLogement.id}-${equipment}`}>{equipment}</span>))}
                </Collapse>
            </div>


        </div>
    )
}

export default Fiche