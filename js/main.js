const prevIcon = '<i class="uil uil-arrow-left"></i>';
const nextIcon = '<i class="uil uil-arrow-right"></i>';

$('.owl-carousel').owlCarousel({
    margin:40,
    lazyLoad:true,
    nav: true,
    dots: false,
    navText: [
        prevIcon,
        nextIcon
    ],
    items:4
})

$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

$(document).ready(function(){
    $(".product-box").slice(0, 8).show();
    $("#loadmore").on("click", function(e){
      e.preventDefault();
      $(".product-box:hidden").slice(0, 8).slideDown();
      if($(".product-box:hidden").length == 0) {
        $("#loadmore").text("Ürünlerin Hepsini Görüntüledin").addClass("noContent");
      }
    });
    
  })

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', ()=> {
    modal_container.classList.add('show');
});
close.addEventListener('click', ()=> {
    modal_container.classList.remove('show');
});