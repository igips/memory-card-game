import "../style/Modal.css";


function Modal({close, show, children, score}) { 
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    let wonOrLost = "You Lost!";

    if(score === 12) {
        wonOrLost = "You Won!";

    }

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <p>{wonOrLost}</p>
                <span>Score: {score}</span>
                <button type="button" onClick={close}>
                    New Game
                </button>
            </section>
        </div>
    );


};

export default Modal;