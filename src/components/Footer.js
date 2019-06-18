import Component from './Component.js';

class Footer extends Component {
    renderTemplate() {
        return /*html*/`
        <div class="footer">
            <div>
                You've made it to the bottom of the page! Congratulations!
            </div>
            <div>
                © Jon Forney 2019
            </div>
        </div>
    `;
    }
}

export default Footer;