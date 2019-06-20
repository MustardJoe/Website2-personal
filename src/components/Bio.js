import Component from './Component.js';

class Bio extends Component {
    renderTemplate() {
        return /*html*/`
        <secition class="hidden bio-comp">
            <div>
                Hi I’m Jon!  Here’s a brief introduction to who I am:
            </div>
            <div>
                I was around for the dawn of the internet.  I began coding at
                a relatively young age, and as a youth I wrote several Geocities pages.
                In fact, I have have been coding since 1996. Recently, I've been taking my 
                coding skills to the next level!  I like working with JavasScript and 
                Python the best.
            </div>
            <div>
                Before transitioning into software, I spent many years working with a 
                technical focus on hardware, most recently in a hosptial as a BMET 
                (bio-medical equipment technician) conducting serviceing and repair of all 
                types of medical devices, in laboratory and field settings.   
            </div>
            <div>
                I am especialy interested in back-end and DevOps.
            </div>
        </secition>
    `;
    }
}

export default Bio;