import React from "react";

class Button extends React.Component {
    render() {
        return (
            <div className="center">
                <button className="button">
                    {this.props.buttonText}
                </button>
            </div>
        );
    }
}

export default Button;

