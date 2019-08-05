import Component from './Component.js';

class Projects extends Component {
    renderTemplate() {
        return /*html*/`
        <section class="hidden projects-comp">
            <div class="spacer-div"></div>
            <div>
                <a href="https://happy-lovelace-66fb73.netlify.com/auth.html" target="blank">
                I Believe In URL</a> Is a URL shortening service (similar to bit.ly) that makes use
                of MongoDB to take a long URL provided by a user and return a shorter 
                alternative for use in places like Twitter or elsewhere when typing 
                out an enourmouse link is unwieldly/not possible. 
            </div>
            <div>
                <a href="https://moddo.netlify.com/" target="_blank">Moddo: Advice and 
                Inspire</a> Moddo is a project I worked on as part of an exercise
                in using Firebase database system.  It gives you a bit of random 
                adivce and then has a todo list app.
            </div>
            <div>
                <a href="https://confident-shirley-560be5.netlify.com/index.html" target="_blank">
                Jonny's Simpsons Quotes!</a> A project I created that pulls data from a Simpsons API
                and displays that data as with a Simpsons-themed presentation style.
            </div>
            <div>
                Check out my <a href="https://github.com/MustardJoe" target="_blank">
                GitHub</a>to see the rest of my projects.
            </div>
            <div class="img-links">
                <a href="https://github.com/MustardJoe" target="blank">
                    <img src="./assets/github-grn2.png" alt="GitHub icon">
                </a>
            </div>        
        </section>
    `;
    }
}

export default Projects;