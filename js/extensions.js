var SemanticUIColors = "red orange yellow olive green teal blue violet purple pink brown".split(" ");

function randomInt(a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    return random = Math.floor(Math.random() * (b - a)) + a;
  }
  
function setSemanticUIColor() {
    for (var a = [$(".dream-tags")], b = 0; b < a.length; b++) {
        a[b].children().map(function() {
            $(this).addClass(SemanticUIColors[randomInt(0, SemanticUIColors.length)]);
        });
    }
}

$(document).ready(function() {
    setSemanticUIColor(); 
    $('div .overflow').each(function() { 
        $(this).wrapInner('<div class="check" />'); 
    });
    $('.poptext').each(function() { 
        $(this).wrap('<div style="display:none"></div>');
    });
    $('.popsym').each(function() {
        $(this).addClass('popitem');
        var refID = $(this).attr('pref');
        if (typeof refID !== typeof undefined && refID !== false) {
            $(this).attr('data-tooltip-content', '#' + refID);
            $(this).removeAttr('pref');
        }
        $(this).prepend('<a class="fa fa-question-circle-o image" aria-hidden="true"/>'); 
    });
    $('.popitem').tooltipster({
        theme: 'tooltipster-borderless',
        trigger: 'click',
        animation: 'grow',
        contentCloning: true,
        maxWidth: 400
    });
    
    /*var productPopUp = $('div .popup');
    productPopUp.find('.popuptext').autoposition($("body"));  
    productPopUp.click(function () {
        var popText = $(this).find('.popuptext');
        popText.toggleClass('show');
    });*/
});
    