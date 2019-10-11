import Component from './Component.js';

class Projects extends Component {
    renderTemplate() {
        return /*html*/`
        <section class="hidden projects-comp">
            <div class="spacer-div"></div>
            <div>
                <img src="../../assets/joliliah.png">
                <p class="proj-text">
                    <a href="https://happy-lovelace-66fb73.netlify.com/auth.html" target="blank">
                    I Believe In URL</a> A URL shortening app built with javascript, 
                    using Node, Express and MongoDB.  Provides a shorter URL alternative
                    when one is needed.
                </p>
            </div>
            <div class="spacer-div"></div>
            <div>
                <img src="../../assets/moddo.png">
                <p class="proj-text">
                    <a href="https://moddo.netlify.com/" target="_blank">Moddo: Advice and 
                    Inspire</a> Moddo is a fullstack app built as an exercise
                    in using Firebase database system.  It gives you a bit of random 
                    adivce which inspires your to complete the paired to do list.
                </p>
            </div>
            <div class="spacer-div"></div>
            <div>
                <img src="../../assets/simpsons.png">
                <p class="proj-text">
                    <a href="https://confident-shirley-560be5.netlify.com/index.html" target="_blank">
                    Jonny's Simpsons Quotes!</a> A project I created that pulls data from a Simpsons API
                    and displays that data as with a Simpsons-themed presentation style.
                </p>
            </div>
            <div>
                Please consider viewing my <a href="https://github.com/MustardJoe" target="_blank">
                GitHub</a> to see more!
            </div>
            <div class="spacer-div"></div><div class="spacer-div"></div>
 
        </section>
    `;
    }
}

export default Projects;