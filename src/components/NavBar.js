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

        bio1[0].addEventListener('click', (event) => {
            event.preventDefault();
            homeDOM.classList.remove('hidden');
            bioDOM.classList.add('hidden');
            projectsDOM.classList.add('hidden');
            linksDOM.classList.add('hidden');

        });

        bio1[1].addEventListener('click', (event) => {
            event.preventDefault();
            bioDOM.classList.remove('hidden');
            homeDOM.classList.add('hidden');
            projectsDOM.classList.add('hidden');
            linksDOM.classList.add('hidden');

        });

        bio1[2].addEventListener('click', (event) => {
            event.preventDefault();
            projectsDOM.classList.remove('hidden');
            bioDOM.classList.add('hidden');
            homeDOM.classList.add('hidden');
            linksDOM.classList.add('hidden');

        });

        bio1[3].addEventListener('click', (event) => {
            event.preventDefault();
            linksDOM.classList.remove('hidden');
            bioDOM.classList.add('hidden');
            homeDOM.classList.add('hidden');
            projectsDOM.classList.add('hidden');

        });

        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <div class="nav-bar">
                <ul>
                    <li>
                        <a class="bio1" href="./">Home</a>
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