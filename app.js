// ===============================
// BASE DE ALIMENTOS (por 100g)
// ===============================
const TABELA = {
  // básicos
  "arroz": { kcal: 130, carb: 28, prot: 2.7, fat: 0.3 },
  "feijao": { kcal: 77, carb: 14, prot: 5, fat: 0.5 },
  "frango": { kcal: 165, carb: 0, prot: 31, fat: 3.6 },
  "carne": { kcal: 217, carb: 0, prot: 26, fat: 12 },
  "peixe": { kcal: 130, carb: 0, prot: 22, fat: 3 },
  "ovo": { kcal: 155, carb: 1.1, prot: 13, fat: 11 },

  // frutas
  "banana": { kcal: 89, carb: 23, prot: 1.1, fat: 0.3 },
  "maca": { kcal: 52, carb: 14, prot: 0.3, fat: 0.2 },
  "laranja": { kcal: 47, carb: 12, prot: 0.9, fat: 0.1 },
  "manga": { kcal: 60, carb: 15, prot: 0.8, fat: 0.4 },
  "uva": { kcal: 69, carb: 18, prot: 0.7, fat: 0.2 },

  // laticínios
  "leite": { kcal: 61, carb: 5, prot: 3.2, fat: 3.3 },
  "iogurte": { kcal: 59, carb: 3.6, prot: 10, fat: 0.4 },
  "queijo": { kcal: 402, carb: 1.3, prot: 25, fat: 33 },

  // pães e massas
  "pao": { kcal: 265, carb: 49, prot: 9, fat: 3.2 },
  "macarrao": { kcal: 131, carb: 25, prot: 5, fat: 1.1 },
  "pizza": { kcal: 266, carb: 33, prot: 11, fat: 10 },

  // doces
  "chocolate": { kcal: 546, carb: 61, prot: 4.9, fat: 31 },
  "biscoito": { kcal: 502, carb: 67, prot: 6, fat: 24 },

  // legumes
  "batata": { kcal: 77, carb: 17, prot: 2, fat: 0.1 },
  "cenoura": { kcal: 41, carb: 10, prot: 0.9, fat: 0.2 },
  "brocolis": { kcal: 34, carb: 7, prot: 2.8, fat: 0.4 },
};

// ===============================
// DADOS SALVOS
// ===============================
let total = Number(localStorage.getItem("total")) || 0;
let lista = JSON.parse(localStorage.getItem("lista")) || [];

let macros = JSON.parse(localStorage.getItem("macros")) || {
  carb: 0,
  prot: 0,
  fat: 0
};

atualizarTela();

// ===============================
// PERFIL
// ===============================
function calcular() {
  const sexo = document.getElementById("sexo").value;
  const idade = Number(document.getElementById("idade").value);
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);
  const objetivo = document.getElementById("objetivo").value;

  if (!sexo || !idade || !peso || !altura) {
    alert("Preencha todos os campos do perfil!");
    return;
  }

  let tmb;

  if (sexo === "m") {
    tmb = 10 * peso + 6.25 * altura - 5 * idade + 5;
  } else {
    tmb = 10 * peso + 6.25 * altura - 5 * idade - 161;
  }

  let meta = tmb;
  if (objetivo === "emagrecer") meta -= 400;
  if (objetivo === "ganhar") meta += 300;

  document.getElementById("resultado").innerText = Math.round(tmb);
  document.getElementById("meta").innerText = Math.round(meta);

  localStorage.setItem("tmb", tmb);
  localStorage.setItem("meta", meta);

  sugerir();
  desenharGrafico();
}

// ===============================
// PREENCHER AUTOMATICO (100g arroz…)
// ===============================
function preencherAutomatico() {
  const texto = document.getElementById("food").value.toLowerCase();

  const match = texto.match(/(\\d+)\\s*g/);
  if (!match) return;

  const quantidade = Number(match[1]);

  let alimento = null;

  Object.keys(TABELA).forEach(nome => {
    if (texto.includes(nome)) alimento = nome;
  });

  if (!alimento) return;

  const dados = TABELA[alimento];
  const fator = quantidade / 100;

  document.getElementById("kcal").value = Math.round(dados.kcal * fator);
  document.getElementById("carb").value = Math.round(dados.carb * fator);
  document.getElementById("prot").value = Math.round(dados.prot * fator);
  document.getElementById("fat").value = Math.round(dados.fat * fator);
}

// ===============================
// ADICIONAR REFEIÇÃO
// ===============================
function adicionar() {
  const food = document.getElementById("food").value;
  const kcal = Number(document.getElementById("kcal").value);
  const carb = Number(document.getElementById("carb").value);
  const prot = Number(document.getElementById("prot").value);
  const fat = Number(document.getElementById("fat").value);

  if (!food || !kcal) {
    alert("Preencha alimento e calorias.");
    return;
  }

  total += kcal;

  lista.push({ food, kcal, carb, prot, fat });

  macros.carb += carb;
  macros.prot += prot;
  macros.fat += fat;

  salvar();
  atualizarTela();
}

// ===============================
// ATUALIZAR INTERFACE
// ===============================
function atualizarTela() {
  document.getElementById("total").innerText = total;

  const meta = Number(localStorage.getItem("meta")) || 0;
  document.getElementById("restam").innerText = meta ? meta - total : 0;

  document.getElementById("tcarb").innerText = macros.carb;
  document.getElementById("tprot").innerText = macros.prot;
  document.getElementById("tfat").innerText = macros.fat;

  const ul = document.getElementById("lista");
  ul.innerHTML = "";

  lista.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.food} — ${item.kcal} kcal`;
    ul.appendChild(li);
  });

  sugerir();
  desenharGrafico();
}

// ===============================
// SALVAR
// ===============================
function salvar() {
  localStorage.setItem("total", total);
  localStorage.setItem("lista", JSON.stringify(lista));
  localStorage.setItem("macros", JSON.stringify(macros));
}

// ===============================
// LIMPAR
// ===============================
function limparDia() {
  total = 0;
  lista = [];
  macros = { carb: 0, prot: 0, fat: 0 };

  salvar();
  atualizarTela();
}

// ===============================
// SUGESTÕES
// ===============================
function sugerir() {
  const restam = Number(document.getElementById("restam").innerText);
  let texto = "";

  if (restam > 400) texto = "Ainda falta bastante — dá pra comer bem 😊";
  else if (restam > 150) texto = "Falta pouco — algo leve resolve.";
  else if (restam > 0) texto = "Quase lá — cuidado pra não passar.";
  else if (restam < -200) texto = "Passou da meta — pega leve no próximo!";
  else texto = "Meta atingida — perfeito 👏";

  document.getElementById("sugestoes").innerText = texto;
}

// ===============================
// GRÁFICO
// ===============================
function desenharGrafico() {
  const canvas = document.getElementById("grafico");
  const ctx = canvas.getContext("2d");

  const meta = Number(localStorage.getItem("meta")) || 0;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#1f2937";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#2563eb";
  const h = (total / (meta || 1)) * canvas.height;
  ctx.fillRect(20, canvas.height - h, 60, h);
}
