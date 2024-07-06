import { useState, ChangeEvent, useRef } from "react";
import Result from "./container/Result/Result";
import { commonPrefix, onlyLetters } from "./utils/functions";
import css from "./App.module.css";

const App: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<string>("");
    const [list, setList] = useState<[string, number[], number][]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = onlyLetters(e.target.value);
        setValue(inputValue);
    };

    const handleSubmit = () => {
        if (value !== "") {
            const response = commonPrefix(value);
            resetValue();
            setList((prev) => [...prev, response]);
        }
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const resetValue = () => {
        setValue("");
    };

    const handleReset = () => {
        setList([]);
        resetValue();
    };

    return (
        <>
            <div className="container">
                <h1>Finding a Common Prefix Length</h1>
                <div className="center">
                    <input ref={inputRef} type="text" placeholder="Enter text" value={value} onChange={handleChange} />
                    <button type="button" onClick={handleSubmit} className={css.button}>
                        Submit
                    </button>
                    <button type="button" onClick={handleReset} className={css.button}>
                        Clean
                    </button>
                </div>

                <Result list={list} />
            </div>
        </>
    );
};

export default App;
