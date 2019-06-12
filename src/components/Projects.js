import Component from './Component.js';

class Projects extends Component {
    renderTemplate() {
        return /*html*/`
        <section class="hidden">
            <div>
                Check out my <a href="https://github.com/MustardJoe">GitHub</a> 
                to see my projects.
            </div>        
        </section>
    `;
    }
}

export default Projects;