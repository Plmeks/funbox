import React, {Component} from "react";
import "./styles.scss";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <span className="text-muted">Funbox react map - {new Date().getFullYear()}</span>
                </div>
            </footer>
        );
    }
}

export default Footer;