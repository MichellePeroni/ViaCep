function preencherEndereco() {
  const cep = document.getElementById("cep").value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      const endereco = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
      document.getElementById("endereco").value = data.logradouro;
      document.getElementById("bairro").value = data.bairro;
      document.getElementById("numero").style.display = "block";
      document.getElementById("endereco").style.display = "block";
      document.getElementById("bairro").style.display = "block";
      document.getElementById("numeroLabel").style.display = "block";
      document.getElementById("enderecoLabel").style.display = "block";
      document.getElementById("bairroLabel").style.display = "block";
    })
    .catch((error) => {
      console.error("Erro ao obter o endereço:", error);
    });
}

function enviarFormulario() {
  const nome = document.getElementById("nome").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const cpf = document.getElementById("cpf").value;
  const sexo = document.getElementById("sexo").value;
  const curso = document.getElementById("curso").value;
  const modalidade = document.getElementById("modalidade").value;
  const cep = document.getElementById("cep").value;
  const numero = document.getElementById("numero").value;
  const endereco = document.getElementById("endereco").value;
  const bairro = document.getElementById("bairro").value;

  const parametrosURL = `resultado.html?nome=${encodeURIComponent(
    nome
  )}&dataNascimento=${encodeURIComponent(
    dataNascimento
  )}&cpf=${encodeURIComponent(cpf)}&sexo=${encodeURIComponent(
    sexo
  )}&curso=${encodeURIComponent(curso)}&modalidade=${encodeURIComponent(
    modalidade
  )}&cep=${encodeURIComponent(cep)}&numero=${encodeURIComponent(
    numero
  )}&endereco=${encodeURIComponent(endereco)}&bairro=${encodeURIComponent(
    bairro
  )}`;
  window.location.href = parametrosURL;
}
