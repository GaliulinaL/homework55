import './Control.css';

interface Props {
    name: string;
    image: string;
    count: number;
    add: () => void;
    remove: () => void;
}

const Control = ({name, image, count, add, remove}: Props) => {

    return (
        <div className="control">

            <img src={image} alt={name}/>

            <h3>{name}</h3>

            <p>x{count}</p>

            <div className="buttons">

                <button onClick={add}>
                    Add
                </button>

                <button onClick={remove}>
                    Delete
                </button>

            </div>

        </div>
    );
};

export default Control;