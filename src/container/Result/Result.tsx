import List from "../../components/List/List";
import css from "./Result.module.css";

type resultProps = {
    list: [string, number[], number][];
};

const Result: React.FC<resultProps> = ({ list }) => {
    return (
        <div className={css.listContainer}>
            <h3>Number of test cases {list.length}.</h3>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        <List suffix={item[0]} prefixLengths={item[1]} result={item[2]} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Result;
