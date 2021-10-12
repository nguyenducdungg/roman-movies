import "./card.css"

export default function Card({ value }) {
    return (
        <div className="card-home">
            <img className="card__image" src={value.imagelink} alt="" />
        </div>
    )
}
