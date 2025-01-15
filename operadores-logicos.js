const notaFinal = 7;
const faltas = 2 ;
const advertencias = 0; 


if ( notaFinal <7 || faltas >4 ){ //operador "ou-or"
    console.log('Reprovado, boas festas');
} else {
    console.log('Não foi reprovado por falta  ');
}


if (faltas >= 2 && !advertencias) { //operador "e"
    console.log('Recebeu bônus ');
} else {
    console.log('Não recebeu bônus ');
}