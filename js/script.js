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




//-----------------COUNTER-------------------

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





