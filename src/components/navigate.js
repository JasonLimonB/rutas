import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';

class Navigate extends Component {
    render() {
        return (
            <div className="menu">
                <div className="menu-cont">
                    <ul>
                        <li>
                            <Link to="/home" className="item">Home</Link>
                        </li>
                        <li>
                            <Link to="/settings" className="item">Settings</Link>
                        </li>
                        <li>
                            <Link to="/contacto" className="item">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(Navigate);