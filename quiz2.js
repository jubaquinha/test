function verificarSenha1() {
    var senha = document.getElementById("senha").value;
    // Aqui você pode adicionar a lógica para verificar a senha inserida na primeira pergunta
    // Exemplo simples: Verificar se a senha é "minhasenha"
    if (senha === "bolinho de chuva") {
        document.getElementById("pergunta1").style.display = "none";
        document.getElementById("pergunta2").style.display = "block";
    } else {
        alert("melhor café da manhã do mundo.");
    }
}

function verificarSenha2() {
    var senha2 = document.getElementById("senha2").value;
    // Aqui você pode adicionar a lógica para verificar a senha inserida na segunda pergunta
    // Exemplo simples: Verificar se a senha é "outrasenha"
    if (senha2 === "a lovely night") {
        document.getElementById("pergunta2").style.display = "none";
        document.getElementById("resultado").style.display = "block";
    } else {
        alert("música do nosso dueto??");
    }
}
