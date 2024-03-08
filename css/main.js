
$(window).scroll(function(){
    let servicesScroll= $('#hh2').offset().top;
    let srcWindow =$(window).scrollTop();
    if(srcWindow>servicesScroll -40){
        $('#header').css('background','rgba(20,20,30,0.4');
        $('#header').css('padding','0 20px  0 15px')
        $('#header').css('height','45px')
        $('#btn-scroll').fadeIn(500)
    }
    else{
        $('#header').css('background','transparent');
        $('#header').css('padding','0');
        $('#header').css('height','65px');
        $('#btn-scroll').fadeOut(500)

    }
})
$('#btn-scroll').click(function(){
        $('html,body').animate({scrollTop:0})
})


$("a[href^='#']").click(function(e){
    $(e.target).css('color','red');
    $(e.target).css('border-bottom','solid 2px red');

    $(e.target).siblings().css('border-bottom','none');

    $(e.target).siblings().css('color','rgb(9, 92, 216)');
})

let items=$('.color-itme');
$(items).eq(0).css('background','white');
$(items).eq(1).css('background','black')
$(items).eq(2).css('background','blue')
$(items).eq(3).css('background','orange');
$(items).eq(4).css('background','#09c');


items.click(function(e){
   let change= $(e.target).css('backgroundColor')
    $("a[href^='#']").css('color',change)
})

$('#options i').click(function(){
    $('#colors').toggle(1000)
})