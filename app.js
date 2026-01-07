function calcular() {
  const sexo = document.getElementById("sexo").value;
  const idade = Number(document.getElementById("idade").value);
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);

  let tmb;

  if (sexo === "m") {
    tmb = 10*peso + 6.25*altura - 5*idade + 5;
  } else {
    tmb = 10*peso + 6.25*altura - 5*idade - 161;
  }

  document.getElementById("resultado").innerText = Math.round(tmb);
}
