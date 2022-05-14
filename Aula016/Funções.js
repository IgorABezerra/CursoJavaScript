function soma(n1 = 0,n2 = 0){ //n1 e n2 serão por padrão 0
    return n1+n2
}

console.log(soma())

function fatorial(n){
    let f = 1
    for(let c = n; c > 1; c--){
        f = f*c
    }
    return f
}

console.log(fatorial(5))

//função recursiva, chama a se mesmo;

function fatoriall(n){
    if(n == 1){
        return 1
    }else{
        return  n * fatoriall(n-1)
    }
}

console.log(fatoriall(5))