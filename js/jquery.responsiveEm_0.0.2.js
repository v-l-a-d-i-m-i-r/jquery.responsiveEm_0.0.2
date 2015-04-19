;(function($, undefined){
    $(document).ready(function(){
        var defaults = {
            point_1: {
                windowWidth: 1000,
                fontSize: 16
            },
            point_2: {
                windowWidth: 300,
                fontSize: 16
            },
            maxFontSize: false,
            minFontSize: false
        };
        $.fn.responsiveEm = function(params){
            var $this = this;
            var options = $.extend({}, defaults, params);
            var currentWidth, currentFont, extendFont;
            function fontCalculate(){
                currentWidth = screen.width;
                currentFont = (currentWidth - options.point_1.windowWidth) * (options.point_2.fontSize - options.point_1.fontSize) / (options.point_2.windowWidth - options.point_1.windowWidth) + options.point_1.fontSize;
                if (options.maxFontSize === false) {
                    if (options.minFontSize === false) {
                        extendFont = currentFont;
                    } else {
                        if (currentFont > options.minFontSize) {
                            extendFont = currentFont;
                        } else {
                            extendFont = options.minFontSize;
                        }
                    }
                } else {
                    if (currentFont < options.maxFontSize) {
                        if (options.minFontSize === false) {
                            extendFont = currentFont;
                        } else {
                            if (currentFont > options.minFontSize) {
                                extendFont = currentFont;
                            } else {
                                extendFont = options.minFontSize;
                            }
                        }
                    } else {
                        extendFont = options.maxFontSize;
                    }
                }
                console.log(extendFont);
                $this.css({
                    'font-size': extendFont
                });
            };
            fontCalculate();
            window.onresize = function() {
                fontCalculate();
            };
            return this;
        };
    });
})(jQuery);
