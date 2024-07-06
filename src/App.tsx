import { useState, ChangeEvent, useRef } from "react";
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
                <div className={css.listContainer}>
                    <h3>Number of test cases {list.length}.</h3>
                    <ul className={css.list}>
                        {list.map((item, index) => (
                            <li key={index}>
                                <div>
                                    {item[0]}: {JSON.stringify(item[1])} = {item[2]}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default App;
