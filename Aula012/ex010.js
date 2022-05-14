var idade = 69
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log('Você Não Vota.')
}else if(idade < 18 || idade >= 65){
        console.log('Você tem Voto Opcional.')
}else{
    console.log('O seu Voto é Obrigatório.')
}