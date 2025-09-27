function adicionarTarefa() {

    //Mensagem 
    let mensagem = "Tarefa adicionada com sucesso!";
    
    //Adicionar tarefa
    let inputTarefa= document.getElementById("inputTarefa");
    let tarefa= inputTarefa.value; //quando é input, coloca-se value

    //Aparecer a mensagem após clicar no botão 
    document.getElementById("mensagem").textContent = mensagem;
     
    //Listar tarefa
    let listaTarefa= document.getElementById("listaTarefa");
    let novaTarefa= document.createElement("li");

    //Aparecer a tarefa na tela
    novaTarefa.textContent= tarefa;

    //Colocar a tarefa criada dentro da lista
    listaTarefa.appendChild(novaTarefa);

    //Depois que adicionar a tarefa, o campo fica vazio
    inputTarefa.value="";
    

  } 




  