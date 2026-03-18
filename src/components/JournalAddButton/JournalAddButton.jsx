import "./JournalAddButton.css";
import CardButton from "../CardButton/CardButton";

function JournalAddButton() {
    return (
        <CardButton className="journal-add">
            <img src="/plus.svg" alt="plus" />
            Новое воспоминание
        </CardButton>
    );
}

export default JournalAddButton;
