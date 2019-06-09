import Component from './Component.js';

class Projects extends Component {
    renderTemplate() {
        return /*html*/`
        <section class="hidden">
            <div>
                Check out my GitHub to see my projects.
            </div>        
        </section>
    `;
    }
}

export default Projects;