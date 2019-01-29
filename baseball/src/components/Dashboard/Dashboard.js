import React from "react";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>
                    <button
                        data-testid="strikeButton"
                        onClick={this.props.changeStrikes}
                    >
                        Strike
                    </button>
                    <button
                        data-testid="ballButton"
                        onClick={this.props.changeBalls}
                    >
                        Ball
                    </button>
                    <button
                        data-testid="hitButton"
                        onClick={this.props.changeHits}
                    >
                        Hit
                    </button>
                    {/* <button onClick={this.props.changeFouls}>Foul</button> */}
                </div>
            </div>
        );
    }
}

export default Dashboard;