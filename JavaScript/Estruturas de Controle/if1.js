function soBoaNoticia(nota) {
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
    else{
        console.log('Reprovado com ' + nota)
    }
}

soBoaNoticia(8)
soBoaNoticia(5)

function seForVerdadeiroEuFalo(valor){
    if(valor){
        console.log('É verdade ' + valor)
    }
}

seForVerdadeiroEuFalo(5)