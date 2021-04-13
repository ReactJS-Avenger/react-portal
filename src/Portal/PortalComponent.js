import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class PortalComponent extends Component {
    render() {
        return ReactDOM.createPortal(
            <div>
                This is Portal Component
            </div>,

            document.getElementById('portal')
        );
    }
}

export default PortalComponent;