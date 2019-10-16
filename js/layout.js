var Layout = function () {
    'use strict';


    var arrlang = {
        "en": {
            "关于YESBIT": "INTRODUCING YESBIT",
            "开发区块链技术解决方案": "Develope the Technical Support on Blockchain",
            "Yesbit是一家在多伦多的科技公司，专注于区块链技术与加密货币改善及研发。我们同时运营一家OTC加密货币交易平台、自主研发克拉猫预言机（ERC1973），以及提供区块链开发技术服务。":
                "Yesbit is a Toronto-based company focusing on the Blockchain technology and cryptocurrency usage, we run an OTC trading platform called LinkCoin, develope a KrawlCat protocol with ERC 1973, and provide the Blockchain technical support.",
            "LinkCoin": "LinkCoin",
            "OTC 加密货币交易平台": "OTC Fiat-Crypto Trading platform",
            "克拉猫": "KrawlCat",
            "区块链预言机": "Generalized Oracles for Blockchain",
            "技术支持": "Technical Support",
            "提供专业开发服务": "Professional development service",
            "了解我们": "KNOW MORE ABOUT WHAT WE DO",
            "OTC交易所·预言机·技术支持": "OTC EXCHANGE·PROTOCOL·TECHNICAL SUPPORT",
            "LinkCoin": "LinkCoin",
            "OTC加密货币交易平台": "Fiat-Crypto OTC trading platform",
            "可使用法定货币交易加密货币，7天24小时在线客服全方位保障您的财产安全。LinkCoin是Bibox的战略合作伙伴，用户可在两平台间无手续费进行资产一键划转。": "Fiat-currency can be used during the crypto trading. The 24/7 customer service is provided to protect every user's funds. LinkCoin is the strategic partner of Bibox exchange. Users can transfer their funds on LinkCoin and Bibox with no fees.",
            "访问LinkCoin": "Go to LinkCoin",
            "克拉猫": "KrawlCat",
            "区块链预言机 ": "A Generalized Oracle for Blockchains",
            "克拉猫区块链预言机填补连接了目前由于互联网与封闭式区块链协议的制式不同导致的信息断层，将链下数据传输上链。此外，其可广泛运用的性质还允许了不同区块链协议间的信息沟通。": "KrawlCat Generalized Oracles bridges the gap between the current internet infrastructure and closed blockchain networks by bringing off-chain data to on-chain. Moreover, its generalized nature allows it to facilitate cross chain communication between solitary blockchain protocols.",
            "访问克拉猫": "Go to KrawlCat",
            "技术支持": "Technical Support",
            "专业区块链技术服务": "The professional Blockchain development service",
            "联系我们": "Contact us",
            "加入我们": "JOIN US",
            "与我们一起，造就更多可能": "We are always looking for the talented people to join our team!",
            "查看职位": "See our available positions",
            "公司地址: 1220, 央街5255号， 多伦多，安大略省， 加拿大": "Address: Unit 1220, 5255 Yonge Street, Toronto, ON, Canada",
            "Copyright © 2019-2020 Yesbit Technology Ltd.": "Copyright © 2019-2020 Yesbit Technology Ltd."
        },
        "cn": {
            "INTRODUCING YESBIT": "关于YESBIT",
            "Develope the Technical Support on Blockchain": "开发区块链技术解决方案",
            "Yesbit is a Toronto-based company focusing on the Blockchain technology and cryptocurrency usage, we run an OTC trading platform called LinkCoin, develope a KrawlCat protocol with ERC 1973, and provide the Blockchain technical support.": "Yesbit是一家在多伦多的科技公司，专注于区块链技术与加密货币改善及研发。我们同时运营一家OTC加密货币交易平台、自主研发克拉猫预言机（ERC1973），以及提供区块链开发技术服务。",
            "LinkCoin": "LinkCoin",
            "OTC Fiat-Crypto Trading platform": "OTC 加密货币交易平台",
            "KrawlCat": "克拉猫",
            "Generalized Oracles for Blockchain": "区块链预言机",
            "Technical Support": "技术支持",
            "The professional technical development service": "提供专业开发服务",
            "KNOW MORE ABOUT WHAT WE DO": "了解我们",
            "OTC EXCHANGE·PROTOCOL·TECHNICAL SUPPORT": "OTC交易所·预言机·技术支持",
            "LinkCoin": "LinkCoin",
            "Fiat-Crypto OTC trading platform": "OTC加密货币交易平台",
            "Fiat-currency can be used during the crypto trading. The 24/7 customer service is provided to protect every user's funds. LinkCoin is the strategic partner of Bibox exchange. Users can transfer their funds on LinkCoin and Bibox with no fees.":
                "可使用法定货币交易加密货币，7天24小时在线客服全方位保障您的财产安全。LinkCoin是Bibox的战略合作伙伴，用户可在两平台间无手续费进行资产一键划转。",
            "Go to LinkCoin": "访问LinkCoin",
            "KrawlCat": "克拉猫",
            "A Generalized Oracle for Blockchains": "区块链预言机 ",
            "KrawlCat Generalized Oracles bridges the gap between the current internet infrastructure and closed blockchain networks by bringing off-chain data to on-chain. Moreover, its generalized nature allows it to facilitate cross chain communication between solitary blockchain protocols.":
                "克拉猫区块链预言机填补连接了目前由于互联网与封闭式区块链协议的制式不同导致的信息断层，将链下数据传输上链。此外，其可广泛运用的性质还允许了不同区块链协议间的信息沟通。",
            "Go to KrawlCat": "访问克拉猫",
            "Technical Support": "技术支持",
            "The professional Blockchain development service": "专业区块链技术服务",
            "Contact us": "联系我们",
            "JOIN US": "加入我们",
            "We are always looking for the talented people to join our team!": "与我们一起，造就更多可能",
            "See our available positions": "查看职位",
            "Address: Unit 1220, 5255 Yonge Street, Toronto, ON, Canada": "公司地址: 1220, 央街5255号， 多伦多，安大略省， 加拿大",
            "Copyright © 2019-2020 Yesbit Technology Ltd.": "Copyright © 2019-2020 Yesbit Technology Ltd."
        }
    }


    var data = {
        "nav": [
            {
                "en": "HOME",
                "cn": "首页"
            },
            // {
            //     "en": "WHITE PAPERS",
            //     "cn": "白皮书"
            // },
            {
                "en": "ABOUT US",
                "cn": "关于YESBIT"
            },
            {
                "en": "PROJECTS",
                "cn": "产品"
            },
            {
                "en": "Career",
                "cn": "加入我们"
            },
            {   "en": "PRESS KIT",
                "cn": "媒体资料包"
            }
        ],
        "banner": {
            "title": {
                "en": "Develope the Technical Support on Blockchain",
                "cn": "开发区块链技术解决方案"
            },
            "button": [
                // {
                //     "en": "Whitepaper",
                //     "cn": "白皮书"
                // },
                {
                    "en": "Go to LinkCoin",
                    "cn": "前往LinkCoin"
                },
                {
                    "en": "Go to KrawlCat",
                    "cn": "前往克拉猫"
                },
                {
                    "en": "Contact us",
                    "cn": "联系我们"
                },
            ]
        },
        "team": {}
    };


    // handle on page scroll
    var handleHeaderOnScroll = function () {
        if ($(window).scrollTop() > 60) {
            $('body').addClass('page-on-scroll');
        } else {
            $('body').removeClass('page-on-scroll');
        }
    }

    // handle carousel
    var handleCarousel = function () {
        var $item = $('.carousel .item');
        var $wHeight = $(window).height();
        $item.eq(0).addClass('active');
        $item.height($wHeight);
        $item.addClass('full-screen');

        $('.carousel img').each(function () {
            var $src = $(this).attr('src');
            var $color = $(this).attr('data-color');
            // $(this).parent().css({
            //     'background-image' : 'url(' + $src + ')',
            //     'background-color' : $color
            // });
            // $(this).remove();
        });

        $(window).on('resize', function () {
            $wHeight = $(window).height();
            $item.height($wHeight);
        });
    }

    // handle group element heights
    var handleHeight = function () {
        $('[data-auto-height]').each(function () {
            var parent = $(this);
            var items = $('[data-height]', parent);
            var height = 0;
            var mode = parent.attr('data-mode');
            var offset = parseInt(parent.attr('data-offset') ? parent.attr('data-offset') : 0);

            items.each(function () {
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

            items.each(function () {
                if ($(this).attr('data-height') == "height") {
                    $(this).css('height', height);
                } else {
                    $(this).css('min-height', height);
                }
            });

            if (parent.attr('data-related')) {
                $(parent.attr('data-related')).css('height', parent.height());
            }
        });
    }

    var handleCube = function () {
        var canvasDiv = document.getElementById('particle-canvas');
        var options = {
            //   particleColor: '#888',
            background: './img/bgd.jpg',
            //   interactive: true,
            //   speed: 'slow',
            //   density: 'high'
        };
        var particleCanvas = new ParticleNetwork(canvasDiv, options);
    }

    var handleData = function () {
        //switch language
        var i;
        var toggle = document.getElementsByClassName("lang-icon");
        var lang;
        for (i = 0; i < toggle.length; i++) {
            toggle[i].addEventListener("click", function () {
                var en = this.parentElement.children[0];
                var cn = this.parentElement.children[1];
                if (en.style.display == "inline-block") {
                    cn.style.display = "inline-block";
                    en.style.display = "none";
                    lang = "cn";
                    document.getElementById("lang-btn").childNodes[0].nodeValue = "选择语言:"
                }
                else {
                    en.style.display = "inline-block";
                    cn.style.display = "none";
                    lang = "en";
                    document.getElementById("lang-btn").childNodes[0].nodeValue = "LAN SWITCH:"
                }
                //render data
                if (lang == "cn") {
                    console.log("now we are in cn " + lang);
                    //banner
                    document.getElementById("title-full").textContent = data.banner.title.cn;
                    document.getElementById("title-responsive").textContent = data.banner.title.cn;
                    //nav
                    var nav = document.getElementById("nav");
                    console.log('this is nav: ', nav)
                    for (var i = 0; i < nav.children.length - 1; i++) {
                        nav.children[i].children[0].textContent = data.nav[i].cn
                        console.log('this is current nav', nav.children[i].children[0])
                        nav.children[i].children[0].value = data.nav[i].cn

                    }
                    //intro
                    $('.lang').each(function (index, element) {
                        console.log('index, element: ', index, this.textContent, arrlang['cn'][this.textContent])
                        this.textContent = arrlang['cn'][this.textContent];
                        this.value = arrlang['cn'][this.value];
                    });


                }
                else {
                    console.log("now we are in en " + lang);
                    document.getElementById("title-full").textContent = data.banner.title.en;
                    document.getElementById("title-responsive").textContent = data.banner.title.en;

                    var nav = document.getElementById("nav");
                    for (var i = 0; i < nav.children.length - 1; i++) {
                        nav.children[i].children[0].textContent = data.nav[i].en
                        console.log('this is current nav', nav.children[i].children[0])
                        nav.children[i].children[0].value = data.nav[i].en
                    }

                    $('.lang').each(function (index, element) {
                        console.log('index, element: ', index, this.textContent, arrlang['en'][this.textContent])
                        this.textContent = arrlang['en'][this.textContent];
                        this.value = arrlang['en'][this.value];
                    });
                }
            });
        }
    }

    var handleVideo = function () {
        $(document).ready(function () {
            //control play
            $(".video-overlay-play-button").click(function () {
                if (this.style.display === "none") {
                    this.style.display = "block";

                }
                else {
                    this.style.display = "none";
                    this.parentElement.children[2].setAttribute("style", "display: none");
                    this.parentElement.children[0].play();

                }
            });
        });
    }

    var handlePie = function () {
        var pieChart = AmCharts.makeChart("pieChart", {
            "type": "pie",
            "theme": "black",
            "labelRadius": -35,
            "fontSize": 14,
            "labelText": "[[percents]]%",
            "dataProvider": [{
                "group": "Overnight Interests",
                "token": 60,
                "showInLegend": true
            }, {
                "group": "Transaction Fee",
                "token": 40,
                "showInLegend": true
            }],
            "valueField": "token",
            "titleField": "group",
            //"descriptionField": "value",
            "outlineAlpha": 0.4,
            "depth3D": 15,
            "balloonText": "[[title]]<br><span style='font-size:14px; color:#000000'><b style='color:#000000'>[[value]]</b> </span>",
            "angle": 30,
            "export": {
                "enabled": false
            },
            "hideCredits": true,
            "marginTop": 0,
            "visibleInLegendField": "showInLegend",
            "legend": {
                "enabled": true,
                "markerType": "circle",
                "markerColor": "transparent",
                "align": "center",
                "width": 100,
                "divId": "legendDiv",
                "valueWidth": 20,
                "spacing": 0
            },
            "percentFormatter": {
                "precision": 0

            },
            "minRadius": 40,
            "maxLabelWidth": 100,
            "pullOutEffect": "bounce"
        });
    }

    var handleAnimation = function () {
        AOS.init();
    }

    var handleAccordion = function () {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
            });
        }
    }

    var handleScroll = function () {
        $('.nav-scroll').localScroll();
    }

    return {
        init: function () {
            handleHeaderOnScroll(); // initial setup for fixed header
            handleCarousel(); // initial setup for carousel
            handleHeight(); // initial setup for group element height
            handleCube(); //canvas initialisation
            handleData();
            handleVideo();
            handlePie(); //piechart initialisation
            handleAnimation();
            handleAccordion();
            handleScroll();
            // handle minimized header on page scroll
            $(window).scroll(function () {
                handleHeaderOnScroll();
            });
        }
    };
}();


$(document).ready(function () {
    Layout.init();

});
