document.addEventListener("DOMContentLoaded", function () {
  exibirResultado();
});

function exibirResultado() {
  const parametros = new URLSearchParams(window.location.search);
  document.getElementById("resultNome").innerText = parametros.get("nome");
  document.getElementById("resultDataNascimento").innerText =
    parametros.get("dataNascimento");
  document.getElementById("resultCpf").innerText = parametros.get("cpf");
  document.getElementById("resultSexo").innerText = parametros.get("sexo");
  document.getElementById("resultCurso").innerText = parametros.get("curso");
  document.getElementById("resultModalidade").innerText =
    parametros.get("modalidade");
  document.getElementById("resultCep").innerText = parametros.get("cep");
  document.getElementById("resultNumero").innerText = parametros.get("numero");
  document.getElementById("resultEndereco").innerText =
    parametros.get("endereco");
  document.getElementById("resultBairro").innerText = parametros.get("bairro");
}

function voltar() {
  window.location.href = "index.html";
}
