import ButtonNew from './ButtonNew'
import './Card.css'

function Card(props) {
    return (
        <>
            <section className='card'>
                <div className='image-card'>
                    <img src={props.imgCard} alt="imgCard" />
                </div>
                <div className="disc-card">
                    <p>{props.title}</p>
                    <p>{props.price}</p>
                </div>
                <ButtonNew />
            </section>
        </>
    )
}
export default Card 