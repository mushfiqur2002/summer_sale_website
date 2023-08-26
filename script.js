const card = document.querySelectorAll('#card');
const productList = document.querySelector('.productList');
const totalAmount = document.querySelector('.list_price ul li p .price .totalPrice');
const discountAmount = document.querySelector('.list_price ul li p .price .discountPrice');
const actualTotalAmount = document.querySelector('.list_price ul li p .price .actualTotalprice');
const PurchaseBtn = document.querySelector('.Purchase');
const inputField = document.getElementById('inputCoupon'); 
const applyBtn = document.getElementById('applyBtn');
const message = document.getElementById('message');
let discount= 0;
let money = 0;
// click card
card.forEach((item)=>{
    item.addEventListener('click',function(){
        let namePro = item.lastElementChild.lastElementChild.querySelector('.item_name .name');
        let pricePro = item.lastElementChild.lastElementChild.querySelector('.item_price .price .taka');
        let name = namePro.innerText;
        let price = parseFloat(pricePro.innerText);
        addCartFun(name,price);
    })
})

// calculate the total price;
let sum = 0.00;
function totalPrice(money){
    sum += money;
    return sum;
}
// calculate the discount price;
function discountPrice(money){
    if(money){}
}
// pass name and price
function addCartFun(a,b){
    let list = document.createElement('li');
    totalPrice(b);
    list.appendChild(document.createTextNode(a));
    productList.appendChild(list);
    totalAmount.innerText = sum;
    actualTotal(sum);
    purchasePro(sum);
}
//disable able button
inputField.addEventListener('keyup',function(event){
    let value = event.currentTarget.value;
    applyBtn.disabled = true;
    if(value === 'SELL200' && sum>200){
        applyBtn.disabled = false;
        applyBtn.addEventListener('click',function(){
            //discount
            discount = sum*(20/100);
            money = sum - discount;
            discountAmount.innerText = discount;
            actualTotal(money);
            purchasePro(money);
        },{once:true})
    }
})

// calculate the actual amount 
function actualTotal(a){
    if(discount>0){
        actualTotalAmount.innerText = a;
    }else{
        actualTotalAmount.innerText = a;
    }
}

function purchasePro(a){
    PurchaseBtn.disabled = true;
    if(200<a){
        PurchaseBtn.disabled = false;
        PurchaseBtn.addEventListener('click',function(){
            message.style.display = 'flex';
            message.style.right = 0;
        })
    }
}

// Purchase Successfully message
function goHome(){
    window.location.href = 'index.html';
}