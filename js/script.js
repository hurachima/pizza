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


