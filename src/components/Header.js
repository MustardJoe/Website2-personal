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
                <a href="./">
                    <h1>
                        Hi! <span class="dif-font">I'm Jon Forney.</span> ${topMsg}
                    </h1>
                </a>
            </header>
    `;
    }
}

export default Header;