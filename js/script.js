
$(document).ready(function () {
    $('.navbar .nav-custom li a').hover(
        function () {
			var navfixed = $('.navigation').hasClass('navigation-fixed');
			if(navfixed==true){
				$('.navigation').removeClass('MegamenuActive');
				$('.ColorIconDiv').show();
				$('.WhiteIconDiv').hide();
			} 
		   else{
			   $('.navigation').addClass('MegamenuActive');
				$('.ColorIconDiv').show();
				$('.WhiteIconDiv').hide();
		   }
        },
        function () {
            $('.navigation').removeClass('MegamenuActive');
            $('.ColorIconDiv').hide();
            $('.WhiteIconDiv').show();
        }
    );
    $('.dropdown-toggle[data-toggle=dropdown]').on('click', function (event) {
        // Avoid following the href location when clicking
        event.preventDefault();
        // Avoid having the menu to close when clicking
        event.stopPropagation();
        // If a menu is already open we close it
        $('li.dropdown').parent().removeClass('open');
        // opening the one you clicked on
        $(this).parent().addClass('open');
    });
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
        // Avoid following the href location when clicking
        event.preventDefault();
        // Avoid having the menu to close when clicking
        event.stopPropagation();
        // If a menu is already open we close it
        $('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
        // opening the one you clicked on
        $(this).parent().addClass('open');
    });	
    $('ul.dropdown-menu li a[target=_blank]').on('click', function (event) {
        
        // Avoid having the menu to close when clicking
        event.stopPropagation();
       
    });	
});
/*navigation Scroll*/
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
        $('.navigation').addClass('navigation-fixed');
    }
    else {
        $('.navigation').removeClass('navigation-fixed');
    }
});
$('.carousel[data-type="multi"] .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 4; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});
$(function () {
    $(".navbar .dropdown").hover(
        function () {
            $('#products-menu.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).toggleClass('open');
        },
        function () {
            $('#products-menu.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).toggleClass('open');
        });
});