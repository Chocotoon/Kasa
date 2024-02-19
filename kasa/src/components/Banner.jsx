import '../styles/Banner.css'

function Banner({background, content}) {

    return (
        <div className="banner" style={{background}}>
            <h2>{content}</h2>
        </div>
    )
}

export default Banner