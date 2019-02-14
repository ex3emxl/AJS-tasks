export const TabNav = ({ tabs, selectedIndex, selectTab }) => {
    const itemClick = (event, index) => {
        event.preventDefault();
        selectTab(index);
    }

    return (
        <nav className="nav-tab">
            <ul>
                {
                    tabs.map((tabs, index) => (
                        <li key={ index }
                            className={ selectedIndex === index ? 'active' : '' }
                        >
                            <a href="#"
                               onClick={ event => itemClick(event, index) }
                            >{ tabs }</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};
