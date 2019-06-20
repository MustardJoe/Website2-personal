import Component from './Component.js';
import Bio from './Bio.js';
import Home from './Home.js';
import Projects from './Projects.js';
import Links from './Links.js';

class NavBar extends Component {
    render() {
        const dom = this.renderDOM();
        const bio1 = dom.getElementsByClassName('bio1');

        const bio = new Bio();
        const bioDOM = bio.render();
        dom.appendChild(bioDOM);

        const home = new Home();
        const homeDOM = home.render();
        dom.appendChild(homeDOM);

        const projects = new Projects();
        const projectsDOM = projects.render();
        dom.appendChild(projectsDOM);

        const links = new Links();
        const linksDOM = links.render();
        dom.appendChild(linksDOM);

        function navBarButtons(navButton) {
            event.preventDefault();
            homeDOM.classList.add('hidden');
            bioDOM.classList.add('hidden');
            projectsDOM.classList.add('hidden');
            linksDOM.classList.add('hidden');
            navButton.classList.remove('hidden');
        }
    
        bio1[0].addEventListener('click', () => {
            navBarButtons(homeDOM);
        });     
        
        bio1[1].addEventListener('click', () => {
            navBarButtons(bioDOM);
        });

        bio1[2].addEventListener('click', () => {
            navBarButtons(projectsDOM);
        });

        bio1[3].addEventListener('click', () => {
            navBarButtons(linksDOM);
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <div class="nav-bar">
                <ul>
                    <li>
                        <a class="bio1" href="./" value="home">Home</a>
                    </li> 
                    <li>
                        <a class="bio1" href="./">Bio</a>
                    </li>
                    <li>
                        <a class="bio1" href="./">Projects</a>
                    </li>
                    <li>
                        <a class="bio1" href="./">Links/Refs</a>
                    </li>
                </ul>
            </div>
    `;
    }
}

export default NavBar;