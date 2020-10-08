
function horario() {
    var setor1 = window.document.getElementById('setor1')
    var imagem = window.document.getElementById('imagem')
    var mes = new Date()
    var mes = mes.getMonth()
    var data = new Date()
    var data = data.getDate()
    var hora = new Date()
    var hora = hora.getHours()
    var minutos = new Date()
    var minutos = minutos.getMinutes()
    var segundos = new Date()
    var segundos = segundos.getSeconds()
    setor1.innerHTML = `Agora são: ${hora}:${minutos}:${segundos} <br> Dia ${data}/${mes}`
    if (hora >= 0 && hora < 12){
        document.body.style.background = 'rgb(255, 255, 102)'  //CSS para mudança de estilo em tag javascript
        document.getElementById('img').src = arquivo =  "imagens/bomdia.jpg"   //forma de mudança de arquivo para iamgem em HTML arquivo;
    } else if (hora >= 12 && hora <= 18){
        document.body.style.background = 'rgb(230, 115, 0)'
        document.getElementById('img').src = arquivo = "imagens/boatarde.jpg"
    }else {
        document.body.style.background = 'rgb(82, 82, 122)'
        document.getElementById('img').src = arquivo =  "imagens/boanoite.jpg"
        
  
    }
}


