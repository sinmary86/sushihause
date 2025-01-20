import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="categories-container">
            {[
                'ALLES',
                'VORSPEISE',
                'MAKI',
                'NIGIRI',
                'GUNKAN',
                'INSIDE OUT ROLL',
                'TEMPURA',
                'SUSHI SET',
            ].map(category => (
                <Filter category={category} />
            ))}
        </div>
    );
};

export default AllCategories;
