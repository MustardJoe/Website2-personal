import Component from './Component.js';

class Links extends Component {
    renderTemplate() {
        return /*html*/`
            <div class="hidden soc-media">
                <div class="spacer-div"></div>
                <div class="twitter-tag">
                    Feel free to contact me with your professional opportunities!
                </div>
                <div class="img-links-div">
                    <a href="https://github.com/MustardJoe" class="img-links" target="blank">
                        <img src="./assets/github-grn2.png" alt="GitHub icon">
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-forney-52431a79/" class="img-links" target="blank">
                        <img src="./assets/linkedin2.png" alt="linked in icon">
                    </a>
                    <a href="https://twitter.com/GodzillaJonny" class="img-links" target="blank">
                    <img src="./assets/twittergood.png" alt="linked in icon">
                    </a>
                </div>
                <div class="spacer-div"></div>
                <div class="cartoon-ref">
                    <img src="./assets/jonvatar.png">
                    <p class="maya-ref">
                        Cartoon Jon avatar by <a href="https://www.mayacastillo.com/" target="blank">
                        Maya Castillo</a>
                    </p>
                </div>
            </div>
    `;
    }
}

export default Links;