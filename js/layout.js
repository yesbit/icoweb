var Layout = function () {
    'use strict';
    
    // handle on page scroll
    var handleHeaderOnScroll = function() {
        if ($(window).scrollTop() > 60) {
            $('body').addClass('page-on-scroll');
        } else {
            $('body').removeClass('page-on-scroll');
        }
    }   

    // handle carousel
    var handleCarousel = function() {
        var $item = $('.carousel .item'); 
        var $wHeight = $(window).height();
        $item.eq(0).addClass('active');
        $item.height($wHeight); 
        $item.addClass('full-screen');

        $('.carousel img').each(function() {
            var $src = $(this).attr('src');
            var $color = $(this).attr('data-color');
            // $(this).parent().css({
            //     'background-image' : 'url(' + $src + ')',
            //     'background-color' : $color
            // });
            // $(this).remove();
        });

        $(window).on('resize', function (){
            $wHeight = $(window).height();
            $item.height($wHeight);
        });
    }

    // handle group element heights
    var handleHeight = function() {
       $('[data-auto-height]').each(function() {
            var parent = $(this);
            var items = $('[data-height]', parent);
            var height = 0;
            var mode = parent.attr('data-mode');
            var offset = parseInt(parent.attr('data-offset') ? parent.attr('data-offset') : 0);

            items.each(function() {
                if ($(this).attr('data-height') == "height") {
                    $(this).css('height', '');
                } else {
                    $(this).css('min-height', '');
                }

                var height_ = (mode == 'base-height' ? $(this).outerHeight() : $(this).outerHeight(true));
                if (height_ > height) {
                    height = height_;
                }
            });

            height = height + offset;

            items.each(function() {
                if ($(this).attr('data-height') == "height") {
                    $(this).css('height', height);
                } else {
                    $(this).css('min-height', height);
                }
            });

            if(parent.attr('data-related')) {
                $(parent.attr('data-related')).css('height', parent.height());
            }
       });
    }

    
    var handleCube = function(){
        var canvasDiv = document.getElementById('particle-canvas');
        var options = {
          particleColor: '#888',
          background: '../img/bgd.jpg',
          interactive: true,
          speed: 'medium',
          density: 'high'
        };
        var particleCanvas = new ParticleNetwork(canvasDiv, options);
    }

    
    var handlePie = function(){
        var chart = AmCharts.makeChart( "chartdiv", {
            "type": "pie",
            "theme": "black",
            "dataProvider": [ {
              "country": "Lithuania",
              "value": 260
            }, {
              "country": "Ireland",
              "value": 201
            }, {
              "country": "Germany",
              "value": 65
            }, {
              "country": "Australia",
              "value": 39
            }, {
              "country": "UK",
              "value": 19
            }, {
              "country": "Latvia",
              "value": 10
            } ],
            "valueField": "value",
            "titleField": "country",
            "outlineAlpha": 0.4,
            "depth3D": 15,
            "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
            "angle": 30,
            "export": {
              "enabled": false
            }
        });
    }
    
    return {
        init: function () {
            handleHeaderOnScroll(); // initial setup for fixed header
            handleCarousel(); // initial setup for carousel
            handleHeight(); // initial setup for group element height
            handleCube(); //canvas initialisation
            handlePie(); //piechart initialisation
            // handle minimized header on page scroll
            $(window).scroll(function() {
                handleHeaderOnScroll();
            });
        }
    };
}();

$('a[href^="#"]').click(function() {
      var target = $(this.hash);
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
});

$(document).ready(function() {
    Layout.init();
});