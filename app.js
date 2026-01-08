// ===== BANCO DE ALIMENTOS (por 100g/ml) =====
const alimentos = {
  // MASSAS
  macarrao:{cat:"massa",kcal:131,carb:25,prot:5,fat:1.1},
  lasanha:{cat:"massa",kcal:135,carb:15,prot:7,fat:5},

  // GRÃOS
  arroz:{cat:"grao",kcal:130,carb:28,prot:2.7,fat:0.3},
  arroz_integral:{cat:"grao",kcal:123,carb:26,prot:2.6,fat:1},
  aveia:{cat:"grao",kcal:389,carb:66,prot:17,fat:7},

  // PROTEÍNAS
  frango:{cat:"proteina",kcal:165,carb:0,prot:31,fat:3.6},
  carne:{cat:"proteina",kcal:250,carb:0,prot:26,fat:15},
  peixe:{cat:"proteina",kcal:206,carb:0,prot:22,fat:12},
  ovo:{cat:"proteina",kcal:155,carb:1.1,prot:13,fat:11},

  // FRUTAS
  banana:{cat:"fruta",kcal:89,carb:23,prot:1.1,fat:0.3},
  maca:{cat:"fruta",kcal:52,carb:14,prot:0.3,fat:0.2},
  manga:{cat:"fruta",kcal:60,carb:15,prot:0.8,fat:0.4},

  // LEGUMES
  batata:{cat:"legume",kcal:77,carb:17,prot:2,fat:0.1},
  brocolis:{cat:"legume",kcal:34,carb:7,prot:2.8,fat:0.4},

  // BEBIDAS
  refrigerante:{cat:"bebida",kcal:42,carb:11,prot:0,fat:0},
  suco_laranja:{cat:"bebida",kcal:45,carb:10,prot:0.7,fat:0.2},

  // BEBIDAS ZERO
  refrigerante_zero:{cat:"zero",kcal:0,carb:0,prot:0,fat:0},
  cha_sem_acucar:{cat:"zero",kcal:0,carb:0,prot:0,fat:0},

  // LATICÍNIOS
  leite:{cat:"laticinio",kcal:61,carb:5,prot:3.2,fat:3.3},
  queijo:{cat:"laticinio",kcal:402,carb:1.3,prot:25,fat:33}
};

let user = null;
let selecionado = null;
let total = {kcal:0,carb:0,prot:0,fat:0};

// LOGIN
function login(){
  if(!username.value) return alert("Digite seu nome");
  user=username.value;
  localStorage.setItem("nutri_user",user);
  go("refeicoes");
}

// NAV
function go(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll("nav button").forEach(b=>b.classList.remove("active"));
  document.getElementById("btn-"+id).classList.add("active");
  if(id==="historico") carregarCalendario();
}

// AUTOCOMPLETE
function autocomplete(){
  auto.innerHTML="";
  const termo=search.value.toLowerCase();
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

// FILTRO CATEGORIA
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
  desenharGrafico();
  salvarDia();

  const li=document.createElement("li");
  li.textContent=`${g}g ${selecionado} — ${Math.round(a.kcal*f)} kcal`;
  lista.appendChild(li);
}

// GRÁFICO DONUT MODERNO
function desenharGrafico(){
  const ctx=grafico.getContext("2d");
  ctx.clearRect(0,0,220,220);

  const soma=total.carb+total.prot+total.fat||1;
  let ang=-Math.PI/2;

  const dados=[
    ["#38bdf8",total.carb],
    ["#22c55e",total.prot],
    ["#facc15",total.fat]
  ];

  dados.forEach(([cor,val])=>{
    const a=(val/soma)*Math.PI*2;
    ctx.beginPath();
    ctx.arc(110,110,90,ang,ang+a);
    ctx.strokeStyle=cor;
    ctx.lineWidth=22;
    ctx.stroke();
    ang+=a;
  });
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

    if(localStorage.getItem(key)) dia.style.background="#38bdf8";

    dia.onclick=()=>{
      const dados=JSON.parse(localStorage.getItem(key)||"null");
      if(dados){
        total=dados;
        totalKcal.textContent=Math.round(total.kcal);
        desenharGrafico();
        histInfo.textContent=`🔥 ${Math.round(dados.kcal)} kcal`;
      }
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

// TEMA
function toggleTheme(){
  document.body.classList.toggle("light");
}

// AUTO LOGIN
const u=localStorage.getItem("nutri_user");
if(u){user=u;go("refeicoes");}
