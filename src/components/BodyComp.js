import Component from './Component.js';

class BodyComp extends Component {    
    renderTemplate() {
        return /*html*/`
            <div class="body-comp">Hello World!</div>
    `;
    }
}

export default BodyComp;