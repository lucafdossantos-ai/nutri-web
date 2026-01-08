// ----- carregar dados -----
let total = Number(localStorage.getItem("total")) || 0;
let lista = JSON.parse(localStorage.getItem("lista")) || [];

let macros = JSON.parse(localStorage.getItem("macros")) || {
  carb: 0,
  prot: 0,
  fat: 0
};

atualizarTela();

// ----- PERFIL -----
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

// ----- ADICIONAR REFEIÇÃO -----
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

// ----- ATUALIZAR -----
function atualizarTela() {
  document.getElementById("total").innerText = total;

  const meta = Number(localStorage.getItem("meta")) || 0;
  document.getElementById("restam").innerText = meta ? meta - total : 0;

  document.getElementById("tcarb").innerText = macros.carb;
  document.getElementById("tprot").innerText = macros.prot;
  document.getElementById("tfat").innerText = macros.fat;

  const ul = document.getElementById("lista");
  ul.innerHTML = "";

  lista.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.food} — ${item.kcal} kcal`;
    ul.appendChild(li);
  });

  sugerir();
  desenharGrafico();
}

// ----- SALVAR -----
function salvar() {
  localStorage.setItem("total", total);
  localStorage.setItem("lista", JSON.stringify(lista));
  localStorage.setItem("macros", JSON.stringify(macros));
}

// ----- LIMPAR -----
function limparDia() {
  total = 0;
  lista = [];
  macros = { carb: 0, prot: 0, fat: 0 };

  salvar();
  atualizarTela();
}

// ----- SUGESTÕES -----
function sugerir() {
  const restam = Number(document.getElementById("restam").innerText);
  let texto = "";

  if (restam > 400) texto = "Ainda falta bastante — dá pra uma boa refeição 😊";
  else if (restam > 150) texto = "Falta pouco — algo leve resolve.";
  else if (restam > 0) texto = "Vai com calma — um lanche leve.";
  else if (restam < -200) texto = "Passou da meta — pega leve no próximo!";
  else texto = "Meta atingida — perfeito 👏";

  document.getElementById("sugestoes").innerText = texto;
}

// ----- GRÁFICO -----
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
