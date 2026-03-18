import "./App.css";
import Header from "./components/Header/Header";
import Body from "./layouts/Body/Body";
import JournalList from "./components/JournalList/JournalList";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import JournalForm from "./components/JournalForm/JournalForm";
import { useState } from "react";

const INITIAL_DATA = [
    {
        id: 1,
        title: "Подготовка обновлений курсов",
        date: new Date(),
        text: "Горные походы открывают удивительные природные ландшафты",
    },
    {
        id: 2,
        title: "Поход в годы",
        date: new Date(),
        text: "Различают альпинизм и горный туризм. Если в альпинизме главная",
    },
    {
        id: 3,
        title: "Первая заметка",
        date: new Date(),
        text: "Большое значение в горном туризме придается бытовому обустройству",
    },
];

function App() {
    const [items, setItems] = useState(INITIAL_DATA);

    const addItem = item => {
        setItems(oldItems => [
            ...oldItems,
            {
                id:
                    oldItems.length > 0
                        ? Math.max(...oldItems.map(i => i.id)) + 1
                        : 1,
                title: item.title,
                date: new Date(item.date),
                text: item.text,
            },
        ]);
    };

    return (
        <div className="app">
            <LeftPanel>
                <Header />
                <JournalAddButton />
                <JournalList items={items} />
            </LeftPanel>
            <Body>
                <JournalForm onSubmit={addItem} />
            </Body>
        </div>
    );
}

export default App;
