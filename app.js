function calcular() {
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
