$(function(){
    let count = 0;
    console.log(count);
    let i = $('#input');

    let btn = $('#add');

    let btn2 = $('#remove');




  $(btn2).on('click',function(){
      $('.p-item').eq(0).remove();
   

});

if(count == 20){
   $(btn).attr('disabled','disabled');
}else{
    $(btn).on('click',function(){
        let p = $('<p class="p-item"></p>').text(i.val());
        $(i.val(''));
        $('.form__item').after(p);
        count++;
        console.log(count); 
    });
    
}


$('input[name="checkbox1"]').click(function(){
   $('.card-item:not(:eq(0))').toggleClass('active');

});

$('input[name="checkbox2"]').click(function(){
    $('.card-item:not(:eq(2))').toggleClass('active');
 
 });

 $('input[name="checkbox3"]').click(function(){
    $('.card-item:not(:eq(1))').toggleClass('active');
 
 });


});

function fun1(){
    let rgn = $('#r1');
    let par = $('#one');
    $(par).text(rgn.val()+' '+'грн');

};


$('.cart').click(function(){
    $('.cart__inner').toggleClass('active');
});


const cardBtn = document.querySelectorAll('.card-item-btn');

cardBtn.forEach(btn=>{
    btn.onclick = function(){
        console.log('click');
        document.querySelector('.cart__inner').innerHTML +=  `<div class="cart-item">
        <div class="cart-item-img">
            <img src="images/1.jpeg" alt="">
        </div>
        <div class="cart-item-content">
            <h1 class="cart-item-title">М'ясна</h1>
            <span class="card-item-price card-item-price--cart">169₴</span>
            <div class="counter">
                <button class="form-btn counter__btn" data-direction="minus">-</button>
                <input type="text" value="0" class="counter__value">
                <button class="form-btn counter__btn" data-direction="plus">+</button>
            </div>
        </div>
        <button class="form-btn cart-item-delete">X</button>
    </div>`


    //-----------COUNTER---------------------

    const btns = document.querySelectorAll('.counter__btn');


btns.forEach(btn=>{
    btn.addEventListener('click',function(){
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__value');
        const currentValue = +inp.value;
        let newValue;



        if(direction === 'plus'){
            newValue = currentValue + 1;
        }else{
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }
        inp.value = newValue;
    })
})//------>



    const deleteBtn = document.querySelectorAll('.cart-item-delete');

    deleteBtn.forEach(btn=>{
        btn.onclick = function(){
            console.log('delete');
            document.querySelector('.cart-item').remove();
        }
    })


    

   

  

    





    
 }

});




const Modal = document.querySelector('#deliver');

Modal.addEventListener('click',function(){
    swal("Ваше замовлення відправлене!");

});

















