import "./App.css";
import Header from "./components/Header/Header";
import Body from "./layouts/Body/Body";
import JournalList from "./components/JournalList/JournalList";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import JournalForm from "./components/JournalForm/JournalForm";
import { useEffect, useState } from "react";

function App() {
    const [items, setItems] = useState([]);

    // чтение из localStorage
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("data"));
        if (data) {
            setItems(
                data.map(item => ({
                    ...item,
                    date: new Date(item.date),
                })),
            );
        }
    }, []);

    // запись в localStorage
    useEffect(() => {
        if (items.length) {
            console.log("Запись!");
            localStorage.setItem("data", JSON.stringify(items));
        }
    }, [items]);

    const addItem = item => {
        setItems(oldItems => [
            ...oldItems,
            {
                post: item.post,
                title: item.title,
                date: new Date(item.date),
                id:
                    oldItems.length > 0
                        ? Math.max(...oldItems.map(i => i.id)) + 1
                        : 1,
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
