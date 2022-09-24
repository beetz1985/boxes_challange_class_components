import React from "react";

class Box extends React.Component {

    render(){

        const style = { backgroundColor: (this.props.on) ? "RoyalBlue" : "" }
        return (
            <div id={this.props.id} style={style} className="box" onClick={this.props.boxSelect}></div>
        )
    }

}

export default Box