import '../styles/Galerie.css'
import Card from './Card'
import useFetchLogements from '../hooks/useFetchLogements'


function Galerie() {

    const { data, status } = useFetchLogements();

    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
    return (
        <div className='galerie'>
            {data.map(logement => (
                <Card key={`${logement.id}-${logement.title}`} logement={logement}/>
            ))}
        </div>
    )
}

export default Galerie