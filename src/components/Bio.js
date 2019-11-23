import Component from './Component.js';

class Bio extends Component {
    renderTemplate() {
        return /*html*/`
        <secition class="hidden bio-comp">
            <div class="spacer-div"></div>
            <div>
                <h4 class="homeH4">Skills/Technologies I enjoy using</h4>
                JavaScript, Node.JS, Express, React, Redux, MongoDB, Mongoose,
                HTML, CSS, Firebase, Git, Github, Jest, Heroku, Netlify, TDD
            </div>
          
            <div>
                I’ve spent the last 12+ years solving problems using technical
                knowledge and expertise.
                Before transitioning into software, I spent many years working with a 
                technical focus on hardware.  As a BioMedical Equipment Technician (BMET) 
                I worked a hosptial conducting servicing and repair of all types of medical 
                devices.  Prior to that I spent a decade as a bicycle mechanic, specializing
                in both repair work and customer service.
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