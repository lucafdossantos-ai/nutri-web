const alimentos = {
  arroz:{kcal:130,carb:28,prot:2.7,fat:0.3},
  feijao:{kcal:77,carb:14,prot:5,fat:0.5},
  frango:{kcal:165,carb:0,prot:31,fat:3.6},
  carne:{kcal:250,carb:0,prot:26,fat:15},
  ovo:{kcal:155,carb:1.1,prot:13,fat:11},
  banana:{kcal:89,carb:23,prot:1.1,fat:0.3}
};

let user=null;
let metaDiaria=0;
let total={kcal:0,carb:0,prot:0,fat:0};
let selecionado=null;

// LOGIN
function login(){
  if(!username.value) return alert("Digite seu nome");
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

// TMB (CORRIGIDO)
function calcularTMB(){
  const s=sexo.value;
  const i=+idade.value;
  const p=+peso.value;
  const a=+altura.value;
  const o=objetivo.value;

  let tmbVal = s==="m"
    ? 88.36 + (13.4*p) + (4.8*a) - (5.7*i)
    : 447.6 + (9.2*p) + (3.1*a) - (4.3*i);

  metaDiaria = tmbVal + (o==="emagrecer"?-400:o==="ganhar"?400:0);

  tmb.textContent=Math.round(tmbVal);
  meta.textContent=Math.round(metaDiaria);
  atualizarRestante();
}

// AUTOCOMPLETE
function autocomplete(){
  auto.innerHTML="";
  const termo=search.value.toLowerCase();
  if(!termo) return;
  Object.keys(alimentos)
    .filter(n=>n.includes(termo))
    .forEach(n=>{
      const d=document.createElement("div");
      d.textContent=n;
      d.onclick=()=>{selecionado=n;search.value=n;auto.innerHTML="";}
      auto.appendChild(d);
    });
}

// ADICIONAR
function adicionar(){
  if(!selecionado) return alert("Selecione um alimento");
  const g=+gramas.value;
  const a=alimentos[selecionado];
  const f=g/100;

  total.kcal+=a.kcal*f;
  total.carb+=a.carb*f;
  total.prot+=a.prot*f;
  total.fat+=a.fat*f;

  totalKcal.textContent=Math.round(total.kcal);
  totalCarb.textContent=total.carb.toFixed(1);
  totalProt.textContent=total.prot.toFixed(1);
  totalFat.textContent=total.fat.toFixed(1);

  atualizarRestante();

  const li=document.createElement("li");
  li.textContent=`${g}g ${selecionado} — ${Math.round(a.kcal*f)} kcal`;
  lista.appendChild(li);
}

// RESTANTE
function atualizarRestante(){
  restante.textContent=metaDiaria
    ? Math.round(metaDiaria-total.kcal)
    : "—";
}
