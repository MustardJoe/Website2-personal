import Component from './Component.js';

class Bio extends Component {
    renderTemplate() {
        return /*html*/`
        <secition class="hidden bio-comp">
            <div class="spacer-div"></div>
            <div>
                The spaced we inhabit reveal a lot about ourselves.  These are the spaces where I've worked
            </div>
            <div id="hospital-bench">
                <img src="./assets/hospital_bench0.jpg" alt="BMET work bench covered in wrenches">
                <img src="./assets/hospital_bench1.jpg" alt="Biomedical equipment techinician work bench">
            </div>
            <div>
                I like working with JavasScript and Python the best.
            </div>
            <div>
                Before transitioning into software, I spent many years working with a 
                technical focus on hardware.  As a BioMedical Equipment Technician (BMET) 
                I worked a hosptial conducting serviceing and repair of all types of medical 
                devices.   
            </div>
        </secition>
    `;
    }
}

export default Bio;