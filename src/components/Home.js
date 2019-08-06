import Component from './Component.js';

class Home extends Component {
    renderTemplate() {
        return /*html*/`
        <section class="home-comp">
            <div class="spacer-div"></div>
            <div >
                Hi I’m Jon!  Welcome to my internet home (away from home). I'm a 
                software devoloper (he/him pronouns) who lives in Portland, Or.
            </div>
            <div>
            I would describe myself as an intelligent, empathetic and diligent individual
            with a quiet but quirky sense of humor, and a passion for continuous learning.
            The most important thing to me in a job is being part of a great fitting team 
            that works well together and supports each other.
            </div>
            <div>
                I love playing music, and I play several instruments. My favorite book is 'The Republic' 
                and my 3rd favorite
                movie is the original 1954 Godzilla.  Also, I grew up in Alaska.
            </div>
            <div>
                Please use this site as a helpful resource to learn about me!
            </div>
            <div class="twitter-tag">
                <a href="https://twitter.com/GodzillaJonny" target="_blank">
                    @GodzillaJonny
                </a>
            </div>
        </section>
    `;
    }
}

export default Home;