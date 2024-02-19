import '../styles/Slideshow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function Slideshow({ currentLogement }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === currentLogement.pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? currentLogement.pictures.length - 1 : prevIndex - 1
        );
    };

    if (currentLogement.pictures.length < 2) {
        return (
            <div className='carousel'>
                <img src={currentLogement.pictures[currentIndex]} alt="Photo du logement" />
            </div>
        )
    }
    return (
        <div className='slideShow'>
            <div className='carousel'>
                <button id="prev_btn" onClick={prevImage}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <img src={currentLogement.pictures[currentIndex]} alt="Photo du logement" />
                <button id="next_btn" onClick={nextImage}><FontAwesomeIcon icon={faChevronRight} /></button>
                <div className="imageCounter">
                    {currentIndex + 1}/{currentLogement.pictures.length}
                </div>
            </div>
        </div>
    )
}

export default Slideshow