import Component from './Component.js';
import Bio from './Bio.js';

class NavBar extends Component {
    render() {
        const dom = this.renderDOM();
        const bio1 = dom.getElementsByClassName('bio1');
        const test = dom.getElementsByClassName('test1');  //.querySelector('test1');

        const bio = new Bio();
        const bioDOM = bio.render();
        dom.appendChild(bioDOM);

        bio1[0].addEventListener('click', (event) => {
            event.preventDefault();
            console.log('happy day!');
            test[0].classList.add('hidden');
            bioDOM.classList.remove('hidden');


               
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/`
            <div class="nav-bar">
                <ul>
                    <li>
                        <a href="./">Home</a>
                    </li> 
                    <li>
                        <a class="bio1" href="./">Bio</a>
                    </li>
                </ul>
                <div class="test1">secret mesg</div>
            </div>
    `;
    }
}

export default NavBar;