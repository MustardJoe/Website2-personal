import Component from './Component.js';

class Footer extends Component {
    // render() {
    //     const dom = this.renderDOM();
       
    //     let exp = 0;
    //     window.onload(() => {
    //         exp = exp + 5;
    //         console.log(exp);
    //         return exp;    
    //       });

    //     return dom;
    // }
    renderTemplate() {
        return /*html*/`
        <div class="footer">
            <div>
                You've made it to the bottom of the page! Congratulations!
            </div>
            <div>
                © Jon Forney 2019
            </div>
        </div>
    `;
    }
}

export default Footer;