var Layout = function () {
    'use strict';


    var arrlang = {
        "en" : {
            //intro
            "YESBIT简介" : "INTRODUCING YESBIT",
            "合约" : "CONTRACT",
            "用户可以用加密货币进行多种操作" : "Users can use cryptocurrency to",
            "• 购买金融合约" : "• Purchase financial contract",
            "• 长短期指数，期货，外币" : "• Long or short index, future, foreign exchange",
            "• 投资加密合约" : "• Invest cryptocurrency contract",
            "股票&指数" : "STOCK INDEX",
            "NASDAQ, S&P500, Dow Jones 30 DAX 等指数" : "NASDAQ, S&P500, Dow Jones 30 DAX ",
            "各国证券市场的指数" : "Other Stock market indices",
            "苹果，阿里巴巴等股票价格合约" : "Apple, Alibaba contract",
            "外汇" : "FOREIGN CURRENCY",
            "USD/JPY, USD/CAD" : "USD/JPY, USD/CAD",
            "EUR/HKD, GBP/CAD" : "EUR/HKD, GBP/CAD",
            "各种外汇价格合约" : "Other foreign exchange",
            "商品期货" : "COMMODITY FUTURE",
            "黄金，白银，各种金属期货" : "Gold and metal futures",
            "石油，天然气等能源期货" : "Oil, Gas and energy futures",
            "大豆，玉米等粮食期货" : "Rice and foodstuff futures",
            "加密货币" : "CRYPTO CONTRACT",
            "BTC/USD, ETH/USD" : "BTC/USD, ETH/USD",
            "BTC/ETH, EOS/ETH" : "BTC/ETH, EOS/ETH",
            "各类加密货币的价格合约" : "Other Altcoin price contracte",
            //video
            "用加密货币投资" : "INVESTING WITH CRYPTO",
            "比特币/以太坊的使用" : "Settlement in BTC/ETH",
            "不用担心踏空币市行情" : "No Fiat Currency",
            "YIC代币介绍" : "INTRODUCIN YIC TOKEN",
            //pie
            "在以太坊区块链上发行的YIC代币， 总量将达到2亿" : "YIC Token on Ethereum public chain, total volume is 200 million.",
            "加密货币和金融市场的盈利对比" : "Profit from Both Crypto and Financial Markets",
            //line
            "比特币对与S&P500指数的预期增值对比" : "Expected growth of the bitcoin(BTC) compares to S&P500",
            //roadmap
            "Yesbit的成长轨迹" : "Yesbit Roadmap",
            "比特币冷/热储存技术研发" : "Bitcoin Hot/Cold Server Solution",
            "PHP+JS+MySQL网页开发" : "PHP + Javascripts + Mysql website Development",
            "Java交易系统开发" : "JAVA trading System",
            "交易杠杆系统开发" : "Leverage Trading System",
            "以太坊合约匹配技术开发" : "ETH contract pair solution",
            "测试版发布" : "Beta launch!",
            //faq
            "常见问题" : "F&Q",
            "什么是Yesbit ?" : "What is Yesbit ?",
            "YesBit 是一个以合约形式来用加密货币购买 股票, 指数, 期货, 或者 外汇 甚至 加密货币自己的一个平台" : "YesBit is a platform where users can use their cryptocurrency to purchase, invest and sell financial contract, future, foreign exchange and long or short index.",
            "Yesbit的价值在于什么？" : "What's the value of Yesbit?",
            "加密货币的金融属性还处于非常原始的水平，Yesbit打通了加密货币和传统金融产品的通道，是具有里程碑意义的突破。" : "We build a bridge between cryptocurrency and financial derivatives, where nobody has ever made it.",
            "Yesbit的区块链价值在于什么？" : "What's the value of Yesbit in terms of information ?",
            "传统交易平台是中心化的，因此需要一个高度保密的中心数据库来储存交易信息。Yesbit将核心交易信息记录在以太坊网络中，由全网验证，完全透明，100%将被结算，零风险。" : "Centralized platform need a database to store all their information, while we don't need a database, because the contract is stored on everyone's computer, 100% transparent and surely to be settled.",
            "这是一个去中心化平台吗？" : "Is it a decentralized platform ?",
            "是的。用户将使用智能合约，共享全网计算机算力。" : "Yes, users will have to use our smart contract, so that billions of computers can prove this process.",
            "Yesbit会创建自己的链吗？" : "Will Yesbit create its own chain ?",
            "会考虑采用类似于EOS超级节点的方式开发金融衍生品智能主链" : "We will.The chain will be used mainly for financial derivatives, structured with super-nodes, similarly to EOS main chain.",
            "进一步解释上一个问题？" : "Explain more about the previous question ?",
            "会考虑采用类似于EOS超级节点的方式开发金融衍生品智能主链。" : "As the principle of decentralization, any transactions would be validated by millions of Computers. If we launched our chain with little computing power, there is risk of being overridden by stronger power.",
            "Yesbit将支持其他金融产品吗？" : "Does Yesbit support other financial product ?",
            "会的。我们的终极目标是建立一个使用虚拟货币交易金融产品的平台，当前买卖美股指数仅仅是前期实验性功能，我们将不断开发新功能以对接更多金融产品。" : "Yes, our ultimate goal is to build a platform for finance companies to issue and sell their financial derivatives. NASDAQ index contract is used for development experiments, and we will support more kinds of products.",
            "为什么我们需要ICO？" : "Why do you need an ICO ?",
            "Token拥有金融价值，因此Token的早期持有者就是Yesbit平台的早期投资人。另外，Token也是公司产品的一种流通手段，所以Token持有者将是平台早期的潜在用户群。" : "Token possess both utility and financing property. Token holders are actually share holders and benefit from Yesbit growing. Token is also used as means of circulation, which indicates ico investors could be potential early stage users.",
            "目前公司的开发进度如何？" : "What's the development progress ?",
            "我们已经成功实现了用比特币做空做多纳斯达克和标普500，欢迎大家在我们的官网进行体验。 https://pro.yesbit.ca/ 公司正在开发智能合约版本。" : "We have already made a centralized version where users can place long or short on NASDAQ and S&P500, you can try our demo at https:pro.yesbit.ca/lang/en We are developing the smart contract.",
            "政策将对Yesbit有什么影响？" : "How will the regulation affect Yesbit ?",
            "老实说，我们无法做过多评论。区块链技术是非常新锐的技术，将对很多产业带来颠覆性的革命尤其是金融，各国政府也都在探索和挖掘区块链技术的可能性。我们的法律顾问团队有丰富的从业经验和对区块链深刻的理解，因此我们将密切关注法规动向，同时稳步推进我们的重磅产品。" : "Blockchain is cutting-edge technology, and everyone is exploring its possibility. We have advisor team who masters both law and Blockchain principle, so we will advance steady and stable.",
            //footer
            "关于我们" : "About",
            "我们的团队" : "Team",
            "最新动态" : "Update",
            "我们的足迹" : "Roadmap",
            "联系我们" : "Contacts",
            "订阅" : "Newsletter",
            "新闻" : "News",
            "白皮书" : "Whitepaper",
            "代币" : "Token",
            "测试版" : "Beta Test",
            "订阅" : "Subscribe",
            //team
            "我们的团队" : "Yesbit Team",
            "Yesbit 总裁" : "Yesbit CEO",
            "业务总监" : "Director of Business",
            "区块链基金总监" : "Director of Blockchain Fund",
            "高级项目经理" : "Senior PM Developer",
            "开发人员" : "Developer",
            "市场运营" : "Operation and Marketing",
            "加密货币博览会成员" : "Cryptocurrency World Expo",
            "谷歌软件工程师" : "Google Software Engineer",
            "Ryatta Group主席" : "President at Ryatta Group",
            "Blockchain Mind创始人" : "Founder of Blockchain Mind",
            "区块链投资人" : "Blockchain Angle Investor",
            "Yesbit有限责任公司 2018" : "2018 Yesbit Ltd"
 
        },
        "cn" : {
            //intro
            "INTRODUCING YESBIT" : "YESBIT简介",
            "CONTRACT" : "合约",
            "Users can use cryptocurrency to" : "用户可以用加密货币进行多种操作",
            "• Purchase financial contract" : "• 购买金融合约",
            "• Long or short index, future, foreign exchange" : "• 长短期指数，期货，外币",
            "• Invest cryptocurrency contract" : "• 投资加密合约",
            "STOCK INDEX" : "股票&指数",
            "Other Stock market indices" : "各国证券市场的指数",
            "Apple, Alibaba contract" : "苹果，阿里巴巴等股票价格合约",
            "FOREIGN CURRENCY" : "外汇",
            "USD/JPY, USD/CAD" : "USD/JPY, USD/CAD",
            "EUR/HKD, GBP/CAD" : "EUR/HKD, GBP/CAD",
            "Other foreign exchange" : "各种外汇价格合约",
            "COMMODITY FUTURE" : "商品期货",
            "Gold and metal futures" : "黄金，白银，各种金属期货",
            "Oil, Gas and energy futures" : "石油，天然气等能源期货",
            "Rice and foodstuff futures" : "大豆，玉米等粮食期货",
            "CRYPTO CONTRACT" : "加密货币",
            "BTC/USD, ETH/USD" : "BTC/USD, ETH/USD",
            "BTC/ETH, EOS/ETH" : "BTC/ETH, EOS/ETH",
            "Other Altcoin price contracte" : "各类加密货币的价格合约",
            //video
            "INVESTING WITH CRYPTO" : "用加密货币投资",
            "Settlement in BTC/ETH" : "比特币/以太坊的使用",
            "No Fiat Currency" : "不用担心踏空币市行情",
            //pie
            "INTRODUCING YIC TOKEN" : "YIC代币介绍",
            "YIC Token on Ethereum public chain, total volume is 200 million." : "在以太坊区块链上发行的YIC代币， 总量将达到2亿",
            "Profit from Both Crypto and Financial Markets" : "加密货币和金融市场的盈利对比",
            //line
            "Expected growth of the bitcoin(BTC) compares to S&P500" : "比特币对与S&P500指数的预期增值对比",
            //roadmap
            "Yesbit Roadmap" : "Yesbit的成长轨迹",
            "Bitcoin Hot/Cold Server Solution" : "比特币冷/热储存技术研发",
            "PHP + Javascripts + Mysql website Development" : "PHP+JS+MySQL网页开发",
            "JAVA trading System" : "Java交易系统开发",
            "Leverage Trading System" : "交易杠杆系统开发",
            "ETH contract pair solution" : "以太坊合约匹配技术开发",
            "Beta launch!" : "测试版发布",
            //faq
            "F&Q" : "常见问题",
            "What is Yesbit ?" : "什么是Yesbit ?",
            "YesBit is a platform where users can use their cryptocurrency to purchase, invest and sell financial contract, future, foreign exchange and long or short index." : "YesBit 是一个以合约形式来用加密货币购买 股票, 指数, 期货, 或者 外汇 甚至 加密货币自己的一个平台",
            "What's the value of Yesbit?" : "Yesbit的价值在于什么？",
            "We build a bridge between cryptocurrency and financial derivatives, where nobody has ever made it." : "加密货币的金融属性还处于非常原始的水平，Yesbit打通了加密货币和传统金融产品的通道，是具有里程碑意义的突破。",
            "What's the value of Yesbit in terms of information ?" : "Yesbit的区块链价值在于什么？",
            "Centralized platform need a database to store all their information, while we don't need a database, because the contract is stored on everyone's computer, 100% transparent and surely to be settled." : "传统交易平台是中心化的，因此需要一个高度保密的中心数据库来储存交易信息。Yesbit将核心交易信息记录在以太坊网络中，由全网验证，完全透明，100%将被结算，零风险。",
            "Is it a decentralized platform ?" : "这是一个去中心化平台吗？",
            "Yes, users will have to use our smart contract, so that billions of computers can prove this process." : "是的。用户将使用智能合约，共享全网计算机算力。",
            "Will Yesbit create its own chain ?" : "Yesbit会创建自己的链吗？",
            "We will.The chain will be used mainly for financial derivatives, structured with super-nodes, similarly to EOS main chain." : "会考虑采用类似于EOS超级节点的方式开发金融衍生品智能主链",
            "Explain more about the previous question ?" : "进一步解释上一个问题？",
            "As the principle of decentralization, any transactions would be validated by millions of Computers. If we launched our chain with little computing power, there is risk of being overridden by stronger power." : "会考虑采用类似于EOS超级节点的方式开发金融衍生品智能主链。",
            "Does Yesbit support other financial product ?" : "Yesbit将支持其他金融产品吗？",
            "Yes, our ultimate goal is to build a platform for finance companies to issue and sell their financial derivatives. NASDAQ index contract is used for development experiments, and we will support more kinds of products." : "会的。我们的终极目标是建立一个使用虚拟货币交易金融产品的平台，当前买卖美股指数仅仅是前期实验性功能，我们将不断开发新功能以对接更多金融产品。",
            "Why do you need an ICO ?" : "为什么我们需要ICO？",
            "Token possess both utility and financing property. Token holders are actually share holders and benefit from Yesbit growing. Token is also used as means of circulation, which indicates ico investors could be potential early stage users." : "Token拥有金融价值，因此Token的早期持有者就是Yesbit平台的早期投资人。另外，Token也是公司产品的一种流通手段，所以Token持有者将是平台早期的潜在用户群。",
            "What's the development progress ?" : "目前公司的开发进度如何？",
            "We have already made a centralized version where users can place long or short on NASDAQ and S&P500, you can try our demo at https:pro.yesbit.ca/lang/en We are developing the smart contract." : "我们已经成功实现了用比特币做空做多纳斯达克和标普500，欢迎大家在我们的官网进行体验。 https://pro.yesbit.ca/ 公司正在开发智能合约版本。",
            "How will the regulation affect Yesbit ?" : "政策将对Yesbit有什么影响？",
            "Blockchain is cutting-edge technology, and everyone is exploring its possibility. We have advisor team who masters both law and Blockchain principle, so we will advance steady and stable." : "老实说，我们无法做过多评论。区块链技术是非常新锐的技术，将对很多产业带来颠覆性的革命尤其是金融，各国政府也都在探索和挖掘区块链技术的可能性。我们的法律顾问团队有丰富的从业经验和对区块链深刻的理解，因此我们将密切关注法规动向，同时稳步推进我们的重磅产品。",
            //footer
            "About" : "关于我们",
            "Team" : "我们的团队",
            "Update" : "最新动态",
            "Roadmap" : "我们的足迹",
            "Contacts" : "联系我们",
            "Newsletter" : "订阅",
            "News" : "新闻",
            "Whitepaper" : "白皮书",
            "Token" : "代币",
            "Beta Test" : "测试版",
            "Subscribe" : "订阅",
            "Yesbit Team" : "我们的团队",
            "Yesbit CEO" : "Yesbit 总裁",
            "Director of Business" : "业务总监",
            "Director of Blockchain Fund" : "区块链基金总监",
            "Senior PM Developer" : "高级项目经理",
            "Developer" : "开发人员",
            "Operation and Marketing" : "市场运营",
            "Cryptocurrency World Expo" : "加密货币博览会成员",
            "Google Software Engineer" : "谷歌软件工程师",
            "President at Ryatta Group" : "Ryatta Group主席",
            "Founder of Blockchain Mind" : "Blockchain Mind创始人",
            "Blockchain Angle Investor" : "区块链投资人",
            "2018 Yesbit Ltd" : "Yesbit有限责任公司 2018"

        }
    }


    var data = {
        "nav": [
            {
                "en": "HOME",
                "cn": "首页"
            },
            {
                "en": "WHITE PAPERS",
                "cn": "白皮书"
            },
            {
                "en": "KYC",
                "cn": "认证"
            },
            {
                "en": "SUBSCRIPTION",
                "cn": "订阅"
            },
            {
                "en": "VIDEO",
                "cn": "视频介绍"
            }
        ],
        "banner": {
            "title": {
                "en": "Use your cryptocurrency to purchase financial contract",
                "cn": "用加密货币购买金融合约"
            },
            "button": [
            {
                "en": "Whitepaper",
                "cn": "白皮书"
            },
            {
                "en": "Try Beta Test",
                "cn": "测试版"
            }
            ]
        },
        "team": {}
    };


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

    var handleData = function() {
        //switch language
        var i;
        var toggle = document.getElementsByClassName("lang-icon");
        var lang;
        for (i = 0; i < toggle.length; i++) {
            toggle[i].addEventListener("click", function() {
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
                    document.getElementById("banner-btn1").textContent = data.banner.button[0].cn;
                    document.getElementById("banner-btn2").textContent = data.banner.button[1].cn;
                    //nav
                    var nav = document.getElementById("nav");
                    for (var i = 0; i < nav.children.length - 2; i++ ){
                        nav.children[i].children[0].textContent = data.nav[i].cn
                        
                    }
                    //intro
                    $('.lang').each(function(index, element) {
                        this.textContent = arrlang['cn'][this.textContent];
                    });


                }

                else {
                    console.log("now we are in en " + lang);
                    document.getElementById("title-full").textContent = data.banner.title.en;
                    document.getElementById("title-responsive").textContent = data.banner.title.en;
                    document.getElementById("banner-btn1").textContent = data.banner.button[0].en;
                    document.getElementById("banner-btn2").textContent = data.banner.button[1].en;

                    var nav = document.getElementById("nav");
                    for (var i = 0; i < nav.children.length - 2; i++ ){
                        nav.children[i].children[0].textContent = data.nav[i].en
                        
                    }

                    $('.lang').each(function(index, element) {
                        // console.log("we are changing to cn " + this.textContent + arrlang['en'][this.textContent])
                        this.textContent = arrlang['en'][this.textContent];
                    });
                }
            });
        }
        

    }

    var handleVideo = function(){ 
        $(document).ready(function(){
            //control play 
            $(".video-overlay-play-button").click(function() {   
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
                "valueWidth": 14,
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

    var handleAnimation = function() {
        AOS.init();
    }

    var handleAccordion = function() {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
            });
        }
    }

    var handleScroll = function() {
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
            handleLine();
            handleAnimation();
            handleAccordion();
            handleScroll();
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
