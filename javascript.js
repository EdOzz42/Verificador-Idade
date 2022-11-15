var botaoVerificar = document.getElementById("botao")
botaoVerificar.addEventListener("click", exec)
document.addEventListener("keypress", function(e) {

    if(e.key === "Enter") {
        let botao = document.getElementById("botao")
        botao.click()
    }

})

function exec() {
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById("inpAno")
    let resultado = document.getElementById("res")

    if (formAno.value.length == 0 || formAno.value > ano || formAno.value < ano - 120) {
        window.alert("[ERRO] Verefique os dados e tente novamente!")
    } else {
        let formSexo = document.getElementsByName("inpSexo")
        let idade = ano - Number(formAno.value)
        let gender = ''
        let img = document.createElement('img')
        img.setAttribute("id", "foto")
        if (formSexo[0].checked){
            gender = "Homem"
            if (idade >= 0 && idade <= 14) {
                //garoto
                img.setAttribute("src", "images/menino.png")
            } else if (idade < 22) {
                //jovem moço
                img.setAttribute("src", "images/jovem_homem.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "images/adulto_homem.png")
            } else {
                //idoso
                img.setAttribute("src", "images/idoso_homem.png")
            }
        } else {
            gender = "Mulher"
            if (idade >= 0 && idade <= 12) {
                //garota
                img.setAttribute("src", "images/menina.png")
            } else if (idade < 22) {
                //jovem moça
                img.setAttribute("src", "images/jovem_mulher.png")
            } else if (idade < 50) {
                //adulta
                img.setAttribute("src", "images/adulto_mulher.png")
            } else {
                //idosa
                img.setAttribute("src", "images/idoso_mulher.png")
            }
        }      
        resultado.style.textAlign = "center"
        resultado.innerHTML = `O resultado foi: ${gender} com ${idade} anos.`
        resultado.appendChild(img)
        img.style.marginTop = "20px"
        img.style.width = "55%"
        img.style.height = "55%"
    }


}
