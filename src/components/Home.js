import Component from './Component.js';


class Home extends Component {
    renderTemplate() {
        return /*html*/`
        <section class="home-comp">
            <div class="jonvatar">
                <img src="./assets/jon-maya-avatar-small.png">
            </div>
            <div class="empty-div"></div>
            <div>
                Welcome to my internet home (away from home). I'm a 
                fullstack software devoloper (he/him pronouns) living
                in Portland, Or.
            </div>

            <div>
            I'm an empathetic, inteligent and diligent individual
            with a quiet but quirky sense of humor, and a passion for continuous learning.
            The most important thing to me in a job is being part of a great fitting team 
            that works well together and supports each other.
            </div>

            <div>
                I grew up in Alaska, I play several instruments and my 3rd favorite
                movie is the original 1954 Godzilla.
            </div>

            <div>
                Please use this site as a helpful resource to learn about me!
            </div>
        </section>
    `;
    }
}

export default Home;