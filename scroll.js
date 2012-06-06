/**
    Scroll.JS By - S.Stratis
    Ver.1.0

- looking to add for ver. 1.1 
    - Option for container you want to scroll through
    - Option to set weather the scroll acts on hover or on click 

**/

$.fn.scroller = function (options) {
    //structure the function calls and set speed of the scroll
    var options = $.extend({
        step: 50,       // step equals speed defaults at 50  
        up: '#up',      //provide an ID that you want to act as the scroll up button
        down: '#down'   //provide the ID for the down button
    }, options);

    return this.each(function () {

        var scrolling = false;
        var scrollCont = this;

        //sets the srolling of the specified content area
        var scrollContent = function (direction) {
            var amount = (direction === "up" ? "-=1px" : "+=1px");
            $(scrollCont).animate({
                scrollTop: amount
            }, 1, function () {
                if (scrolling) {
                    scrollContent(direction);
                }
            });
        }
        
        //sets the hover event on up
        $(options.up).hover(function () {
            scrolling = true;
            scrollContent('up');
        }, function () {
            scrolling = false;
        });

        //sets the hover event on down
        $(options.down).hover(function () {
            scrolling = true;
            scrollContent('down');
        }, function () {
            scrolling = false;
        });
    });
};

