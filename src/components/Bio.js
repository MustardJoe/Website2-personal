import Component from './Component.js';

class Bio extends Component {
    renderTemplate() {
        return /*html*/`
        <secition class="hidden bio-comp">
            <div>
                Hi I’m Jon!  Here’s a brief introduction to me, my interests and 
                projects.
            </div>
            <div>
                I am have been coding in one capacity or another since 1996, although 
                I've recently been taking my coding skills to the next level!  I like 
                working with JavasScript and Python the best.
            </div>
            <div>
                Professionaly, I've been working with technology
                for a while, most recently in a hosptial as a BMET (bio-medical 
                equipment technician) conducting serviceing and repair of all types
                of medical devices.   
            </div>
            <div>
                I am especialy interested in getting into DevOps.
            </div>
        </secition>
    `;
    }
}

export default Bio;