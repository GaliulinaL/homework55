import './Burger.css';

interface Props {
    ingredients: {
        name: string;
        count: number;
    }[];
}

const Burger = ({ingredients}: Props) => {

    const burger = [];

    for (let ingredient of ingredients) {

        for (let i = 0; i < ingredient.count; i++) {

            burger.push(
                <div
                    key={ingredient.name + i}
                    className={ingredient.name}
                ></div>
            );
        }
    }

    return (
        <div className="Burger">

            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>

            {burger}

            <div className="BreadBottom"></div>

        </div>
    );
};

export default Burger;