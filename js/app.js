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
  if (document.querySelector("#tarefa").value, != ""){
  const novaTarefa = {
    tarefa: document.querySelector("#tarefa").value,
    responsavel: document.querySelector("#responsavel").value,
    inicio: document.querySelector("#inicio").value,
    fim: document.querySelector("#fim").value
  };
  
  toDoList.push(novaTarefa);
  
  document.querySelector("#tarefa").value = "";
  document.querySelector("#responsavel").value = "";
  document.querySelector("#inicio").value = "";
  document.querySelector("#fim").value = "";
  
  mostra();
 }
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


