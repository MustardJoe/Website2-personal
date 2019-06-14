import Component from './Component.js';

class Projects extends Component {
    renderTemplate() {
        return /*html*/`
        <section class="hidden">
            <div>
                <a href="https://moddo.netlify.com/">Moddo: Inspire and Advice</a>
                Moddo is a project I worked on as part of an exercise in using Firebase
                database system.  It gives you a bit of random adivce and then has a todo
                list app.
            </div>
            <div>
                Check out my <a href="https://github.com/MustardJoe">GitHub</a> 
                to see the rest of my projects.
            </div>        
        </section>
    `;
    }
}

export default Projects;