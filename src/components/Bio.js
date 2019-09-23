import Component from './Component.js';

class Bio extends Component {
    renderTemplate() {
        return /*html*/`
        <secition class="hidden bio-comp">
            <div class="spacer-div"></div>
            <div>
                <h4 class="homeH4">Skills/Technologies I enjoy using</h4>
                JavaScript, HTML, CSS, Node.JS, Express, React, Redux, MongoDB, Mongoose,
                Firebase, Git, Github, Jest, Heroku, Netlify.
            </div>
          
            <div>
                Before transitioning into software, I spent many years working with a 
                technical focus on hardware.  As a BioMedical Equipment Technician (BMET) 
                I worked a hosptial conducting serviceing and repair of all types of medical 
                devices.   
            </div>

            <div id="hospital-bench">
                <img src="./assets/hospital_bench0.jpg" alt="BMET work bench covered in wrenches">
                <img src="./assets/hospital_bench1.jpg" alt="Biomedical equipment techinician work bench">
            </div>

        </secition>
    `;
    }
}

export default Bio;