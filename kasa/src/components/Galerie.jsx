import '../styles/Galerie.css'
import Card from './Card'
import { useState, useEffect } from 'react';


function Galerie() {

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
    
    return (
        <div className='galerie'>
            {logements.map(logement => (
                <Card key={`${logement.id}-${logement.title}`} logement={logement} />
            ))}
        </div>
    )
}

export default Galerie