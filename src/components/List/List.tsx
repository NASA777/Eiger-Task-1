type listProps = {
    suffix: string;
    prefixLengths: number[];
    result: number;
};

const List: React.FC<listProps> = ({ suffix, prefixLengths, result }) => {
    return (
        <div>
            {suffix}: {JSON.stringify(prefixLengths)} = {result}
        </div>
    );
};

export default List;
