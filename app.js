const tabela = {
 "arroz": { kcal: 130, carb: 28, prot: 2.7, fat: 0.3 },
 "frango": { kcal: 165, carb: 0, prot: 31, fat: 3.6 },
 "banana": { kcal: 96, carb: 25, prot: 1.3, fat: 0.3 }
};

let total = 0;

function buscarAlimento(){
 let v = document.getElementById("search").value.toLowerCase();
 let box = document.getElementById("results");
 box.innerHTML = "";

 Object.keys(tabela)
 .filter(a=>a.includes(v))
 .forEach(a=>{
   let div = document.createElement("div");
   div.innerText = a;
   div.onclick = ()=>{ document.getElementById("food").value = a; preencherAutomatico(); box.innerHTML=""; }
   box.appendChild(div);
 });
}

function preencherAutomatico(){
 let nome = document.getElementById("food").value.toLowerCase();
 if(!tabela[nome]) return;

 document.getElementById("kcal").value = tabela[nome].kcal;
 document.getElementById("carb").value = tabela[nome].carb;
 document.getElementById("prot").value = tabela[nome].prot;
 document.getElementById("fat").value = tabela[nome].fat;
}

function adicionar(){
 let kcal = Number(document.getElementById("kcal").value);
 if(!kcal) return alert("Preencha os campos");

 total += kcal;
 document.getElementById("total").innerText = total;
}

function calcularTMB(){
 let p = Number(document.getElementById("peso").value);
 let a = Number(document.getElementById("altura").value);
 let i = Number(document.getElementById("idade").value);

 let tmb = 10*p + 6.25*a - 5*i + 5;
 document.getElementById("tmb").innerText = tmb;

 let objetivo = document.getElementById("objetivo").value;
 let meta = tmb;

 if(objetivo === "emagrecer") meta -= 400;
 if(objetivo === "ganhar") meta += 300;

 document.getElementById("meta").innerText = meta;
 document.getElementById("restam").innerText = meta - total;
}
