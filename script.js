function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoForm = document.getElementById('txtano')//Ano do formulário, que o usuário indicará
    var resultado = document.querySelector('div#resultado')
    if (anoForm.value.length == 0 || Number(anoForm.value)  > anoAtual) {//O ano inserido é igual a 0? é maior que o ano atual?
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')//Aqui não funciona por Id
        var idade = anoAtual - Number(anoForm.value)
        var genero = ''
        var img = window.document.getElementById('foto')
        var img = document.createElement('img') //Poderia ter feito no html...
       img.setAttribute('id', 'foto') // Mas preferir inserir nos scripts
        if (fsex[0].checked) {
            genero = 'Homem' 
            
            if (idade >= 0 && idade < 10) {
                
                img.setAttribute('src', 'img/Bambino.png' ) 
                //criança
            } else if (idade < 29){
                img.setAttribute('src', 'img/Giovanotto.png')
                //jovem
            } else if (idade < 55) {
                img.setAttribute('src', 'img/Uomo.png')
                //Adulto
            } else {
                img.setAttribute('src', 'img/Vecchio.png')
                //Idoso
            }
         
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/Bambina.png')
                //criança
            } else if (idade < 29){
                img.setAttribute('src', 'img/Giovanetta.png')
                //jovem
            } else if (idade < 55) {
                img.setAttribute('src', 'img/Donna.png')
                //Adulto
            } else {
                img.setAttribute('src', 'img/Vecchia.png')
                //Idoso
            }
        }
        
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)//Adiciona um elemento
    }

    
 }

