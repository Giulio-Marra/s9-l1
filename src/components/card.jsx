const Card = props => {
    return (
        <div className="card">
            <div className="containerImg">
                <img src={props.imageCard} alt="image" className="imageCard"/>
            </div>
            <h2 className="textCard">{props.titleCard}</h2>
            <p className="textCard">{props.textCard}</p>
        </div>
    );
}

export default Card;