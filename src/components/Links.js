import Component from './Component.js';

class Links extends Component {
    renderTemplate() {
        return /*html*/`
            <div class="hidden soc-media">
                <div class="img-links">
                    <img src="./assets/github-grn2.png">
                    <img src="./assets/linkedin-grn.png">
                </div>
            </div>
    `;
    }
}

export default Links;