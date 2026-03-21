import { useEffect, useReducer, useRef } from "react";
import Button from "../Button/Button";
import styles from "./JournalForm.module.css";
import cn from "classnames";
import { formReducer, INITIAL_STATE } from "./JournalForm.state";
import Input from "../Input/Input";

function JournalForm({ onSubmit }) {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = formState;

    const titleRef = useRef();
    const dateRef = useRef();
    const textRef = useRef();

    const focusError = isValid => {
        switch (true) {
            case !isValid.title:
                titleRef.current.focus();
                break;
            case !isValid.date:
                dateRef.current.focus();
                break;
            case !isValid.text:
                textRef.current.focus();
                break;
        }
    };

    useEffect(() => {
        let timerId;
        if (!isValid.date || !isValid.text || !isValid.title) {
            focusError(isValid);
            timerId = setTimeout(() => {
                dispatchForm({ type: "RESET_VALIDITY" });
            }, 1000);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [isValid]);

    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values);
            dispatchForm({ type: "CLEAR" });
        }
    }, [isFormReadyToSubmit, values, onSubmit]);

    const onChange = event => {
        dispatchForm({
            type: "SET_VALUE",
            payload: { [event.target.name]: event.target.value },
        });
    };

    const addJournalItem = event => {
        event.preventDefault();

        dispatchForm({ type: "SUBMIT" });
    };

    return (
        <form className={styles["journal-form"]} onSubmit={addJournalItem}>
            <div>
                <Input
                    name="title"
                    type="text"
                    value={values.title}
                    onChange={onChange}
                    ref={titleRef}
                    isValid={isValid.title}
                    appearance="title"
                />
            </div>
            <div className={styles["form-row"]}>
                <label htmlFor="date" className={styles["form-label"]}>
                    <img src="/calendar.svg" alt="Иконка календаря" />
                    <span>Дата</span>
                </label>
                <Input
                    name="date"
                    type="date"
                    id="date"
                    value={values.date}
                    onChange={onChange}
                    ref={dateRef}
                    isValid={isValid.date}
                />
            </div>
            <div className={styles["form-row"]}>
                <label htmlFor="tag" className={styles["form-label"]}>
                    <img src="/folder.svg" alt="Иконка папки" />
                    <span>Метки</span>
                </label>
                <Input
                    name="tag"
                    type="text"
                    id="tag"
                    value={values.tag}
                    onChange={onChange}
                />
            </div>
            <textarea
                name="text"
                id=""
                value={values.text}
                onChange={onChange}
                ref={textRef}
                cols="30"
                rows="10"
                className={cn(styles["input"], {
                    [styles["invalid"]]: !isValid.text,
                })}
            ></textarea>
            <Button text="Сохранить" />
        </form>
    );
}

export default JournalForm;
