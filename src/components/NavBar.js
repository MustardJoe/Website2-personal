import Component from './Component.js';

class NavBar extends Component {
    renderTemplate() {
        return /*html*/`
            <div class="nav-bar">
                <ul>
                    <li>
                        <a href="./">Home</a>
                    </li> 
                    <li>
                        <a href="./">Bio</a>
                    </li>
                </div>
            </div>
    `;
    }
}

export default NavBar;