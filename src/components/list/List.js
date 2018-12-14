const List = ({ items, handleClick = false }) => {

    return (
        items ? (
            <ul>
                {
                    items.map(el => (
                        <li key={el.id} onClick={() => handleClick(el)}>{el.name ? el.name : el.body}</li>
                    ))
                }
            </ul>
        ) : null
    );
};

export default List;