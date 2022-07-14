function Modal(props) {

    function btnDoneHandler() {
        props.onDone();
    }

    function btnUndoneHandler() {
        props.onUndone();
    }

const title = sessionStorage.getItem("title");
let titleInfo;
switch(title){
    case 'Mobocollege Course': titleInfo = "Viewing the lessons uploaded on the user panel every week and doing challenges";
    break;
    case 'English Learning': titleInfo = "Study Oxford-Word-Skills & Cambridge Grammar-in-use books for an hour every day";
    break;
    case 'Sports Exercises': titleInfo = "Cycling for a distance of at least 50 kilometers per week";
    break;
    case 'Watching Movie': titleInfo = "Watch my favorite movies for a maximum of 7 hours per week";
    break;
    case 'Reading novel': titleInfo = "Reading novels during breaks";
    break;
    default: titleInfo = "undefined Todo";
}

    return(
        <div className="modal">
            <h2>{title}</h2>
            <p>{titleInfo}</p>
            <button className="btn btn--alt" onClick={btnDoneHandler}>Done</button>
            <button className="btn" onClick={btnUndoneHandler}>Undone</button>
        </div>
    )
}

export default Modal;