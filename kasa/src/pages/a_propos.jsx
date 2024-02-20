import Banner from '../components/Banner'
import aproposBannerImg from '../assets/apropos_banner_img.png'
import Collapse from '../components/Collapse'
import '../styles/a_propos.css'

function Apropos() {
    return (
        <div>
            <Banner background={`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${aproposBannerImg})`}
                content="" />
            <div className='main_content'>
                <Collapse title="Fiabilité">
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </Collapse>
                <Collapse title="Respect">
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Collapse>
                <Collapse title="Service">
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Yout comportament discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </Collapse>
                <Collapse title="Sécurité">
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </Collapse>
            </div>
        </div>
    )
}

export default Apropos