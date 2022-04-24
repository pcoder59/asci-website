$(function() {
    $.fn.isBgColor = function(color) {
        var thisBgColor = this.eq(0).css('backgroundColor');
        var computedColor = $('<div/>').css({ 
            backgroundColor: color
        }).css('backgroundColor');
        return thisBgColor === computedColor;
    }
    $('#clock').countdown('2022/05/22').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
        + '<div class="cnt"><span class="num">%D</span> Day%!d</div>'
        + '<div class="cnt"><span class="num">%H</span> Hr</div>'
        + '<div class="cnt"><span class="num">%M</span> Min</div>'
        + '<div class="cnt"><span class="num">%S</span> Sec</div>'));
    });
    $('#light').click(function(event) {
        if($(document.body).isBgColor('#000000')) {
            $(document.body).css('background-color', 'white');
            $('#light').text('Dark');
        }else {
            $(document.body).css('background-color', 'black');
            $('#light').text('Light');
        }
    });
});