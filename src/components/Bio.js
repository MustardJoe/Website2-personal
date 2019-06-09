import Component from './Component.js';

class Bio extends Component {
    renderTemplate() {
        return /*html*/`
        <div class="hidden">Hi I’m Jon!  Here’s a brief introduction to me, my interests and projects.</div>
    `;
    }
}

export default Bio;