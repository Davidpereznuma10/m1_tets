let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class myButton extends HTMLElement{
    static async component(){
        await fetch(pathName.replace('.js','.html'))
            .then( response => response.text())
        return await(await fetch(pathName.replace('.js','.html'))).text();
    }
    constructor(){
        super();
        
        this.attachShadow({mode: 'open'});
        Promise.resolve(myButton.component()).then(html=>{
            this.shadowRoot.innerHTML=html;
            console.log(html);
        });
    };
}
customElements.define(name, myButton)
