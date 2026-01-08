const alimentos = {
  arroz: 130,
  frango: 165,
  banana: 89,
  ovo: 155,
  macarrao: 131,
  batata: 77,
  carne: 250,
  peixe: 206
};

let total = 0;

function go(id) {
  document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  document.querySelectorAll("nav button").forEach(b => b.classList.remove("active"));
  document.getElementById("btn-" + id).classList.add("active");
}

function calcularTMB() {
  const sexo = document.getElementById("sexo").value;
  const idade = +document.getElementById("idade").value;
  const peso = +document.getElementById("peso").value;
  const altura = +document.getElementById("altura").value;
  const objetivo = document.getElementById("objetivo").value;

  if (!idade || !peso || !altura) {
    alert("Preencha todos os dados");
    return;
  }

  let tmb =
    sexo === "m"
      ? 88.36 + 13.4 * peso + 4.8 * altura - 5.7 * idade
      : 447.6 + 9.2 * peso + 3.1 * altura - 4.3 * idade;

  let meta = tmb;
  if (objetivo === "emagrecer") meta -= 400;
  if (objetivo === "ganhar") meta += 400;

  document.getElementById("tmb").textContent = Math.round(tmb);
  document.getElementById("meta").textContent = Math.round(meta);
}

function adicionar() {
  const nome = document.getElementById("food").value.toLowerCase();
  const gramas = +document.getElementById("gramas").value;

  if (!alimentos[nome]) {
    alert("Alimento não encontrado");
    return;
  }

  const kcal = (alimentos[nome] / 100) * gramas;
  total += kcal;

  document.getElementById("total").textContent = Math.round(total);

  const li = document.createElement("li");
  li.innerHTML = `
    ${gramas}g ${nome} — ${Math.round(kcal)} kcal
    <button onclick="this.parentElement.remove()">✕</button>
  `;
  document.getElementById("lista").appendChild(li);
}

function limpar() {
  total = 0;
  document.getElementById("total").textContent = 0;
  document.getElementById("lista").innerHTML = "";
}

function toggleTheme() {
  document.body.classList.toggle("light");
}
