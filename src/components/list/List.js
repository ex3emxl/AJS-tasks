const List = ({ items, handleClick }) => {

    return (
        items ? (
            <ul>
                {
                    items.map(el => (
                        <li key={el.id} onClick={() => handleClick(el)}>{el.name}</li>
                    ))
                }
            </ul>
        ) : null
    );
};

export default List;