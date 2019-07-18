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
<<<<<<< HEAD
                        <i class="fas fa-database"></i> Academic</a>
=======
                        <i class="fas fa-database"></i>  Academic</a>
>>>>>>> 3415f86ea8595782298bfd67cd6abb496a1445bb
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