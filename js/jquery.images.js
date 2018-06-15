$('body').append('<div class="product-image-overlay"><span class="product-image-overlay-close"></span><img src="" data-zoom-image=""/></div>');
var productParent = $('img').parent(':not(span.image.main):not(a)');
var productImage = productParent.find('img');
var productOverlay = $('.product-image-overlay');
var productOverlayImage = $('.product-image-overlay img');
productImage.addClass("show_img");

productImage.click(function () {
    var productImageSource = $(this).attr('src');
    productImage.removeClass('show_img');

    $('#header').addClass('alt');

    productOverlayImage.attr('src', productImageSource);
    if($(window).width()>768){
        productOverlayImage.attr('data-zoom-image', productImageSource);
        productOverlayImage.elevateZoom({
            zoomType:'inner', 
            cursor: 'crosshair', 
            scrollZoom : true,
            responsive : true,
            zoomWindowFadeIn: 300,
			zoomWindowFadeOut: 300,
			lensFadeIn: 300,
			lensFadeOut: 300
        });
    }

    productOverlay.fadeIn(300);
    $('body').css('overflow', 'hidden');

    $('.product-image-overlay-close').click(function () {
        productOverlay.fadeOut(300);
        productImage.addClass('show_img');
        $('body').css('overflow', 'auto');
        $('#header').removeClass('alt');
        $('.zoomContainer').remove();
        productOverlayImage.removeData('elevateZoom');
        productOverlayImage.removeData('zoomImage');
    });
});

function newFunction() {
    return 'alt';
}
