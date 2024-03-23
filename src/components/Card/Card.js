import './Card.css'

function Card({title, image, id, displaySelectedMovie}) {
    return (
        <figure className='card' onClick={() => displaySelectedMovie(title)}>
            <img className="poster" id={id} src={image} alt="" height="250px" width="200px"/>
        </figure>
    )
}

export default Card