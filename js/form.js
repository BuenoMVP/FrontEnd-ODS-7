//Criação de variáveis de controle "usuarios" e "id" 
var usuarios = [];

var id = 0;

// 1. Função adequada para incluir dados do formulário em uma lista e no local storage.
function incluirDados() {
    // Obtém a data atual
    var date = new Date();
    
    id++;   // Incrementa o ID 
    
    // Obtém os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var idade = document.getElementById("idade").value;
    var instituicao = document.getElementById("instituicao").value;
    
    // Cria um objeto representando um usuário com todos os campos
    var usuario = {
        id: id,
        nome: nome,
        email: email,
        telefone: telefone,
        idade: idade,
        instituicao: instituicao,
        dataEnvio: date.toLocaleDateString() // Adiciona a data de envio formatada
    };
    
    // Adiciona o usuário à lista 'usuarios'
    usuarios.push(usuario);
    
    // Armazena a lista 'usuarios' no localStorage após converter para string JSON
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
    // Atualiza a lista na interface adicionando um novo item com dados do usuário
    var lista = document.getElementById("lista");
    var li = document.createElement("li");
    li.textContent = "Data de Envio: " + usuario.dataEnvio + " | ID: " + usuario.id + " | Nome: " + usuario.nome + " | E-mail: " + usuario.email + " | Telefone: " + usuario.telefone + " | Idade: " + usuario.idade + " | Instituição: " + usuario.instituicao;
    lista.appendChild(li);
    
    // Limpa os campos do formulário após a inclusão
    limparCampos();
}

// 2. Função adequada para excluir um item da lista e do local storage.
function excluirUmUsuario() {
    // Obtém o ID do usuário a ser excluído do formulário
    var id = document.getElementById("excluirUmUsuarioPeloID").value;
    
    // Encontra o usuário com o ID correspondente na lista 'usuarios'
    var usuarioFiltrado = usuarios.find(function (usuario) {
        return usuario.id == id;
    });
    
    // Obtém o índice do usuário filtrado na lista
    var index = usuarios.indexOf(usuarioFiltrado);
    
    // Se o usuário for encontrado, remove-o da lista 'usuarios'
    if (index !== -1) {
        usuarios.splice(index, 1);
        
        // Atualiza os dados no localStorage após a exclusão
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        
        // Recarrega a lista na interface
        recarregarLista();
        
        // Limpa o campo do formulário após a exclusão
        limparExcluirUmUsuario();
    } else {
        // Caso contrário, exibe um alerta informando que o usuário não foi encontrado
        alert("Usuário não encontrado com o ID fornecido.");
    }
}


// 3. Função adequada para excluir todos os itens da lista e do local storage.
function excluirTodosUsuarios() {

    localStorage.clear(); //Limpa o localStorage completamente

    usuarios = []; // Limpa a lista de usuários 

    id = 0; // Reinicia a contagem dos identificadores 

    lista = document.getElementById("lista"); // Busca o elemento HTML "lista"

    recarregarLista(); // Recarrega a lista atualizada com todos os usuários

}

// 4. Função adequada para pesquisar um campo do formulário.
function pesquisarPorNome() {
    // Obtém o valor do campo de pesquisa por nome
    var nomePesquisado = document.getElementById("nomePesquisado").value;
    
    // Obtém a lista onde os resultados da pesquisa serão exibidos
    var lista = document.getElementById("lista");
    
    // Limpa o conteúdo atual da lista
    lista.innerHTML = "";
    
    // Itera sobre cada usuário na lista 'usuarios'
    usuarios.forEach(function (usuario) {
        // Verifica se o nome do usuário atual contém o nome pesquisado (ignorando maiúsculas/minúsculas)
        if (usuario.nome.toLowerCase().includes(nomePesquisado.toLowerCase())) {
            // Se o nome do usuário corresponder à pesquisa, cria um novo elemento <li> para exibir os detalhes do usuário na lista
            var li = document.createElement("li");
            li.textContent = "Data de Envio: " + usuario.dataEnvio + " | ID: " + usuario.id + " | Nome: " + usuario.nome + " | E-mail: " + usuario.email + " | Telefone: " + usuario.telefone + " | Idade: " + usuario.idade + " | Instituição: " + usuario.instituicao;
            
            // Adiciona o elemento <li> à lista
            lista.appendChild(li);
        }
    });
}



// 5. Função adequada para limpar os campos do formulário.
function limparCampos() {

    document.getElementById("nome").value = ""; //Reseta o campo "nome" do formulário

    document.getElementById("email").value = "";  //Reseta o campo "email" do formulário

    document.getElementById("telefone").value = "";  //Reseta o campo "telefone" do formulário

    document.getElementById("idade").value = "";  //Reseta o campo "idade" do formulário

    document.getElementById("instituicao").value = "";  //Reseta o campo "instituicao" do formulário

}

// Funções extras:

//Recarrega a lista buscando todos os usuários, utilizada após uma adição, modificação ou exclusão.
function recarregarLista() {

    var lista = document.getElementById('lista');

    lista.innerHTML = "";

    usuarios.forEach(function (usuario) {

        var li = document.createElement("li");

        li.textContent = "Data de Envio: " + usuario.dataEnvio + " | ID: " + usuario.id + " | Nome: " + usuario.nome + " | E-mail: " + usuario.email + " | Telefone: " + usuario.telefone + " | Idade: " + usuario.idade + " | Instituição: " + usuario.instituicao;
        
        lista.appendChild(li);

    });

}


//Zera o valor do identificador selecionado
function limparExcluirUmUsuario() {

    document.getElementById("excluirUmUsuarioPeloID").value = "";

}