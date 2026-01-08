
const banco = {

  // ================= ALIMENTOS =================
  "Arroz Branco":{cat:"Alimentos",kcal:130,carb:28,prot:2.7,fat:0.3},
  "Arroz Integral":{cat:"Alimentos",kcal:123,carb:26,prot:2.6,fat:1},
  "Arroz Parboilizado":{cat:"Alimentos",kcal:128,carb:27,prot:2.9,fat:0.4},
  "Arroz Japonês":{cat:"Alimentos",kcal:150,carb:33,prot:2.5,fat:0.4},
  "Feijão Carioca":{cat:"Alimentos",kcal:77,carb:14,prot:5,fat:0.5},
  "Feijão Preto":{cat:"Alimentos",kcal:76,carb:14,prot:4.8,fat:0.5},
  "Lentilha":{cat:"Alimentos",kcal:116,carb:20,prot:9,fat:0.4},
  "Grão-de-bico":{cat:"Alimentos",kcal:164,carb:27,prot:9,fat:2.6},
  "Quinoa":{cat:"Alimentos",kcal:120,carb:21,prot:4.4,fat:1.9},
  "Cuscuz":{cat:"Alimentos",kcal:112,carb:23,prot:3.8,fat:0.2},
  "Farinha de Mandioca":{cat:"Alimentos",kcal:365,carb:89,prot:1.6,fat:0.3},
  "Farinha de Milho":{cat:"Alimentos",kcal:365,carb:79,prot:8.1,fat:3.9},
  "Macarrão":{cat:"Alimentos",kcal:131,carb:25,prot:5,fat:1.1},
  "Macarrão Integral":{cat:"Alimentos",kcal:124,carb:26,prot:6,fat:1},
  "Lasanha":{cat:"Alimentos",kcal:135,carb:26,prot:5,fat:1.3},
  "Pão Francês":{cat:"Alimentos",kcal:265,carb:49,prot:9,fat:3.2},
  "Pão Integral":{cat:"Alimentos",kcal:247,carb:41,prot:13,fat:4.2},
  "Pão de Forma":{cat:"Alimentos",kcal:266,carb:50,prot:8.9,fat:3.3},
  "Tapioca":{cat:"Alimentos",kcal:330,carb:82,prot:0,fat:0},

  // ================= PROTEÍNAS =================
  "Peito de Frango":{cat:"Alimentos",kcal:165,carb:0,prot:31,fat:3.6},
  "Coxa de Frango":{cat:"Alimentos",kcal:209,carb:0,prot:26,fat:10.9},
  "Patinho":{cat:"Alimentos",kcal:219,carb:0,prot:27,fat:10},
  "Acém":{cat:"Alimentos",kcal:250,carb:0,prot:26,fat:15},
  "Alcatra":{cat:"Alimentos",kcal:240,carb:0,prot:26,fat:14},
  "Carne Moída":{cat:"Alimentos",kcal:250,carb:0,prot:26,fat:15},
  "Linguiça":{cat:"Alimentos",kcal:301,carb:2.2,prot:14,fat:26},
  "Salsicha":{cat:"Alimentos",kcal:301,carb:2.6,prot:12,fat:27},
  "Presunto":{cat:"Alimentos",kcal:145,carb:1.5,prot:21,fat:6},
  "Ovo":{cat:"Alimentos",kcal:155,carb:1.1,prot:13,fat:11},
  "Queijo Mussarela":{cat:"Alimentos",kcal:280,carb:3.1,prot:28,fat:17},
  "Queijo Branco":{cat:"Alimentos",kcal:264,carb:3,prot:17,fat:20},
  "Iogurte Natural":{cat:"Alimentos",kcal:59,carb:3.6,prot:10,fat:0.4},
  "Iogurte Grego":{cat:"Alimentos",kcal:97,carb:3.9,prot:9,fat:5},

  // ================= LEGUMES =================
  "Alface":{cat:"Alimentos",kcal:15,carb:2.9,prot:1.4,fat:0.2},
  "Tomate":{cat:"Alimentos",kcal:18,carb:3.9,prot:0.9,fat:0.2},
  "Cenoura":{cat:"Alimentos",kcal:41,carb:10,prot:0.9,fat:0.2},
  "Beterraba":{cat:"Alimentos",kcal:43,carb:10,prot:1.6,fat:0.2},
  "Abobrinha":{cat:"Alimentos",kcal:17,carb:3.1,prot:1.2,fat:0.3},
  "Berinjela":{cat:"Alimentos",kcal:25,carb:6,prot:1,fat:0.2},
  "Couve":{cat:"Alimentos",kcal:49,carb:9,prot:4.3,fat:0.9},
  "Espinafre":{cat:"Alimentos",kcal:23,carb:3.6,prot:2.9,fat:0.4},
  "Repolho":{cat:"Alimentos",kcal:25,carb:6,prot:1.3,fat:0.1},
  "Chuchu":{cat:"Alimentos",kcal:19,carb:4.5,prot:0.8,fat:0.1},

  // ================= FRUTAS =================
  "Banana":{cat:"Alimentos",kcal:89,carb:23,prot:1.1,fat:0.3},
  "Maçã":{cat:"Alimentos",kcal:52,carb:14,prot:0.3,fat:0.2},
  "Pera":{cat:"Alimentos",kcal:57,carb:15,prot:0.4,fat:0.1},
  "Uva":{cat:"Alimentos",kcal:69,carb:18,prot:0.7,fat:0.2},
  "Abacaxi":{cat:"Alimentos",kcal:50,carb:13,prot:0.5,fat:0.1},
  "Melancia":{cat:"Alimentos",kcal:30,carb:8,prot:0.6,fat:0.2},
  "Morango":{cat:"Alimentos",kcal:32,carb:7.7,prot:0.7,fat:0.3},
  "Kiwi":{cat:"Alimentos",kcal:61,carb:15,prot:1.1,fat:0.5},
  "Manga":{cat:"Alimentos",kcal:60,carb:15,prot:0.8,fat:0.4},
  "Mamão":{cat:"Alimentos",kcal:43,carb:11,prot:0.5,fat:0.3},

  // ================= BEBIDAS =================
  "Refrigerante":{cat:"Bebidas",kcal:42,carb:11,prot:0,fat:0},
  "Suco de Laranja":{cat:"Bebidas",kcal:45,carb:10,prot:0.7,fat:0.2},
  "Cerveja":{cat:"Bebidas",kcal:43,carb:3.6,prot:0.5,fat:0},
  "Vinho":{cat:"Bebidas",kcal:85,carb:2.6,prot:0.1,fat:0},

  // ================= BEBIDAS ZERO =================
  "Refrigerante Zero":{cat:"Bebidas Zero",kcal:0,carb:0,prot:0,fat:0},
  "Cerveja 0.0":{cat:"Bebidas Zero",kcal:14,carb:3,prot:0.2,fat:0},

  // ================= SUPLEMENTOS =================
  "Whey Protein":{cat:"Suplementos",kcal:400,carb:8,prot:80,fat:6},
  "Whey Concentrado":{cat:"Suplementos",kcal:412,carb:10,prot:78,fat:7},
  "Whey Isolado":{cat:"Suplementos",kcal:360,carb:3,prot:85,fat:2},
  "Whey Hidrolisado":{cat:"Suplementos",kcal:350,carb:2,prot:88,fat:1},
  "Caseína":{cat:"Suplementos",kcal:360,carb:4,prot:80,fat:2},
  "Albumina":{cat:"Suplementos",kcal:370,carb:6,prot:82,fat:2},
  "BCAA":{cat:"Suplementos",kcal:240,carb:0,prot:60,fat:0},
  "Glutamina":{cat:"Suplementos",kcal:400,carb:0,prot:100,fat:0},
  "Creatina":{cat:"Suplementos",kcal:0,carb:0,prot:0,fat:0},
  "Pré-treino":{cat:"Suplementos",kcal:120,carb:20,prot:5,fat:1},
  "Pós-treino":{cat:"Suplementos",kcal:300,carb:50,prot:25,fat:2},
  "Hipercalórico":{cat:"Suplementos",kcal:380,carb:70,prot:20,fat:6},
  "Proteína Vegetal":{cat:"Suplementos",kcal:390,carb:12,prot:70,fat:6},
  "Multivitamínico":{cat:"Suplementos",kcal:0,carb:0,prot:0,fat:0},
  "Ômega 3":{cat:"Suplementos",kcal:900,carb:0,prot:0,fat:100},
  "Cafeína":{cat:"Suplementos",kcal:0,carb:0,prot:0,fat:0}
};

