function enviar(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const estudo = document.getElementById("estudo").value;




if ((nome, idade, estudo == "")) {

    alert("Atenção! É obrigatório i preenchimento de todos os campos.")
}       else {
                document.getElementById("mensagem").innerHTML = `Olá ${nome}! Você tem ${idade} anos e acaba de se inscrever no curso de ${estudo}.`;
                document.getElementById("informativo").innerHTML = `<div class="perguntas"<label>Você conheceu o curso de ${estudo} através de indicação de alguém?</label><br><br>
                <button type="submit" onclick="Yes()">SIM</button> <button type="submit" onclick="No()">NÃO</button></div>`;
}
}


function Yes() {
    document.getElementById("resposta-final").innerHTML = "<h2>Que bom que estamos sendo indicados por outros alunos.</h2>";
    document.getElementById("next").disabled = false
}


function No() {
    document.getElementById("resposta-final").innerHTML = "<h2>Entendo, ficamos felizes com sua iniciativa em aprender.</h2>";
    document.getElementById("next").disabled = false
}


function next(){
    var janela = window.open("C:/Users/Mr. Yeager/Documents/Aulas de HTML/Projetos/DaysOfCode_day3.html")
    janela.focus()
}