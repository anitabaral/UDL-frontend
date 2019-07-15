import React, { Component } from 'react';
import './sidebar.css'
class Sidebar extends Component {
    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a href="/">
                        <i class="fas fa-tachometer-alt"></i>  Dahboard</a>
                    <a href="/info">
                        <i class="fas fa-database"></i>  Academic</a>
                    <a href="#">
                        <i class="fas fa-id-card"></i>  Profile </a>
                    <a href="#">
                        <i class="fas fa-table"></i>  Excel Export</a>

                </div>

            </div>

        )
    }
}

export default Sidebar;