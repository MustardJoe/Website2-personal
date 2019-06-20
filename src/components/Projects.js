import Component from './Component.js';

class Projects extends Component {
    renderTemplate() {
        return /*html*/`
        <section class="hidden projects-comp">
            <div>
                <a href="https://moddo.netlify.com/" target="_blank">Moddo: Advice and 
                Inspire</a> Moddo is a project I worked on as part of an exercise
                in using Firebase database system.  It gives you a bit of random 
                adivce and then has a todo list app.
            </div>
            <div>
                Check out my <a href="https://github.com/MustardJoe" target="_blank">
                GitHub</a>to see the rest of my projects.
            </div>
            <div class="img-links">
                <a href="https://github.com/MustardJoe" target="blank">
                    <img src="./assets/github-grn2.png">
                </a>
            </div>        
        </section>
    `;
    }
}

export default Projects;