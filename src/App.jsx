import "./App.css";
import Button from "./components/Button/Button";
import CardButton from "./components/CardButton/CardButton";
import JournalItem from "./components/JournalItem/JournalItem";

function App() {
    const data = [
        {
            title: "Подготовка обновлений курсов",
            date: new Date(),
            text: "Горные походы открывают удивительные природные ландшафты",
        },
        {
            title: "Поход в годы",
            date: new Date(),
            text: "Различают альпинизм и горный туризм. Если в альпинизме главная",
        },
        {
            title: "Первая заметка",
            date: new Date(),
            text: "Большое значение в горном туризме придается бытовому обустройству",
        },
    ];
    return (
        <>
            <h1>Заголовок</h1>
            <p>Какой-то текст</p>
            <Button />
            <CardButton>Новое воспоминание</CardButton>
            <CardButton>
                <JournalItem
                    title={data[0].title}
                    text={data[0].text}
                    date={data[0].date}
                />
            </CardButton>

            <CardButton>
                <JournalItem
                    title={data[1].title}
                    text={data[1].text}
                    date={data[1].date}
                />
            </CardButton>

            <CardButton>
                <JournalItem
                    title={data[2].title}
                    text={data[2].text}
                    date={data[2].date}
                />
            </CardButton>
        </>
    );
}

export default App;
