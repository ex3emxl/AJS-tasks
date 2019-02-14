import { Tab, TabNav } from './';

import './tabs.scss';

export class Tabs extends Component {
    state = {
        selectedIndex: this.props.selectedIndex - 1
    }

    selectTab = (selectedIndex) => {
        this.setState({ selectedIndex });
    }

    render() {
        const { children } = this.props;
        const { selectedIndex } = this.state;
        const tabs = children.filter(child => child.type === Tab);
        const titles = tabs.map(tab => tab.props.title);
        return (
            <div className="tabs">
                Tabs
                <TabNav
                    tabs={ titles }
                    selectedIndex={ selectedIndex }
                    selectTab={ this.selectTab }
                />
                <section className="tab-content">
                    { tabs[selectedIndex].props.children }
                </section>
            </div>
        );
    }
}
