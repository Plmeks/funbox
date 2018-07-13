import React, {Component} from "react";
import Marker from "../marker/";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {connect} from "react-redux";
import {sortMarkers} from "../../actions/markers";

import "./styles.scss";

class MarkerListDnd extends Component {
    onDragEnd = result => {
        // dropped outside the list
        if (!result.destination)
            return;
        
        this.props.sortMarkers(
            result.source.index, 
            result.destination.index
        );
    }

    render() {
        // Drag and drop plugin party
        const {markers} = this.props;

        const markersJsx = markers
        .filter(marker => marker.id !== 0)
        .map((marker, index) => (
            <Draggable key={marker.id} draggableId={marker.id} index={index}>
                {(provided, snapshot) => (
                    <div ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <Marker {...marker} />
                    </div>
                )}
            </Draggable>
        ));

        return(
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} id="markers-dnd" className="">
                            {markersJsx}
                            {provided.placeholder}
                        </div>
                    )}  
                </Droppable>
            </DragDropContext>
        );
    }
}

export default connect(
    state => state,
    {sortMarkers}
)(MarkerListDnd);