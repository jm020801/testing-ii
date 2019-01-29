import React from "react";

import Dashboard from "../Dashboard/Dashboard";

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strikes: 0,
            balls: 0,
            hits: 0,
            fouls: 0,
        };
    }

    changeStrikeCount = e => {
        if (this.state.strikes < 2) {
            this.setState({
                strikes: this.state.strikes + 1,
            });
        } else {
            this.setState({
                strikes: 0,
                balls: 0,
            });
        }
    };

    changeBallsCount = e => {
        if (this.state.balls < 3) {
            this.setState({
                balls: this.state.balls + 1,
            });
        } else {
            this.setState({
                balls: 0,
                strikes: 0,
            });
        }
    };

    changeHitsCount = e => {
        this.setState({
            hits: this.state.hits + 1,
            balls: 0,
            strikes: 0,
        });
    };

    changeFoulsCount = e => {
        this.setState({
            fouls: this.state.fouls + 1,
        });
    };

    render() {
        return (
            <div>
                <div>
                    <div data-testid="strikesOutput">
                        {this.state.strikes} <span> Strikes</span>
                    </div>
                    <div data-testid="ballsOutput">
                        {this.state.balls + " Balls"}
                    </div>
                    <div data-testid="hitsOutput">
                        {this.state.hits + " Hits"}
                    </div>
                    {/* <div data-testid="foulsOutput">
                        {this.state.fouls + " Fouls"}
                    </div> */}
                </div>
                <div>
                    <Dashboard
                        changeStrikes={this.changeStrikeCount}
                        changeBalls={this.changeBallsCount}
                        changeHits={this.changeHitsCount}
                        changeFouls={this.changeFoulsCount}
                    />
                </div>
            </div>
        );
    }
}

export default Display;