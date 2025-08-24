const Modal = ({ msg = 'Rating Submitted', closeModal, rating }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>{msg}</h2>
                <p>You rated us {rating} star{rating > 1 && 's'}</p>
                <button className="close-btn" onClick={closeModal}>Close</button>
            </div>
        </div>
    );
}

export default Modal;