const alimentos = {
  arroz:{kcal:130,carb:28,prot:2.7,fat:0.3},
  frango:{kcal:165,carb:0,prot:31,fat:3.6},
  banana:{kcal:89,carb:23,prot:1.1,fat:0.3},
  ovo:{kcal:155,carb:1.1,prot:13,fat:11},
  batata:{kcal:77,carb:17,prot:2,fat:0.1}
};

let user=null;
let total={kcal:0,carb:0,prot:0,fat:0};

function login(){
  const name=username.value.trim();
  if(!name) return alert("Digite seu nome");
  user=name;
  localStorage.setItem("user",user);
  userLabel.textContent=user;
  go("perfil");
}

function go(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll("nav button").forEach(b=>b.classList.remove("active"));
  const btn=document.getElementById("btn-"+id);
  if(btn) btn.classList.add("active");
}

function calcularTMB(){
  const sexoVal=sexo.value;
  const idadeVal=+idade.value;
  const pesoVal=+peso.value;
  const alturaVal=+altura.value;
  const obj=objetivo.value;

  let tmbVal=sexoVal==="m"
    ? 88.36+13.4*pesoVal+4.8*alturaVal-5.7*idadeVal
    : 447.6+9.2*pesoVal+3.1*alturaVal-4.3*idadeVal;

  let metaVal=tmbVal;
  if(obj==="emagrecer") metaVal-=400;
  if(obj==="ganhar") metaVal+=400;

  tmb.textContent=Math.round(tmbVal);
  meta.textContent=Math.round(metaVal);
}

function adicionar(){
  const nome=food.value.toLowerCase();
  const g=+gramas.value;
  if(!alimentos[nome]) return alert("Alimento não encontrado");

  const a=alimentos[nome];
  const f=g/100;

  total.kcal+=a.kcal*f;
  total.carb+=a.carb*f;
  total.prot+=a.prot*f;
  total.fat+=a.fat*f;

  atualizar();
  desenharGrafico();

  const li=document.createElement("li");
  li.textContent=`${g}g ${nome} — ${Math.round(a.kcal*f)} kcal`;
  lista.appendChild(li);

  salvarDia();
}

function atualizar(){
  totalKcal.textContent=Math.round(total.kcal);
  totalCarb.textContent=total.carb.toFixed(1);
  totalProt.textContent=total.prot.toFixed(1);
  totalFat.textContent=total.fat.toFixed(1);
}

function limpar(){
  total={kcal:0,carb:0,prot:0,fat:0};
  lista.innerHTML="";
  atualizar();
  desenharGrafico();
  salvarDia();
}

function desenharGrafico(){
  const c=document.getElementById("grafico");
  const ctx=c.getContext("2d");
  ctx.clearRect(0,0,200,200);

  const soma=total.carb+total.prot+total.fat || 1;
  let ang=0;

  [["#38bdf8",total.carb],["#22c55e",total.prot],["#facc15",total.fat]]
  .forEach(([cor,val])=>{
    const a=(val/soma)*Math.PI*2;
    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.arc(100,100,80,ang,ang+a);
    ctx.fillStyle=cor;
    ctx.fill();
    ang+=a;
  });
}

function salvarDia(){
  if(!user) return;
  const hoje=new Date().toISOString().slice(0,10);
  const key=`nutri_${user}_${hoje}`;
  localStorage.setItem(key,JSON.stringify(total));
}

function toggleTheme(){
  document.body.classList.toggle("light");
}

// auto-login
const u=localStorage.getItem("user");
if(u){
  user=u;
  userLabel.textContent=user;
  go("perfil");
}