// ⚠️ O restante do código (login, TMB, gráfico circular, histórico, limpar dia, autocomplete)
// permanece EXATAMENTE IGUAL ao que você já está usando.
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

function calcularTMB(){
  const s = sexo.value;
  const i = +idade.value;
  const p = +peso.value;
  const a = +altura.value;
  const o = objetivo.value;

  // Mifflin-St Jeor (mais precisa)
  let tmbVal = s === "m"
    ? (10 * p) + (6.25 * a) - (5 * i) + 5
    : (10 * p) + (6.25 * a) - (5 * i) - 161;

  // ajuste por objetivo
  metaDiaria = tmbVal + (
    o === "emagrecer" ? -400 :
    o === "ganhar"    ?  400 : 0
  );

  tmb.textContent = Math.round(tmbVal);
  meta.textContent = Math.round(metaDiaria);
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
// ===== TEMA =====
function toggleTheme(){
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("nutri_theme", isLight ? "light" : "dark");
  themeBtn.textContent = isLight ? "☀️" : "🌙";
}

// carregar tema
if(localStorage.getItem("nutri_theme")==="light"){
  document.body.classList.add("light");
  themeBtn.textContent="☀️";
}

// ===== TODO O RESTO DO JS PERMANECE IGUAL =====
// banco de alimentos, login, TMB, gráfico circular,
// autocomplete, histórico, limpar dia etc.
