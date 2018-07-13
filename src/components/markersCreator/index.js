import React, {Component} from "react";
import {connect} from "react-redux";
import {addMarker} from "../../actions/markers";

import "./styles.scss";

// for using materialize input effect
import M from "materialize-css/dist/js/materialize.min.js";

class MarkersCreator extends Component {
    componentDidMount() {
        // making materlz inputs work
        M.updateTextFields();
    }

    // add marker by pressing enter
    addMarker = (e) => {
        if(e.key === 'Enter' && e.target.value !== "") {
            this.props.addMarker(e.target.value);
            e.target.value = "";
            e.target.blur();
        }
    }

    render() {
        return (
            <React.Fragment>
                <div id="markers-creator">
                    <div className="input-field">
                        <input id="marker-name" 
                            type="text" 
                            className="marker-creator" 
                            onKeyPress={this.addMarker}
                        />
                        <label htmlFor="marker-name">New marker</label>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    null,   // we arent using redux state-vars at this component
    {addMarker}
)(MarkersCreator);