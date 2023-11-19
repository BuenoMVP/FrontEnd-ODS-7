var usuarios = [];

var id = 0;

// 1. Função adequada para incluir dados do formulário em uma lista e no local storage.
function incluirDados(){

    id++;

    var nome = document.getElementById("nome").value;

    var email = document.getElementById("email").value;

    var telefone = document.getElementById("telefone").value;

    var idade = document.getElementById("idade").value;

    var instituicao = document.getElementById("instituicao").value;

    var usuario = [id, nome, email, telefone, idade, instituicao];

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    lista = document.getElementById("lista");

    var li = document.createElement("li");

    li.textContent = "ID: " + id + " | Nome: " + nome + " | E-mail: " + email + " | Telefone: " + telefone + " | Idade: " + idade + " | Instituição: " + instituicao;

    lista.appendChild(li);

    limparCampos();

}

// 2. Função adequada para excluir um item da lista e do local storage.
function excluirUmUsuario() {
    
    var id = document.getElementById("excluirUmUsuarioPeloID").value;

    var usuarioFiltrado = usuarios.find(function(usuario) {

        return usuario[0] == id;

    });

    var index = usuarios.indexOf(usuarioFiltrado);

    usuarios.splice(index, 1);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    recarregarLista();

    limparExcluirUmUsuario();

}

// 3. Função adequada para excluir todos os itens da lista e do local storage.
function excluirTodosUsuarios(){

    localStorage.clear();

    usuarios = [];

    id = 0;

    lista = document.getElementById("lista");

    recarregarLista();

}

// 4. Função adequada para pesquisar um campo do formulário.
function pesquisarPorNome() {
    var nomePesquisado = document.getElementById("nomePesquisado").value;

    var lista = document.getElementById("lista");

    lista.innerHTML = "";

    usuarios.forEach(function(usuario) {

        if (usuario[1].toLowerCase().includes(nomePesquisado.toLowerCase())) {

            var li = document.createElement("li");

            li.textContent = "ID: " + usuario[0] + " | Nome: " + usuario[1] + " | E-mail: " + usuario[2] + " | Telefone: " + usuario[3] + " | Idade: " + usuario[4] + " | Instituição: " + usuario[5];

            lista.appendChild(li);

        }
    });
}


// 5. Função adequada para limpar os campos do formulário.
function limparCampos() {

    document.getElementById("nome").value = "";

    document.getElementById("email").value = "";

    document.getElementById("telefone").value = "";

    document.getElementById("idade").value = "";

    document.getElementById("instituicao").value = "";

}

// Funções extras:
function recarregarLista() {

    var lista = document.getElementById('lista');

    lista.innerHTML = "";

    usuarios.forEach(function(usuario) {

        var li = document.createElement("li");

        li.textContent = "ID: " + usuario[0] + " | Nome: " + usuario[1] + " | E-mail: " + usuario[2] + " | Telefone: " + usuario[3] + " | Idade: " + usuario[4] + " | Instituição: " + usuario[5];

        lista.appendChild(li);

    });

}

function limparExcluirUmUsuario() {

    document.getElementById("excluirUmUsuarioPeloID").value = "";

}