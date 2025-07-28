import { useState } from "react"

const Rating = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const feedback = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']
    const stars = Array.from({ length: 5 }, (_, i) => i + 1)
    return (
        <div className="rating-container">
            <h2>Rate your Experiance</h2>
            <div className="stars">
                {
                    stars.map(star => (
                        <span key={star} className={`star ${(hover || rating) >= star && 'active'}`}
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}>
                            {'\u2605'}
                        </span>
                    ))
                }
            </div>
            <div className="feedback">
                {feedback[rating - 1]}
            </div>
        </div>
    )
}

export default Rating