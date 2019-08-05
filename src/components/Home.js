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
                I was around for the dawn of the internet (jk, but not really :-) As a youth 
                I wrote several Geocities pages.  In fact, I have have been coding since 
                1996. Recently, I've been taking my coding skills to the next level!
                make website a game where you level up, using something similar to star bbs.
                track experience and update avatar and minor style or decoration changes.
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