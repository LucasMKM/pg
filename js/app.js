document.getElementById('armazenar').addEventListener('click', gravar);
document.getElementById('excluir').addEventListener('click', limpar);
document.getElementById('mostrar').addEventListener('click', recuperar);
document.getElementById('adicionar').addEventListener('click', insereTarefa);

      let toDoList=[];
      function mostra() {
        let valor = "";
        for (let i = 0; i < toDoList.length; i++) {
          valor += `
          <input type="radio" id="tarefa${i}" onclick ="excluirTarefa(${i})">
          <label for="tarefa${i}">${toDoList[i]}</label><br>`;
        }
        document.querySelector("#lista").innerHTML = valor;
      }


      function insereTarefa() {
        toDoList.push( 
          document.querySelector("#tarefa").value
          );
        mostra();
      }
      function excluirTarefa(num) {
        toDoList.splice(num, 1);
        mostra();
      }

      function gravar ()
      {
        localStorage.setItem("lista",JSON.stringify(toDoList));
      }
      function recuperar ()
      {
        toDoList=[];
        lista=localStorage.getItem("lista");
        if(lista){
          toDoList=JSON.parse(lista);
        }
        mostra();
      }
      function limpar() {
         localStorage.removeItem('lista');
         toDoList=[];
         mostra();
      } 
