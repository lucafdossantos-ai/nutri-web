const alimentos = {
  arroz:   { kcal:130, carb:28, prot:2.7, fat:0.3 },
  frango:  { kcal:165, carb:0,  prot:31,  fat:3.6 },
  banana:  { kcal:89,  carb:23, prot:1.1, fat:0.3 },
  ovo:     { kcal:155, carb:1.1, prot:13, fat:11 },
  macarrao:{ kcal:131, carb:25, prot:5,  fat:1.1 },
  batata:  { kcal:77,  carb:17, prot:2,  fat:0.1 }
};

let total = { kcal:0, carb:0, prot:0, fat:0 };

function go(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll("nav button").forEach(b=>b.classList.remove("active"));
  document.getElementById("btn-"+id).classList.add("active");
}

function calcularTMB(){
  const sexo=sexo.value;
  const idade=+idade.value;
  const peso=+peso.value;
  const altura=+altura.value;
  const obj=objetivo.value;

  let tmb = sexo==="m"
    ? 88.36 + 13.4*peso + 4.8*altura - 5.7*idade
    : 447.6 + 9.2*peso + 3.1*altura - 4.3*idade;

  let meta=tmb;
  if(obj==="emagrecer") meta-=400;
  if(obj==="ganhar") meta+=400;

  tmbSpan.textContent=Math.round(tmb);
  meta.textContent=Math.round(meta);
}

function adicionar(){
  const nome=food.value.toLowerCase();
  const g=+gramas.value;

  if(!alimentos[nome]) return alert("Alimento não encontrado");

  const a=alimentos[nome];
  const fator=g/100;

  const kcal=a.kcal*fator;
  const carb=a.carb*fator;
  const prot=a.prot*fator;
  const fat=a.fat*fator;

  total.kcal+=kcal;
  total.carb+=carb;
  total.prot+=prot;
  total.fat+=fat;

  totalKcal.textContent=Math.round(total.kcal);
  totalCarb.textContent=total.carb.toFixed(1);
  totalProt.textContent=total.prot.toFixed(1);
  totalFat.textContent=total.fat.toFixed(1);

  const li=document.createElement("li");
  li.innerHTML=`${g}g ${nome} — ${Math.round(kcal)} kcal`;
  lista.appendChild(li);
}

function limpar(){
  total={kcal:0,carb:0,prot:0,fat:0};
  totalKcal.textContent=0;
  totalCarb.textContent=0;
  totalProt.textContent=0;
  totalFat.textContent=0;
  lista.innerHTML="";
}

function toggleTheme(){
  document.body.classList.toggle("light");
}
