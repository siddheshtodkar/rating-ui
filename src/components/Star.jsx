const Star = ({ star, hover, rating, ratingClicked, hoverIn, hoverOut }) => {
    return (
        <span className={`star ${(hover || rating) >= star && 'active'}`}
            onClick={() => ratingClicked(star)}
            onMouseEnter={() => hoverIn(star)}
            onMouseLeave={() => hoverOut(0)}>
            {'\u2605'}
        </span>
    );
}

export default Star;