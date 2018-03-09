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
          speed: 'slow',
          density: 'high'
        };
        var particleCanvas = new ParticleNetwork(canvasDiv, options);
    }

    
    var handlePie = function(){
        var pieChart = AmCharts.makeChart( "pieChart", {
            "type": "pie",
            "theme": "black",
            "labelRadius": -35,
            "fontSize": 14,
            "labelText": "[[percents]]%",
            "dataProvider": [ {
              "group": "Fund Raising (Million tokens)",
              "token": 80,
             // "value": "Million Tokens",
              "showInLegend": true
            }, {
              "group": "Team",
              "token": 60,
             // "value": "Million Tokens",
              "showInLegend": true
            }, {
              "group": "Derivatives Foundation",
              "token": 40,
              //"value": "Million Tokens",
              "showInLegend": true
            }, {
              "group": "Community Contributors",
              "token": 20,
              //"value": "Million Tokens",
              "showInLegend": true
            }],
            "valueField": "token",
            "titleField": "group",
            //"descriptionField": "value",
            "outlineAlpha": 0.4,
            "depth3D": 15,
            "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> </span>",
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
                "divId": "legendDiv"
            },
            "percentFormatter": {
				"precision": 0
				
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

                var SP500Index = 0;
                var BTC = 0;

            for (var i = 0; i < 100; i++) {
                // we create date objects here. In your data, you can have date strings
                // and then set format of your dates using chart.dataDateFormat property,
                // however when possible, use date objects, as this will speed up chart rendering.
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);

                SP500Index += Math.round((Math.random()<0.53?1:-1)*Math.random()*10);
                BTC += Math.round((Math.random()<0.6?1:-1)*Math.random()*10);
                chartData.push({
                    date: newDate,
                    SP500Index: SP500Index,
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
                "title": "S&P 500 Index",
                "valueField": "SP500Index",
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

    var handleVideo = function(){ 
        $(document).ready(function(){
            //control play 
            $(".video-overlay-play-button").click(function() {   
                if (this.style.display === "none") {
                    this.style.display = "block";
                    this.video.play();
                } else {
                    this.style.display = "none";
                }             
            });
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
            handleVideo();
            // handle minimized header on page scroll
            $(window).scroll(function() {
                handleHeaderOnScroll();
            });
        }
    };
}();


$(document).ready(function() {
    Layout.init();

});