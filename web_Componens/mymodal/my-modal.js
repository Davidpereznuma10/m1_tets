import myButton from "./mybutton/my-button.js";

let pathName= new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');


export default class myModal extends HTMLElement{
    static async component(){
        return await(await fetch(pathName.replace('.js','.html'))).text();
    }
    constructor(){
        myButton
        super();
        this.attachShadow({mode: 'open'});
        Promise.resolve(myModal.component()).then(html=>{
            this.shadowRoot.innerHTML=html;
            this.shadowRoot.querySelector("#mybutton").innerHTML = '<my-Button></my-Button>'
        });
    };
}
customElements.define(name,myModal)