function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
          document.getElementById("mensagem").textContent = mensagem;
    
          let inputTarefa= document.getElementById("inputTarefa");
          let tarefa= inputTarefa.value;
          console.log(tarefa);

          let listaTarefa=  document.getElementById("listaTarefa");
          let novaTarefa= document.createElement("li");

          novaTarefa.textContent= tarefa;

          listaTarefa.appendChild(novaTarefa);

          inputTarefa.value="";

  }