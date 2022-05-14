let num = [1,6,4,8]
console.log(`Nosso vetor é o [${num}]`)
console.log(`Vamos adicionar um novo elemento com valor 3`)
num.push(3)
console.log(`O novo vetor é [${num}]`)
console.log(`Valor do elemento 2 é ${num[2]}`)
console.log(`Tamanho do nosso vetor é ${num.length}`)
console.log(`O vetor em ordem numérica crescente é ${num.sort()}`)
for(let pos = 0; pos<num.length; pos++){
    console.log(`Elemento posição ${pos} é: ${num[pos]}`)
}
for(let pos in num){ // so para arrays e objetos, começa do 0 e vai até length do vetor
    console.log(`Elemento posição ${pos} é: ${num[pos]}`)
}
console.log(num)
let n = 8
let posi = num.indexOf(n)
if(posi == -1){
    console.log('O valor não foi encontrado.')
}else{
    console.log(`A posição do valor ${n} é: ${posi}`)
}