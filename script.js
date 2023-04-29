var agora = nova data()
var hora = agora. getHours()
var cor = documento. getElementById('fundo')
paisagem = documento. getElementById('imagem')   
    horario. innerHTML = '<p> Agora são ${hora} horas <br> Bom Dia!</p>'
 se (hora >= 12 && hora <= 18) {
    horario. innerHTML = '<p> Agora são ${hora} horas <br> Boa Tarde!</p>'
    cor. estilo. backgroundColor = 'rgba(172, 82, 23, 0,808)'
    paisagem. innerHTML = '<img class="foto" src="/Curso Js/Imagens/sol.jpg">'
} else if (hora > 18 && hora <= 23) {
    horario. innerHTML = '<p> Agora são ${hora} horas <br> Boa Noite!</p>'
    cor. estilo. backgroundColor = 'rgb(48, 47, 47)'
    paisagem. innerHTML = '<img class="foto" src="/Curso Js/Imagens/noitee.jpg">'
} else if (hora == 24 ||  hora <= 04) {
    horario. innerHTML = '<p> Agora são ${hora} horas <br> Boa Madrugada!</p>'
    cor. estilo. backgroundColor = 'preto'
    paisagem. innerHTML = '<img class="foto" src="/Curso Js/Imagens/sonoo.jpg">'
} 
    
