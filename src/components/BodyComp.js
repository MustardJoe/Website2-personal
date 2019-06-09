import Component from './Component.js';
import NavBar from './NavBar.js';

class BodyComp extends Component {    
    render() {
        const dom = this.renderDOM();

        const navBar = new NavBar();
        dom.prepend(navBar.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div class="body-comp">Hello World!</div>
    `;
    }
}

export default BodyComp;