const alimentos = {
  "arroz":   { kcal:130, carb:28, prot:2.7, fat:0.3 },
  "frango":  { kcal:165, carb:0,  prot:31,  fat:3.6 },
  "banana":  { kcal:89,  carb:23, prot:1.1, fat:0.3 }
};

let total = 0;

function calcular(){
  let s = document.getElementById("sexo").value.toLowerCase();
  let i = +document.getElementById("idade").value;
  let p = +document.getElementById("peso").value;
  let a = +document.getElementById("altura").value;

  let tmb = s==="f"
    ? 447.6 + (9.2*p) + (3.1*a) - (4.3*i)
    : 88.36 + (13.4*p) + (4.8*a) - (5.7*i);

  document.getElementById("resultado").innerText = Math.round(tmb);

  let objetivo = document.getElementById("objetivo").value;
  let meta = tmb;

  if(objetivo==="emagrecer") meta -= 400;
  if(objetivo==="ganhar") meta += 300;

  document.getElementById("meta").innerText = Math.round(meta);
}

function buscarAlimento(){
  let txt = document.getElementById("search").value.toLowerCase();
  let box = document.getElementById("results");

  box.innerHTML = "";
  if(!txt) return;

  Object.keys(alimentos).forEach(nome=>{
    if(nome.includes(txt)){
      let d = document.createElement("div");
      d.innerText = nome;
      d.onclick = ()=>{
        document.getElementById("food").value = nome;
        preencherAutomatico();
        box.innerHTML = "";
      }
      box.appendChild(d);
    }
  });
}

function preencherAutomatico(){
  let f = document.getElementById("food").value.toLowerCase();
  if(!alimentos[f]) return;

  document.getElementById("kcal").value = alimentos[f].kcal;
  document.getElementById("carb").value = alimentos[f].carb;
  document.getElementById("prot").value = alimentos[f].prot;
  document.getElementById("fat").value  = alimentos[f].fat;
}

function adicionar(){
  let kcal = +document.getElementById("kcal").value;
  if(!kcal) return;

  total += kcal;
  document.getElementById("total").innerText = total;

  let li = document.createElement("li");
  li.className = "pulse";
  li.innerHTML = `
    ${document.getElementById("food").value} — ${kcal} kcal
    <button onclick="this.parentNode.remove()">x</button>
  `;

  document.getElementById("lista").appendChild(li);
}

function limparDia(){
  total = 0;
  document.getElementById("total").innerText = 0;
  document.getElementById("lista").innerHTML = "";
}
