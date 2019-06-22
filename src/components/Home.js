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
                I love playing music, and I play several instruments. My 3rd favorite
                movie is the original 1954 Godzilla.  Also, I grew up in Alaska.
            </div>
            <div>
                Please use this site as a helpful resource to learn about me!
            </div>
            <div class="spacer-div"></div>
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