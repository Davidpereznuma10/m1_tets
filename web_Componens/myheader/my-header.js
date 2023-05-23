let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js','');

export default class myHeader extends HTMLElement{
    static async component(){
        return await(await fetch(pathName.replace('.js','.html'))).text();}
        constructor(){
            super();
            this.attachShadow({mode:'open'});
            } ;
        handleEvent(e){

            (e.type==='click'? this.evento() : '')
            e.preventDefault();
        };
        evento(e) {
            const new_recruit = this.shadowRoot.querySelector('#new_Recruit');
            const search = this.shadowRoot.querySelector('#search');
            new_recruit.addEventListener('click', (e) => {
              console.log('New');
            });
            search.addEventListener('click', (e) => {
              console.log('find it');
            });
          }
        connectedCallback(){
            Promise.resolve(myHeader.component()).then(html=>{
                this.shadowRoot.innerHTML=html;
                const new_recruit = this.shadowRoot.querySelector('#new_Recruit');
                const search = this.shadowRoot.querySelector('#search');
                new_recruit.addEventListener('click', this);
                search.addEventListener('click',this);
            })
        };
}
customElements.define(name, myHeader)


