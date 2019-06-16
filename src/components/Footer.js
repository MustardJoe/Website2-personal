import Component from './Component.js';

class Footer extends Component {
    renderTemplate() {
        return /*html*/`
        <div class="footer">
            You've made it to the bottom of the page! Congratulations!
            © Jon Forney 2019
        </div>
    `;
    }
}

export default Footer;