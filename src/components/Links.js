import Component from './Component.js';

class Links extends Component {
    renderTemplate() {
        return /*html*/`
            <div class="hidden soc-media">
                <div class="spacer-div"></div>
                <div class="twitter-tag">
                    <a href="https://twitter.com/GodzillaJonny" target="_blank">
                        @GodzillaJonny
                    </a>
                </div>
                <div class="img-links">
                    <a href="https://github.com/MustardJoe" target="blank">
                        <img src="./assets/github-grn2.png" alt="GitHub icon">
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-forney-52431a79/" target="blank">
                        <img src="./assets/linkedin2.png" alt="linked in icon">
                    </a>
                    <a href="https://twitter.com/GodzillaJonny" target="blank">
                    <img src="./assets/twittergood.png" alt="linked in icon">
                </a>
                </div>
            </div>
    `;
    }
}

export default Links;