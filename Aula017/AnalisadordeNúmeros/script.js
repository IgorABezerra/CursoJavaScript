let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#numadded')
let res = document.querySelector('div#res')
let valores = []

function isnumber(n){
    if(Number(n)>= 1 && Number(n)<= 100){
        return true
    }else{
        return false
    }
}

function inlista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function addlist(){
    if(isnumber(num.value) && !inlista(num.value,valores)){
        valores.push(Number(num.value))
    }else{
        window.alert('Número inválido ou já presente na lista')
    }
    num.value = ''  // limpa o campo do número.
    num.focus() // faz com que o cursor intermitente do teclado fique no campo número depois de adicionar o num.
}