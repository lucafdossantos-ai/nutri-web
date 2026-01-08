const banco = {
  "Arroz Branco":{cat:"Alimentos",kcal:130,carb:28,prot:2.7,fat:0.3},
  "Arroz Integral":{cat:"Alimentos",kcal:123,carb:26,prot:2.6,fat:1},
  "Feijão":{cat:"Alimentos",kcal:77,carb:14,prot:5,fat:0.5},
  "Macarrão":{cat:"Alimentos",kcal:131,carb:25,prot:5,fat:1.1},
  "Frango":{cat:"Alimentos",kcal:165,carb:0,prot:31,fat:3.6},
  "Carne Bovina":{cat:"Alimentos",kcal:250,carb:0,prot:26,fat:15},
  "Ovo":{cat:"Alimentos",kcal:155,carb:1.1,prot:13,fat:11},
  "Banana":{cat:"Alimentos",kcal:89,carb:23,prot:1.1,fat:0.3},
  "Maçã":{cat:"Alimentos",kcal:52,carb:14,prot:0.3,fat:0.2},

  "Refrigerante":{cat:"Bebidas",kcal:42,carb:11,prot:0,fat:0},
  "Suco de Laranja":{cat:"Bebidas",kcal:45,carb:10,prot:0.7,fat:0.2},
  "Cerveja":{cat:"Bebidas",kcal:43,carb:3.6,prot:0.5,fat:0},
  "Vinho":{cat:"Bebidas",kcal:85,carb:2.6,prot:0.1,fat:0},

  "Refrigerante Zero":{cat:"Bebidas Zero",kcal:0,carb:0,prot:0,fat:0},
  "Cerveja 0.0":{cat:"Bebidas Zero",kcal:14,carb:3,prot:0.2,fat:0},

  "Whey Protein":{cat:"Suplementos",kcal:400,carb:8,prot:80,fat:6},
  "Creatina":{cat:"Suplementos",kcal:0,carb:0,prot:0,fat:0}
};

let user=null;
let selecionado=null;
let metaDiaria=0;
let total={kcal:0,carb:0,prot:0,fat:0};

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
  if(id==="historico") carregarCalendario();
}

// TMB (CORRIGIDO)
function calcularTMB(){
  const s=sexo.value,i=+idade.value,p=+peso.value,a=+altura.value,o=objetivo.value;
  const tmbVal = s==="m"
    ? 88.36 + 13.4*p + 4.8*a - 5.7*i
    : 447.6 + 9.2*p + 3.1*a - 4.3*i;

  metaDiaria = tmbVal + (o==="emagrecer"?-400:o==="ganhar"?400:0);

  document.getElementById("tmb").textContent=Math.round(tmbVal);
  document.getElementById("meta").textContent=Math.round(metaDiaria);
  atualizarRestante();
  desenharGrafico();
}

// AUTOCOMPLETE
function autocomplete(){
  auto.innerHTML="";
  const termo=search.value.toLowerCase();
  Object.keys(banco)
    .filter(n=>n.toLowerCase().includes(termo))
    .forEach(n=>{
      const d=document.createElement("div");
      d.textContent=n;
      d.onclick=()=>{selecionado=n;search.value=n;auto.innerHTML="";}
      auto.appendChild(d);
    });
}

// FILTRO
function filtrarCategoria(){
  auto.innerHTML="";
  const c=categoria.value;
  Object.entries(banco)
    .filter(([_,a])=>c==="Todas"||a.cat===c)
    .forEach(([n])=>{
      const d=document.createElement("div");
      d.textContent=n;
      d.onclick=()=>{selecionado=n;search.value=n;auto.innerHTML="";}
      auto.appendChild(d);
    });
}

// ADICIONAR
function adicionar(){
  if(!selecionado) return alert("Selecione um item");
  const g=+gramas.value;
  const a=banco[selecionado];
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
  desenharGrafico();
  salvarDia();

  const li=document.createElement("li");
  li.textContent=`${g}g/ml ${selecionado}`;
  lista.appendChild(li);
}

// GRÁFICO CIRCULAR (COM RESTANTE)
function desenharGrafico(){
  const ctx=grafico.getContext("2d");
  ctx.clearRect(0,0,220,220);

  if(!metaDiaria) return;

  const consumido = total.kcal;
  const restante = Math.max(metaDiaria-consumido,0);
  const totalDia = metaDiaria;

  const angConsumido = (consumido/totalDia)*Math.PI*2;

  ctx.beginPath();
  ctx.arc(110,110,80,-Math.PI/2,angConsumido-Math.PI/2);
  ctx.strokeStyle="#38bdf8";
  ctx.lineWidth=18;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(110,110,80,angConsumido-Math.PI/2,1.5*Math.PI);
  ctx.strokeStyle="#ffffff22";
  ctx.lineWidth=18;
  ctx.stroke();

  ctx.fillStyle="#fff";
  ctx.font="bold 16px system-ui";
  ctx.textAlign="center";
  ctx.fillText(`${Math.round(restante)} kcal`,110,115);
}

// RESTANTE
function atualizarRestante(){
  restante.textContent=metaDiaria
    ? Math.round(metaDiaria-total.kcal)
    : "—";
}

// LIMPAR
function limparDia(){
  total={kcal:0,carb:0,prot:0,fat:0};
  lista.innerHTML="";
  totalKcal.textContent=0;
  totalCarb.textContent=0;
  totalProt.textContent=0;
  totalFat.textContent=0;
  atualizarRestante();
  desenharGrafico();
  salvarDia();
}

// HISTÓRICO
function carregarCalendario(){
  calendar.innerHTML="";
  const hoje=new Date();
  const dias=new Date(hoje.getFullYear(),hoje.getMonth()+1,0).getDate();

  for(let d=1;d<=dias;d++){
    const dia=document.createElement("div");
    dia.textContent=d;
    const data=`${hoje.getFullYear()}-${String(hoje.getMonth()+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const key=`nutri_${user}_${data}`;
    if(localStorage.getItem(key)) dia.classList.add("active");
    dia.onclick=()=>{
      const dados=JSON.parse(localStorage.getItem(key)||"null");
      histInfo.textContent=dados
        ? `🔥 ${Math.round(dados.kcal)} kcal`
        : "Sem dados";
    };
    calendar.appendChild(dia);
  }
}

// SALVAR DIA
function salvarDia(){
  if(!user) return;
  const hoje=new Date().toISOString().slice(0,10);
  localStorage.setItem(`nutri_${user}_${hoje}`,JSON.stringify(total));
}

// AUTO LOGIN
const u=localStorage.getItem("nutri_user");
if(u){user=u;userLabel.textContent=user;go("perfil");}
