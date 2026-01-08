const tabela = {
 arroz: { kcal:130, carb:28, prot:2.7, fat:0.3 },
 frango: { kcal:165, carb:0, prot:31, fat:3.6 },
 banana:{ kcal:96, carb:25, prot:1.3, fat:0.3 }
};

let total = 0;
let meta = 0;

function buscarAlimento(){
 const v = search.value.toLowerCase();
 results.innerHTML = "";
 Object.keys(tabela)
 .filter(a=>a.includes(v))
 .forEach(a=>{
   const d = document.createElement("div");
   d.textContent = a;
   d.onclick = ()=>{ food.value=a; preencherAutomatico(); results.innerHTML=""; }
   results.appendChild(d);
 });
}

function preencherAutomatico(){
 const a = tabela[food.value.toLowerCase()];
 if(!a) return;
 kcal.value = a.kcal;
 carb.value = a.carb;
 prot.value = a.prot;
 fat.value = a.fat;
}

function adicionar(){
 const k = Number(kcal.value);
 if(!k) return alert("Preencha os dados");

 total += k;
 document.getElementById("total").innerText = total;
 document.getElementById("restam").innerText = meta-total;
}

function limparDia(){
 total = 0;
 lista.innerHTML = "";
 total.innerText = 0;
 restam.innerText = meta;
}

function calcularTMB(){
 const p = +peso.value, a = +altura.value, i = +idade.value;
 let tmb = 10*p + 6.25*a - 5*i + 5;
 document.getElementById("tmb").innerText = tmb;

 meta = tmb;
 if(objetivo.value==="emagrecer") meta-=400;
 if(objetivo.value==="ganhar") meta+=300;

 document.getElementById("meta").innerText = meta;
 document.getElementById("restam").innerText = meta-total;
}
