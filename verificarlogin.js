// Credenciais pré-cadastradas
const emailPreCadastrado = "faz o pix";
const senhaPreCadastrada = "50reais";

// Função para verificar o login
function verificarLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (email === emailPreCadastrado && senha === senhaPreCadastrada) {

        // Salva o estado de autenticação no localStorage
        localStorage.setItem("autenticado", "true");

        // Redireciona para a página index.html
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
}

// Adiciona o evento ao botão de login
document.getElementById("entrar").addEventListener("click", verificarLogin);
