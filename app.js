// --- carregar dados salvos ---
let total = Number(localStorage.getItem("total")) || 0;
let lista = JSON.parse(localStorage.getItem("lista")) || [];

atualizarTela();

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
}

function adicionar() {
  const food = document.getElementById("food").value;
  const kcal = Number(document.getElementById("kcal").value);

  if (!food || !kcal) {
    alert("Preencha alimento e calorias.");
    return;
  }

  total += kcal;

  lista.push({ food, kcal });

  salvar();

  atualizarTela();

  document.getElementById("food").value = "";
  document.getElementById("kcal").value = "";
}

function atualizarTela() {
  document.getElementById("total").innerText = total;

  const meta = Number(localStorage.getItem("meta")) || 0;
  document.getElementById("restam").innerText = meta ? meta - total : 0;

  const ul = document.getElementById("lista");
  ul.innerHTML = "";

  lista.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.food} — ${item.kcal} kcal`;
    ul.appendChild(li);
  });
}

function salvar() {
  localStorage.setItem("total", total);
  localStorage.setItem("lista", JSON.stringify(lista));
}

function limparDia() {
  total = 0;
  lista = [];
  salvar();
  atualizarTela();
}
