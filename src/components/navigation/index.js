import React, {Component} from "react";
import "./styles.scss";

class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div className="row">
                        <div className="col s12">
                            <a href="/" className="brand-logo">&nbsp;React mapman</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;