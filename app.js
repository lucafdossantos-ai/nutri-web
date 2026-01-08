// (mesmo conteúdo que já tínhamos — só mudou a parte da lista)

const TABELA = {
  arroz:{kcal:130,carb:28,prot:2.7,fat:0.3},
  feijao:{kcal:77,carb:14,prot:5,fat:0.5},
  frango:{kcal:165,carb:0,prot:31,fat:3.6},
  carne:{kcal:217,carb:0,prot:26,fat:12},
  peixe:{kcal:130,carb:0,prot:22,fat:3},
  ovo:{kcal:155,carb:1.1,prot:13,fat:11},
  banana:{kcal:89,carb:23,prot:1.1,fat:0.3},
  maca:{kcal:52,carb:14,prot:0.3,fat:0.2},
  laranja:{kcal:47,carb:12,prot:0.9,fat:0.1},
  manga:{kcal:60,carb:15,prot:0.8,fat:0.4},
  uva:{kcal:69,carb:18,prot:0.7,fat:0.2},
  leite:{kcal:61,carb:5,prot:3.2,fat:3.3},
  iogurte:{kcal:59,carb:3.6,prot:10,fat:0.4},
  queijo:{kcal:402,carb:1.3,prot:25,fat:33},
  pao:{kcal:265,carb:49,prot:9,fat:3.2},
  macarrao:{kcal:131,carb:25,prot:5,fat:1.1},
  pizza:{kcal:266,carb:33,prot:11,fat:10},
  batata:{kcal:77,carb:17,prot:2,fat:0.1},
  cenoura:{kcal:41,carb:10,prot:0.9,fat:0.2},
  brocolis:{kcal:34,carb:7,prot:2.8,fat:0.4},
};

let total = Number(localStorage.getItem("total")) || 0;
let lista = JSON.parse(localStorage.getItem("lista")) || [];
let macros = JSON.parse(localStorage.getItem("macros")) || {carb:0,prot:0,fat:0};

atualizarTela();

function calcular(){/* igual ao anterior */}

// preencherAutomatico / buscarAlimento / salvar / limparDia / sugerir / desenharGrafico
// — exatamente como no arquivo anterior —

function preencherAutomatico(){
  const texto=document.getElementById("food").value.toLowerCase();
  const match=texto.match(/(\d+)\s*g/);
  if(!match)return;
  const quantidade=Number(match[1]);
  let alimento=null;
  Object.keys(TABELA).forEach(n=>{if(texto.includes(n))alimento=n;});
  if(!alimento)return;
  const d=TABELA[alimento],f=quantidade/100;
  document.getElementById("kcal").value=Math.round(d.kcal*f);
  document.getElementById("carb").value=Math.round(d.carb*f);
  document.getElementById("prot").value=Math.round(d.prot*f);
  document.getElementById("fat").value=Math.round(d.fat*f);
}

function buscarAlimento(){
  const q=document.getElementById("search").value.toLowerCase();
  const r=document.getElementById("results");
  if(!q){r.style.display="none";r.innerHTML="";return;}
  const f=Object.keys(TABELA).filter(n=>n.includes(q));
  r.innerHTML="";
  f.forEach(n=>{
    const d=document.createElement("div");
    d.innerText=n;
    d.onclick=()=>{
      document.getElementById("food").value=`100g ${n}`;
      preencherAutomatico();
      r.style.display="none";
      document.getElementById("search").value="";
    };
    r.appendChild(d);
  });
  r.style.display=f.length?"block":"none";
}

function adicionar(){
  const food=document.getElementById("food").value;
  const kcal=Number(document.getElementById("kcal").value);
  const carb=Number(document.getElementById("carb").value);
  const prot=Number(document.getElementById("prot").value);
  const fat=Number(document.getElementById("fat").value);
  if(!food||!kcal){alert("Preencha alimento e calorias.");return;}

  total+=kcal;
  lista.push({food,kcal,carb,prot,fat});
  macros.carb+=carb;macros.prot+=prot;macros.fat+=fat;

  salvar();
  atualizarTela();

  document.getElementById("food").value="";
  document.getElementById("kcal").value="";
  document.getElementById("carb").value="";
  document.getElementById("prot").value="";
  document.getElementById("fat").value="";
}

function excluir(i){
  const x=lista[i];
  total-=x.kcal;
  macros.carb-=x.carb;
  macros.prot-=x.prot;
  macros.fat-=x.fat;
  lista.splice(i,1);
  salvar(); atualizarTela();
}

function atualizarTela(){
  document.getElementById("total").innerText=total;
  const meta=Number(localStorage.getItem("meta"))||0;
  document.getElementById("restam").innerText=meta?meta-total:0;
  document.getElementById("tcarb").innerText=macros.carb;
  document.getElementById("tprot").innerText=macros.prot;
  document.getElementById("tfat").innerText=macros.fat;

  const ul=document.getElementById("lista");
  ul.innerHTML="";
  lista.forEach((item,i)=>{
    const li=document.createElement("li");
    li.className="meal-item added";
    li.innerHTML=`<span>${item.food} — ${item.kcal} kcal</span>
      <button onclick="excluir(${i})"><i data-lucide='x'></i></button>`;
    ul.appendChild(li);
  });

  if(window.lucide) lucide.createIcons();
  sugerir(); desenharGrafico();
}

function salvar(){
  localStorage.setItem("total",total);
  localStorage.setItem("lista",JSON.stringify(lista));
  localStorage.setItem("macros",JSON.stringify(macros));
}
