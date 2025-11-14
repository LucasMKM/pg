document.getElementById('armazenar').addEventListener('click', gravar);
document.getElementById('excluir').addEventListener('click', limpar);
document.getElementById('mostrar').addEventListener('click', recuperar);
document.getElementById('adicionar').addEventListener('click', insereTarefa);

let toDoList = [];

function mostra() {
  let valor = "";
  for (let i = 0; i < toDoList.length; i++) {
    valor += `
    <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #ddd;">
      <input type="radio" id="tarefa${i}" name="tarefas" onclick="excluirTarefa(${i})">
      <label for="tarefa${i}">
        <strong> Tarefa:${toDoList[i].tarefa}</strong><br>
        Responsável: ${toDoList[i].responsavel}<br>
        Início: ${toDoList[i].inicio} | Fim: ${toDoList[i].fim}
      </label>
    </div>`;
  }
  document.querySelector("#lista").innerHTML = valor;
}

function insereTarefa() {

  let tarefa = document.querySelector("#tarefa").value.trim();
  let responsavel = document.querySelector("#responsavel").value.trim();
  let inicio = document.querySelector("#inicio").value.trim();
  let fim = document.querySelector("#fim").value.trim();

  if (tarefa === "" || responsavel === "" || inicio === "" || fim === "") {
    alert("Preencha todos os campos antes de adicionar a tarefa!");
    return; // impede o envio
  }

  let novaTarefa = {
    tarefa,
    responsavel,
    inicio,
    fim
  };
  
  toDoList.push(novaTarefa);
  
  // Limpa os campos após adicionar
  document.querySelector("#tarefa").value = "";
  document.querySelector("#responsavel").value = "";
  document.querySelector("#inicio").value = "";
  document.querySelector("#fim").value = "";
  
  mostra();
}

function excluirTarefa(num) {
  toDoList.splice(num, 1);
  mostra();
}

function gravar() {
  localStorage.setItem("lista", JSON.stringify(toDoList));
  alert("Lista salva com sucesso!");
}

function recuperar() {
  const lista = localStorage.getItem("lista");
  if (lista) {
    toDoList = JSON.parse(lista);
    mostra();
    alert("Lista carregada com sucesso!");
  } else {
    alert("Nenhuma lista salva encontrada.");
  }
}

function limpar() {
  localStorage.removeItem('lista');
  toDoList = [];
  mostra();
  alert("Lista limpa com sucesso!");
}

