const tables = document.querySelector('#data-table tbody')
const descricao = document.querySelector('form #description')
const amount = document.querySelector('form #amount')
const datando = document.querySelector('form #date')
const button = document.querySelector('form .input-group button')
const totais = document.querySelector('#totais')
const entrada = document.querySelector('#entrada')
const saidas = document.querySelector('#saidas')
var redutor = 0

function somar(){
  var total = prods
.map(tot => ({
  v2: tot.v2 * 1
}))

total.forEach(element => {
console.log(typeof (element))
});

var convert = total.map(function (obj) {
return Object.keys(obj).map(function (chave) {
  return obj[chave]
})
})
var valor = convert.reduce(function (a, b) {
return parseInt(a) + parseInt(b) ;
})

resultado = valor.toLocaleString('pt-br', {
style: 'currency',
currency: 'BRL'
})

function saveTotal(){
 return  localStorage.setItem('totais', resultado)
}
saveTotal()

}
 

const prods = JSON.parse(localStorage.getItem('custolist')) 

function renderProds() {
  tables.innerHTML = ""
  for (i of prods) {

    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    td1.setAttribute('class', "description")
    let descText = document.createTextNode(i.v1)
    td1.appendChild(descText)

    let td2 = document.createElement('td')
    td2.setAttribute('class', "expense")
    let amText = document.createTextNode(i.v2)
    td2.appendChild(amText)

    let data = document.createElement('td')
    data.setAttribute('class', "date")
    let datText = document.createTextNode(i.v3)
    data.appendChild(datText)

    var position = prods.indexOf(i)
    let imagetd = document.createElement('td')
    let image = document.createElement('td')
    let img = document.createElement('img')
    img.setAttribute('src', "./assets/minus.svg")
    img.setAttribute('alt', "remover esta transação")
    img.setAttribute('onclick', 'delet(' + position + ')')
    image.appendChild(img)
    imagetd.appendChild(img)

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(data)
    tr.appendChild(imagetd)
    tables.appendChild(tr)
  }  
}
renderProds()


function addProd() {
  
  let des = descricao.value
  let am = amount.value
  let data = datando.value
 
  if(am > 0){    
    let teste =localStorage.getItem('positivo')
  if( teste == "undefined" || teste == "NaN"){
    localStorage.removeItem('positivo');     
  maior =  Number(am)
  }else{
    maior = Number(am) + Number(teste)
  }
}
  
  

  prods.push({
    ...prods,
    v1: des,
    v2: am,
    v3: data
  })

  
  renderProds()
  saveProds()
  somar() 
  saveM(maior)
}


function saveProds() {
  localStorage.setItem('custolist', JSON.stringify(prods))
}

function saveM(maior){
  localStorage.setItem('positivo', maior)
}

function delet(position) {
  prods.splice(position, 1)
renderProds()
saveProds()
somar()
saveM()
}



var v1 = Number(localStorage.getItem('positivo'))
entrada.innerHTML = v1.toLocaleString('pt-br', {style: 'currency',  currency: 'BRL'})
totais.innerHTML =  localStorage.getItem('totais')
redu = localStorage.getItem('totais')
redutor  = redu.replace('R$', '') ? redu.replace('R$', ''): 0
redutor = parseInt(redutor)
resto = v1 - redutor
saidas.innerHTML = resto.toLocaleString('pt-br', {style:'currency', currency:'BRL'})
const model = {

  open() {
    document.querySelector('.modal-overlay.active').style.opacity = "1";
    document.querySelector('.modal-overlay.active').style.visibility = "visible";

  },
  closed() {
    document.querySelector('.modal-overlay.active').style.opacity = '0';
    document.querySelector('.modal-overlay.active').style.visibility = 'hidden';
  }
}