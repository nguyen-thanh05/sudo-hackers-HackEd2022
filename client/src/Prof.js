import React, { Component } from "react";
import { Container, Sidebar } from "rsuite";

class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideNavExpanded: true,
            screens: [],
            currentScreen: null,
            updateScreen: true,
            template: {},
        };

        this.templateCalls = new TemplateCalls();
        this.handleExpandToggle = this.handleExpandToggle.bind(this);
        this.handleUpdateScreen = this.handleUpdateScreen.bind(this);
    }

    async componentDidMount() {
        const templateRes = await this.templateCalls.getTemplate(
            this.props.match.params.templateId
        );
        this.setState({ template: templateRes });
        const screensRes = await this.templateCalls.getTemplateScreens(
            this.props.match.params.templateId
        );
        let currentScreen = {};
        if (this.props.match.params.screenId !== "home") {
            currentScreen = screensRes.data.data.find(
                (x) => x._id === this.props.match.params.screenId
            );
        }
        this.setState({
            screens: screensRes.data.data,
            template: templateRes,
            currentScreen,
        });
    }

    handleExpandToggle(expanded) {
        this.setState({ sideNavExpanded: expanded });
    }

    handleUpdateScreen() {
        this.setState({ updateScreen: !this.state.updateScreen });
    }

    render() {
        const instance = <Button>Default</Button>;
        ReactDOM.render(instance);
    }
}

export default Template;
