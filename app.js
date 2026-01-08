const alimentos = {
  "Arroz":{kcal:130,carb:28,prot:2.7,fat:0.3},
  "Frango":{kcal:165,carb:0,prot:31,fat:3.6},
  "Banana":{kcal:89,carb:23,prot:1.1,fat:0.3},

  "Refrigerante":{kcal:42,carb:11,prot:0,fat:0},
  "Refrigerante Zero":{kcal:0,carb:0,prot:0,fat:0},
  "Cerveja":{kcal:43,carb:3.6,prot:0.5,fat:0},
  "Cerveja 0.0":{kcal:14,carb:3,prot:0.2,fat:0},
  "Vinho":{kcal:85,carb:2.6,prot:0.1,fat:0},

  "Whey Protein":{kcal:400,carb:8,prot:80,fat:6},
  "Creatina":{kcal:0,carb:0,prot:0,fat:0},
  "BCAA":{kcal:240,carb:0,prot:60,fat:0},
  "Hipercalórico":{kcal:380,carb:70,prot:20,fat:6}
};

let user=null;
let total={kcal:0,carb:0,prot:0,fat:0};
let metaDiaria=0;
let selecionado=null;
let historico=[];

// LOGIN
function login(){
  user=username.value;
  localStorage.setItem("nutri_user",user);
  userLabel.textContent=user;
  go("perfil");
}

// NAV
function go(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll("nav button").forEach(b=>b.classList.remove("active"));
  document.getElementById("btn-"+id).classList.add("active");
}

// TMB
function calcularTMB(){
  const s=sexo.value,i=+idade.value,p=+peso.value,a=+altura.value,o=objetivo.value;
  let tmb=s==="m"?88.36+13.4*p+4.8*a-5.7*i:447.6+9.2*p+3.1*a-4.3*i;
  metaDiaria=tmb+(o==="emagrecer"?-400:o==="ganhar"?400:0);
  tmb.textContent=Math.round(tmb);
  meta.textContent=Math.round(metaDiaria);
  atualizarRestante();
}

// AUTOCOMPLETE
function autocomplete(){
  auto.innerHTML="";
  Object.keys(alimentos)
    .filter(n=>n.toLowerCase().includes(search.value.toLowerCase()))
    .forEach(n=>{
      const d=document.createElement("div");
      d.textContent=n;
      d.onclick=()=>{selecionado=n;search.value=n;auto.innerHTML="";}
      auto.appendChild(d);
    });
}

// ADICIONAR
function adicionar(){
  if(!selecionado) return;
  const g=+gramas.value;
  const a=alimentos[selecionado];
  const f=g/100;

  total.kcal+=a.kcal*f;
  total.carb+=a.carb*f;
  total.prot+=a.prot*f;
  total.fat+=a.fat*f;

  atualizarUI();
  salvarHistorico(Math.round(total.kcal));

  const li=document.createElement("li");
  li.textContent=`${g}g/ml ${selecionado}`;
  lista.appendChild(li);
}

// UI
function atualizarUI(){
  totalKcal.textContent=Math.round(total.kcal);
  totalCarb.textContent=total.carb.toFixed(1);
  totalProt.textContent=total.prot.toFixed(1);
  totalFat.textContent=total.fat.toFixed(1);
  atualizarRestante();
  atualizarMacrosPercent();
  desenharGraficoDia();
}

function atualizarRestante(){
  restante.textContent=metaDiaria?Math.round(metaDiaria-total.kcal):"—";
}

// MACROS %
function atualizarMacrosPercent(){
  const c=+metaCarb.value;
  const p=+metaProt.value;
  const f=+metaFat.value;

  barCarb.style.width=Math.min((total.carb*4)/(metaDiaria*c/100)*100,100)+"%";
  barProt.style.width=Math.min((total.prot*4)/(metaDiaria*p/100)*100,100)+"%";
  barFat.style.width=Math.min((total.fat*9)/(metaDiaria*f/100)*100,100)+"%";
}

// GRÁFICO DIÁRIO
function desenharGraficoDia(){
  const ctx=graficoDia.getContext("2d");
  ctx.clearRect(0,0,300,120);
  ctx.beginPath();
  ctx.moveTo(10,110);
  historico.forEach((v,i)=>{
    ctx.lineTo(10+i*40,110-v/10);
  });
  ctx.strokeStyle="#38bdf8";
  ctx.stroke();
}

// HISTÓRICO
function salvarHistorico(v){
  historico.push(v);
}

// AUTO LOGIN
const u=localStorage.getItem("nutri_user");
if(u){user=u;go("perfil");}
