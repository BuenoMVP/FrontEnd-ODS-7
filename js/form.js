//Criação de variáveis de controle "usuarios" e "id" 
var usuarios = [];

var id = 0;

// 1. Função adequada para incluir dados do formulário em uma lista e no local storage.
function incluirDados() {

    var date = new Date();

    id++;

    var nome = document.getElementById("nome").value;

    var email = document.getElementById("email").value;

    var telefone = document.getElementById("telefone").value;

    var idade = document.getElementById("idade").value;

    var instituicao = document.getElementById("instituicao").value;

    var usuario = {

        id: id,

        nome: nome,

        email: email,

        telefone: telefone,

        idade: idade,

        instituicao: instituicao,

        dataEnvio: date.toLocaleDateString()

    };

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    var lista = document.getElementById("lista");

    var li = document.createElement("li");

    li.textContent = "Data de Envio: " + usuario.dataEnvio + " | ID: " + usuario.id + " | Nome: " + usuario.nome + " | E-mail: " + usuario.email + " | Telefone: " + usuario.telefone + " | Idade: " + usuario.idade + " | Instituição: " + usuario.instituicao;

    lista.appendChild(li);

    limparCampos();
}


// 2. Função adequada para excluir um item da lista e do local storage.
function excluirUmUsuario() {

    var id = document.getElementById("excluirUmUsuarioPeloID").value;

    var usuarioFiltrado = usuarios.find(function (usuario) {

        return usuario.id == id;

    });

    var index = usuarios.indexOf(usuarioFiltrado);

    if (index !== -1) {

        usuarios.splice(index, 1);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        recarregarLista();

        limparExcluirUmUsuario();

    } else {

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

    var nomePesquisado = document.getElementById("nomePesquisado").value;

    var lista = document.getElementById("lista");

    lista.innerHTML = "";

    usuarios.forEach(function (usuario) {

        if (usuario.nome.toLowerCase().includes(nomePesquisado.toLowerCase())) {

            var li = document.createElement("li");

            li.textContent = "Data de Envio: " + usuario.dataEnvio + " | ID: " + usuario.id + " | Nome: " + usuario.nome + " | E-mail: " + usuario.email + " | Telefone: " + usuario.telefone + " | Idade: " + usuario.idade + " | Instituição: " + usuario.instituicao;
            
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