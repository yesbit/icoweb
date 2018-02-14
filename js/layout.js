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
          background: 'https://raw.githubusercontent.com/yesbit/icoweb/master/img/bgd.jpg',
          interactive: true,
          speed: 'medium',
          density: 'high'
        };
        var particleCanvas = new ParticleNetwork(canvasDiv, options);
    }

    
    var handlePie = function(){
        var pieChart = AmCharts.makeChart( "pieChart", {
            "type": "pie",
            "theme": "black",
            "dataProvider": [ {
              "group": "Found Raising",
              "value": .4,
              "showInLegend": true
            }, {
              "group": "Team",
              "value": .3,
              "showInLegend": true
            }, {
              "group": "Derivatives Foundation",
              "value": .2,
              "showInLegend": true
            }, {
              "group": "Community Contributors",
              "value": .1,
              "showInLegend": true
            }],
            "valueField": "value",
            "titleField": "group",
            "outlineAlpha": 0.4,
            "depth3D": 15,
            "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
            "angle": 30,
            "export": {
              "enabled": false
            },
            "hideCredits": true,
            "marginTop": 0,
            "visibleInLegendField": "showInLegend",
            "legend": {
                "markerType": "circle",
                "markerColor": "transparent",
                "align": "center",
                "divId": "legendDiv",

            },
            "minRadius": 40,
            "maxLabelWidth": 100
        });
    }
    


    var handleLine = function(){
        function generateChartData() {
            var chartData = [];
            var firstDate = new Date();
            firstDate.setDate(firstDate.getDate() - 365);

                var USD = 1600;
                var BTC = 1600;

            for (var i = 0; i < 100; i++) {
                // we create date objects here. In your data, you can have date strings
                // and then set format of your dates using chart.dataDateFormat property,
                // however when possible, use date objects, as this will speed up chart rendering.
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);

                USD += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
                BTC += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
                chartData.push({
                    date: newDate,
                    USD: USD,
                    BTC: BTC
                });
            }
            return chartData;
        }
        var chartData = generateChartData();
        var lineChart = AmCharts.makeChart( "lineChart", {
            "type": "serial",
            "theme": "black",
            "marginRight": 80,
            "dataProvider": chartData,
            "valueAxes": [{
                    "id":"v1",
                    "axisColor": "#FF6600",
                    "axisThickness": 2,
                    "axisAlpha": 1,
                    "position": "left",
                    "max": 1800
                }],
            "graphs": [{
                "valueAxis": "v1",
                "lineColor": "#FF6600",
                "bullet": "round",
                "bulletBorderThickness": 1,
                "hideBulletsCount": 30,
                "title": "BTC",
                "valueField": "BTC",
                "fillAlphas": 0,
                "type": "smoothedLine"
            }, {
                "valueAxis": "v1",
                "lineColor": "#FCD202",
                "bullet": "square",
                "bulletBorderThickness": 1,
                "hideBulletsCount": 30,
                "title": "USD",
                "valueField": "USD",
                "fillAlphas": 0,
                "type": "smoothedLine"
            }],
            "chartScrollbar": {
                "enabled": false
            },
            "chartCursor": {
                "cursorPosition": "mouse"
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "axisColor": "#DADADA",
                "minorGridEnabled": true,
                "equalSpacing": false,
                "twoLineMode": true
            },
            "hideCredits": true,
            "pulledField": "pullOut",
            "legend": {
                "markerType": "circle",
                "markerColor": "transparent",
                "align": "center"
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
            handleLine();
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