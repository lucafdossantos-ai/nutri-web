// ===== BANCO GRANDE DE ALIMENTOS (por 100g / ml) =====
const banco = {

  // ================= ALIMENTOS =================
  "Arroz Branco":{cat:"Alimentos",kcal:130,carb:28,prot:2.7,fat:0.3},
  "Arroz Integral":{cat:"Alimentos",kcal:123,carb:26,prot:2.6,fat:1},
  "Feijão Carioca":{cat:"Alimentos",kcal:77,carb:14,prot:5,fat:0.5},
  "Feijão Preto":{cat:"Alimentos",kcal:76,carb:14,prot:4.8,fat:0.5},
  "Lentilha":{cat:"Alimentos",kcal:116,carb:20,prot:9,fat:0.4},
  "Grão-de-bico":{cat:"Alimentos",kcal:164,carb:27,prot:9,fat:2.6},
  "Macarrão":{cat:"Alimentos",kcal:131,carb:25,prot:5,fat:1.1},
  "Macarrão Integral":{cat:"Alimentos",kcal:124,carb:26,prot:6,fat:1},
  "Batata":{cat:"Alimentos",kcal:77,carb:17,prot:2,fat:0.1},
  "Batata-doce":{cat:"Alimentos",kcal:86,carb:20,prot:1.6,fat:0.1},
  "Pão Francês":{cat:"Alimentos",kcal:265,carb:49,prot:9,fat:3.2},
  "Pão Integral":{cat:"Alimentos",kcal:247,carb:41,prot:13,fat:4.2},
  "Aveia":{cat:"Alimentos",kcal:389,carb:66,prot:17,fat:7},

  // ================= PROTEÍNAS =================
  "Frango Grelhado":{cat:"Alimentos",kcal:165,carb:0,prot:31,fat:3.6},
  "Carne Bovina":{cat:"Alimentos",kcal:250,carb:0,prot:26,fat:15},
  "Carne Suína":{cat:"Alimentos",kcal:242,carb:0,prot:27,fat:14},
  "Peixe":{cat:"Alimentos",kcal:206,carb:0,prot:22,fat:12},
  "Atum":{cat:"Alimentos",kcal:132,carb:0,prot:29,fat:1},
  "Ovo":{cat:"Alimentos",kcal:155,carb:1.1,prot:13,fat:11},

  // ================= FRUTAS =================
  "Banana":{cat:"Alimentos",kcal:89,carb:23,prot:1.1,fat:0.3},
  "Maçã":{cat:"Alimentos",kcal:52,carb:14,prot:0.3,fat:0.2},
  "Laranja":{cat:"Alimentos",kcal:47,carb:12,prot:0.9,fat:0.1},
  "Manga":{cat:"Alimentos",kcal:60,carb:15,prot:0.8,fat:0.4},
  "Mamão":{cat:"Alimentos",kcal:43,carb:11,prot:0.5,fat:0.3},
  "Abacate":{cat:"Alimentos",kcal:160,carb:9,prot:2,fat:15},

  // ================= LEGUMES =================
  "Brócolis":{cat:"Alimentos",kcal:34,carb:7,prot:2.8,fat:0.4},
  "Cenoura":{cat:"Alimentos",kcal:41,carb:10,prot:0.9,fat:0.2},
  "Tomate":{cat:"Alimentos",kcal:18,carb:3.9,prot:0.9,fat:0.2},
  "Alface":{cat:"Alimentos",kcal:15,carb:2.9,prot:1.4,fat:0.2},

  // ================= BEBIDAS =================
  "Refrigerante":{cat:"Bebidas",kcal:42,carb:11,prot:0,fat:0},
  "Suco de Laranja":{cat:"Bebidas",kcal:45,carb:10,prot:0.7,fat:0.2},
  "Suco de Uva":{cat:"Bebidas",kcal:60,carb:14,prot:0.3,fat:0.1},
  "Leite Integral":{cat:"Bebidas",kcal:61,carb:5,prot:3.2,fat:3.3},
  "Leite Desnatado":{cat:"Bebidas",kcal:34,carb:5,prot:3.4,fat:0.1},

  // ================= BEBIDAS ZERO =================
  "Refrigerante Zero":{cat:"Bebidas Zero",kcal:0,carb:0,prot:0,fat:0},
  "Chá Sem Açúcar":{cat:"Bebidas Zero",kcal:0,carb:0,prot:0,fat:0},
  "Café Sem Açúcar":{cat:"Bebidas Zero",kcal:0,carb:0,prot:0,fat:0},

  // ================= ALCOÓLICAS =================
  "Cerveja":{cat:"Bebidas",kcal:43,carb:3.6,prot:0.5,fat:0},
  "Cerveja 0.0":{cat:"Bebidas Zero",kcal:14,carb:3,prot:0.2,fat:0},
  "Vinho Tinto":{cat:"Bebidas",kcal:85,carb:2.6,prot:0.1,fat:0},
  "Vinho Branco":{cat:"Bebidas",kcal:82,carb:2.6,prot:0.1,fat:0},

  // ================= SUPLEMENTOS =================
  "Whey Protein":{cat:"Suplementos",kcal:400,carb:8,prot:80,fat:6},
  "Whey Isolado":{cat:"Suplementos",kcal:360,carb:3,prot:85,fat:2},
  "Creatina":{cat:"Suplementos",kcal:0,carb:0,prot:0,fat:0},
  "BCAA":{cat:"Suplementos",kcal:240,carb:0,prot:60,fat:0},
  "Hipercalórico":{cat:"Suplementos",kcal:380,carb:70,prot:20,fat:6}
};

// ===== ESTADO =====
let user=null;
let selecionado=null;
let total={kcal:0,carb:0,prot:0,fat:0};
let metaDiaria=0;

// ===== LOGIN =====
function login(){
  if(!username.value) return alert("Digite seu nome");
  user=username.value;
  localStorage.setItem("nutri_user",user);
  userLabel.textContent=user;
  go("perfil");
}

// ===== NAVEGAÇÃO =====
function go(id){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll("nav button").forEach(b=>b.classList.remove("active"));
  document.getElementById("btn-"+id).classList.add("active");
}

// ===== TMB =====
function calcularTMB(){
  const s=sexo.value,i=+idade.value,p=+peso.value,a=+altura.value,o=objetivo.value;
  let tmb=s==="m"
    ? 88.36+13.4*p+4.8*a-5.7*i
    : 447.6+9.2*p+3.1*a-4.3*i;
  metaDiaria=tmb+(o==="emagrecer"?-400:o==="ganhar"?400:0);
  tmb.textContent=Math.round(tmb);
  meta.textContent=Math.round(metaDiaria);
  atualizarRestante();
}

// ===== AUTOCOMPLETE =====
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

// ===== FILTRO CATEGORIA =====
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

// ===== ADICIONAR =====
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

  const li=document.createElement("li");
  li.textContent=`${g}g/ml ${selecionado}`;
  lista.appendChild(li);
}

// ===== RESTANTE =====
function atualizarRestante(){
  restante.textContent=metaDiaria
    ? Math.round(metaDiaria-total.kcal)
    : "—";
}

// ===== AUTO LOGIN =====
const u=localStorage.getItem("nutri_user");
if(u){user=u;userLabel.textContent=user;go("perfil");}
