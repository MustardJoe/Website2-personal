import Component from './Component.js';

class Footer extends Component {
    renderTemplate() {
        return /*html*/`
        <div class="footer">
            <div>
                You've made it to the bottom of the page! Congratulations!
            </div>
            <section>
                © Jon Forney 2019
            </section>
        </div>
    `;
    }
}

export default Footer;