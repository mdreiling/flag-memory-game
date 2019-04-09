import React from "react";

function FlagCard(props) {
    return (
        <div className="col s6 m3">
            <div className="card" key={props.id} id={props.id} onClick={() => props.handleClick(props)}>
                <div className="card-image">
                    <img className="responsive-img" alt={props.name} src={props.image} data-clicked={props.isClicked} />
                </div>
            </div>
        </div>
    );
}

export default FlagCard;