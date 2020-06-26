import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BackHome extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </div>
        )
    }
}

export default BackHome;