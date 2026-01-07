function calcular() {
  let total = 0;

function adicionar() {
  const food = document.getElementById("food").value;
  const kcal = Number(document.getElementById("kcal").value);

  total += kcal;

  const li = document.createElement("li");
  li.innerText = `${food} — ${kcal} kcal`;
  document.getElementById("lista").appendChild(li);

  document.getElementById("total").innerText = total;

  const meta = Number(document.getElementById("meta").innerText) || 0;
  document.getElementById("restam").innerText = meta - total;
}
  const sexo = document.getElementById("sexo").value;
  const idade = Number(document.getElementById("idade").value);
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);
  const objetivo = document.getElementById("objetivo").value;

  let tmb;

  if (sexo === "m") {
    tmb = 10*peso + 6.25*altura - 5*idade + 5;
  } else {
    tmb = 10*peso + 6.25*altura - 5*idade - 161;
  }

  let meta = tmb;

  if (objetivo === "emagrecer") meta -= 400;
  if (objetivo === "ganhar") meta += 300;

  document.getElementById("resultado").innerText = Math.round(tmb);
  document.getElementById("meta").innerText = Math.round(meta);
}
