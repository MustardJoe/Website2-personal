import Component from './Component.js';
import randMsgHead from '../services/msg-gen-header.js';

class Header extends Component {
    render() {
        const header = this.renderDOM();

        return header;
    }
    
    renderTemplate() {
        const topMsg = randMsgHead();
        
        return /*html*/`
            <header class="header">
                <a href="./"><h1>Hi! I'm Jon Forney. ${topMsg}</h1></a>
            </header>
    `;
    }
}

export default Header;