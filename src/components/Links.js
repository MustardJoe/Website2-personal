import Component from './Component.js';

class Links extends Component {
    renderTemplate() {
        return /*html*/`
            <div class="hidden soc-media">
                <div class="img-links">
                    <a href="https://github.com/MustardJoe" target="blank">
                        <img src="./assets/github-grn2.png">
                    </a>
                    <a href="https://www.linkedin.com/in/jonathan-forney-52431a79/" target="blank">
                        <img src="./assets/linkedin-grn.png">
                    </a>
                </div>
            </div>
    `;
    }
}

export default Links;