import Component from './Component.js';
import Bio from './Bio.js';

class BodyComp extends Component {    
    render() {
        const dom = this.renderDOM();

        const bio = new Bio();
        dom.appendChild(bio.render());

        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
            <div class="body-comp">Hello World!</div>
    `;
    }
}

export default BodyComp;