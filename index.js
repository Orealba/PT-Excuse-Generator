function onLoad  () {
    var aleatorioWho= Math.floor(Math.random() * 4);
    var aleatorioWhat= Math.floor(Math.random() * 4);
    var aleatorioWhen= Math.floor(Math.random() * 5);
    return who[aleatorioWho]+" "+what[aleatorioWhat]+" "+when[aleatorioWhen];  
}

let who = ['The panda','My little sister','His turtle','My bird'];
let what = ['eat my science project','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
const excusep = document.querySelector('#excuse');
excusep.innerHTML=onLoad();