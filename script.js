const resultado = document.getElementById("resultado");

function calcularDoisNumeros(operacao) {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let resposta;

  switch (operacao) {
    case "*":
      resposta = num1 * num2;
      break;

    case "/":
      resposta = num1 / num2;
      break;

    case "+":
      resposta = num1 + num2;
      break;

    case "-":
      resposta = num1 - num2;
      break;
  }

  resultado.innerHTML = resposta;
}

// tabuada

const tabuada = document.getElementById("tabuada");
function mostrarTabuada() {
  let numero = Number(document.getElementById("numero").value);

  let resposta = "";
  for (let i = 1; i <= 10; i++) {
    resposta += numero + "x" + i + "=" + numero * i + "<br>";
  }
  tabuada.innerHTML = resposta;
}


//lista de alunos
const alunos = ['Bianca', 'Milena', 'Heloyse', 'Lucas', 'Luana'];
let lista = "";
function mostrarLista(){
  let i = 0;

  while(i < alunos.length){
    lista += `<li>${alunos[i]}</li>`;
    i++;
  };

  document.getElementById('lista').innerHTML= lista;
};

//formulario

const form = document.getElementById('meuForm');
const resultadoForm = document.getElementById('resultadoForm');
const aluno = {
  nome: "",
  idade: "",
  curso: "",
  exibirInfo: function(texto){
    this.nome = form.nome.value;
    this.idade = form.idade.value;
    this.curso = form.curso.value;

    resultadoForm.textContent = `${texto}: ${this.nome} - Idade: ${this.idade} - Curso: ${this.curso}`
    return 'Cadastro efetuado com sucesso!'
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert(aluno.exibirInfo("Nome do aluno"));
})