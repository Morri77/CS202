$(document).ready(function(){
    //run your code here
    //alert('welcome user');

    //Selectors - element(p, ul, h1,) id, class, multiple elements, css or jquery

    //syntax
    //$('selector').hide();
    //$('p').hide();

    //id
    //$('#para1').hide();

    //class
    //$('.heading2').hide();

    //multiple elements
    //$('p, h1, .heading2').hide();

    //$('#list li:last').hide();

    // Events - click, dblclick, keydown, load, mouseover, hover(mouseleave & mouseever),

    $('.btn1').click(function(){

        $('.para2').hide();

    })

    //Methods/Effects - hide(), show(), toggle, slideUp, slideDown, slideToggle, fadeIn, fadeOut, fadeToggle

    $('.btn2').click(function(){

        $('.para2').show();
    })

    $('.btn3').click(function(){

        $('.para2').toggle();
    })

    //parameters - fast, slow, 2000 = 2s, 1000 = 1s;

    $('.btn4').click(function(){

        $('#para1').fadeToggle(2000);
    })

    //Animations - 

    //animate()

    $('.box').mouseover(function(){
        // $('.box').animate({
        //     'top':'300px',
        //     'opacity': '0.5'
        // }, 2000);

        $(this).animate({'top':'300px'}, 2000);

    });

    $('.box').mouseout(function(){
        $(this).animate({'top': '0'});
    })



});