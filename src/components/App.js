import Component from './Component.js';
import Header from './Header.js';
import BodyComp from './BodyComp.js';
import Footer from './Footer.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        
        const header = new Header();
        dom.insertBefore(header.render(), main);

        const bodyComp = new BodyComp();
        dom.appendChild(bodyComp.render());

        const footer = new Footer();
        dom.appendChild(footer.render());

        return dom;
    }
    
    renderTemplate() {
        return /*html*/`
        <main>
        </main>
    `;
    }
}

export default App;