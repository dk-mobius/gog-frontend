import React from 'react';


const PlaceholderCard = props => {
    const cards = [];

    for(let i = 0; i < props.number; i++) {
        cards.push(<div key={i} className={'placeholder-card'} />)
    }

    return (
        <>
            {cards}
        </>
    )
};

export default PlaceholderCard;