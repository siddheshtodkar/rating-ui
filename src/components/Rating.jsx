import { useState } from "react"
import Star from "./Star"
import Modal from "./Modal"
const Rating = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [submitted, setSubmitted] = useState(false)
    const feedback = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']
    const stars = Array.from({ length: 5 }, (_, i) => i + 1)
    const closeModal = () => {
        setSubmitted(false)
        setRating(0)
    }
    return (
        <div className="rating-container">
            <h2>Rate your Experiance</h2>
            <div className="stars">
                {
                    stars.map(star => (
                        <Star
                            key={star}
                            star={star}
                            hover={hover}
                            rating={rating}
                            ratingClicked={setRating}
                            hoverIn={setHover}
                            hoverOut={setHover}
                        />
                        // <span key={star} className={`star ${(hover || rating) >= star && 'active'}`}
                        //     onClick={() => setRating(star)}
                        //     onMouseEnter={() => setHover(star)}
                        //     onMouseLeave={() => setHover(0)}>
                        //     {'\u2605'}
                        // </span>
                    ))
                }
            </div>
            <div className="feedback">
                {feedback[rating - 1]}
            </div>
            <button className="submit-btn" disabled={rating == 0} onClick={() => setSubmitted(true)}>Submit</button>
            {
                submitted &&
                <Modal
                    closeModal={closeModal}
                    rating={rating}
                />
                // <div className="modal-overlay">
                //     <div className="modal">
                //         <h2>Feedback Submitted</h2>
                //         <button className="close-btn" onClick={closeModal}>Close</button>
                //     </div>
                // </div>
            }
        </div>
    )
}

export default Rating