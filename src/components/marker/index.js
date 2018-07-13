import React, {Component} from "react";
import PropTypes from 'prop-types';
import {deleteMarker} from "../../actions/markers";
import {connect} from "react-redux";

import "./styles.scss";

class Marker extends Component {
    // cosmetic-needs state variable
    state = {
        showDeleteButton: false
    };

    // fires on delete icon touched
    removeMarker = (e, id) => {
        e.preventDefault();
        this.props.deleteMarker(id);  
    }

    render() {
        const {id, name, routeStart} = this.props;
        
        return(
            <div id="marker" className="z-depth-1">
                <div className={`col s2 placemark-img 
                    ${routeStart? "marker-red": "marker-blue"}`
                }>
                </div>
                <div className="col s8">
                    <p className="marker-name">{name}</p>
                </div>
                <div className="col s2">
                    <i className="material-icons button-close"
                        onClick={(event) => this.removeMarker(event, id)}
                    >
                        close
                    </i>
                </div>
            </div>
        );
    }
}

// Checking coming props
Marker.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}; 

export default connect(
    state => state, {deleteMarker}
)(Marker);