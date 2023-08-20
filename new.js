function textIn(id){
    return document.getElementById(id).innerText;
}
function insertTo(text){
    let elem = document.createElement('li');
    elem.innerText = text;
    document.getElementById('selected').appendChild(elem);
}
let totalPrice = 0;
let discount = 0;
let total = 0;

function addThis(event){
    let price = parseFloat(document.getElementById(event.id).childNodes[3].childNodes[5].childNodes[0].innerText);
    let name = (document.getElementById(event.id).childNodes[3].childNodes[3].innerText);
console.log(name);
    insertTo(name);
    totalPrice += price;
    if(totalPrice > 0){
        document.getElementById('purchase').removeAttribute('disabled');
    }else{
        document.getElementById('purchase').setAttribute('disabled',true);
    };
    if(totalPrice >=200){
        document.getElementById('apply').removeAttribute('disabled');
    }else{
        document.getElementById('apply').setAttribute('disabled',true);
    }
    total = totalPrice - discount;
    console.log(total, totalPrice,discount);
    setAll(totalPrice,discount,total);
}
function discountPrice(){
    if(document.getElementById('input').value == 'SELL200'){
        console.log('discounted shit');
        totalPrice = parseFloat(textIn('total-price'));
        discount = totalPrice*0.2;
        total = totalPrice - discount;
        setAll(totalPrice,discount,total)
    }
}
function setAll(tp,d,t){
    document.getElementById('total-price').innerText = tp.toFixed(2);
    document.getElementById('discount').innerText = d.toFixed(2);
    document.getElementById('total').innerText = t.toFixed(2);
}
if(totalPrice > 0){
    document.getElementById('purchase').removeAttribute('disabled');
}else{
    document.getElementById('purchase').setAttribute('disabled',true);
};