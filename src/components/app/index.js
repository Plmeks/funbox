import React, {Component} from "react";
import Navigation from "../navigation/";
import MarkersCreator from "../markersCreator/";
import MarkerListDnd from "../markerListDnd/";
import YandexMap from "../yandexMap/";
import Footer from "../footer/";

import "./styles.scss";
import "materialize-css/dist/css/materialize.min.css";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="app">
                    <Navigation />
                    <div id="app-panel" className="container">
                        <div className="row">
                            <div className="col l4 m12 z-depth-1 white markers-container">
                                <div className="row markers-header">
                                    <p>Markers</p>
                                </div>
                                <MarkersCreator />
                                <MarkerListDnd />
                            </div>
                            <div className="col l8 m12 ymaps-container">
                                <YandexMap />
                            </div>
                        </div>
                        <div className="push-sticky-footer"></div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;