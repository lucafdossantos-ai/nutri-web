const alimentos = {
  arroz:{cat:"carbo",kcal:130,carb:28,prot:2.7,fat:0.3},
  feijao:{cat:"carbo",kcal:77,carb:14,prot:5,fat:0.5},
  frango:{cat:"proteina",kcal:165,carb:0,prot:31,fat:3.6},
  carne:{cat:"proteina",kcal:250,carb:0,prot:26,fat:15},
  peixe:{cat:"proteina",kcal:206,carb:0,prot:22,fat:12},
  ovo:{cat:"proteina",kcal:155,carb:1.1,prot:13,fat:11},
  banana:{cat:"fruta",kcal:89,carb:23,prot:1.1,fat:0.3},
  maca:{cat:"fruta",kcal:52,carb:14,prot:0.3,fat:0.2},
  batata:{cat:"legume",kcal:77,carb:17,prot:2,fat:0.1},
  brocolis:{cat:"legume",kcal:34,carb:7,prot:2.8,fat:0.4},
  leite:{cat:"laticinio",kcal:61,carb:5,prot:3.2,fat:3.3},
  queijo:{cat:"laticinio",kcal:402,carb:1.3,prot:25,fat:33}
};

let user=null;
let selecionado=null;
let metaDiaria=0;
let total={kcal:0,carb:0,prot:0,fat:0};

function login(){
  if(!username.value) return alert("Digite seu nome");
  user=username.value;
  localStorage.setItem("nutri_user",user);
  userLabel.textContent=user;
  go("perfil");
}

function go(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll("nav button").forEach(b=>b.classList.remove("active"));
  document.getElementById("btn-"+id).classList.add("active");
}

function calcularTMB(){
  const s=sexo.value,i=+idade.value,p=+peso.value,a=+altura.value,o=objetivo.value;
  let tmb=s==="m"?88.36+13.4*p+4.8*a-5.7*i:447.6+9.2*p+3.1*a-4.3*i;
  metaDiaria=tmb+(o==="emagrecer"?-400:o==="ganhar"?400:0);
  tmb.textContent=Math.round(tmb);
  meta.textContent=Math.round(metaDiaria);
  atualizarRestante();
}

function autocomplete(){
  const termo=search.value.toLowerCase();
  auto.innerHTML="";
  if(!termo) return;

  Object.entries(alimentos)
  .filter(([n,a])=>n.includes(termo))
  .forEach(([n])=>{
    const d=document.createElement("div");
    d.textContent=n;
    d.onclick=()=>{selecionado=n;search.value=n;auto.innerHTML="";}
    auto.appendChild(d);
  });
}

function filtrarCategoria(){
  auto.innerHTML="";
  const c=categoria.value;
  Object.entries(alimentos)
  .filter(([_,a])=>c==="todos"||a.cat===c)
  .forEach(([n])=>{
    const d=document.createElement("div");
    d.textContent=n;
    d.onclick=()=>{selecionado=n;search.value=n;auto.innerHTML="";}
    auto.appendChild(d);
  });
}

function adicionar(){
  if(!selecionado) return alert("Selecione um alimento");
  const g=+gramas.value;
  const a=alimentos[selecionado];
  const f=g/100;

  total.kcal+=a.kcal*f;
  total.carb+=a.carb*f;
  total.prot+=a.prot*f;
  total.fat+=a.fat*f;

  atualizar();
  desenharGrafico();
  salvarDia();

  const li=document.createElement("li");
  li.textContent=`${g}g ${selecionado} — ${Math.round(a.kcal*f)} kcal`;
  lista.appendChild(li);
}

function atualizar(){
  totalKcal.textContent=Math.round(total.kcal);
  totalCarb.textContent=total.carb.toFixed(1);
  totalProt.textContent=total.prot.toFixed(1);
  totalFat.textContent=total.fat.toFixed(1);
  atualizarRestante();
}

function atualizarRestante(){
  restante.textContent=metaDiaria?Math.round(metaDiaria-total.kcal):"—";
}

function desenharGrafico(){
  const ctx=grafico.getContext("2d");
  ctx.clearRect(0,0,200,200);
  const soma=total.carb+total.prot+total.fat||1;
  let ang=0;
  [["#38bdf8",total.carb],["#22c55e",total.prot],["#facc15",total.fat]]
  .forEach(([c,v])=>{
    const a=(v/soma)*Math.PI*2;
    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.arc(100,100,80,ang,ang+a);
    ctx.fillStyle=c;
    ctx.fill();
    ang+=a;
  });
}

function salvarDia(){
  if(!user) return;
  const hoje=new Date().toISOString().slice(0,10);
  localStorage.setItem(`nutri_${user}_${hoje}`,JSON.stringify(total));
}

function limpar(){
  total={kcal:0,carb:0,prot:0,fat:0};
  lista.innerHTML="";
  atualizar();
  desenharGrafico();
  salvarDia();
}

function toggleTheme(){
  document.body.classList.toggle("light");
}

// auto login
const u=localStorage.getItem("nutri_user");
if(u){user=u;userLabel.textContent=user;go("perfil");}
