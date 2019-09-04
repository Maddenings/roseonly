$(function () {
    /*吸顶*/
    $(window).scroll(function () {
        let top = parseInt($(this).scrollTop());
        if (top > 120) {
            $("#ceiling").css({
                "position": "fixed",
                "top": "0",
                "z-index": "100"
            })
        } else {
            $("#ceiling").css({
                "position": "absolute",
                "top": "120px"
            })
        }
    })
    /*鼠标移到右上角的小人，显示登陆或注册页面*/
    $(".love").each(function () {
        $(this).mouseenter(function () {
            $(this).next().fadeIn(500);
            $(this).parent().mouseleave(function () {
                $(".altj").fadeOut(500);
            })
        })
    })

    /*轮播*/
    $(".atlas").children().eq(0).clone(true).appendTo($(".atlas"));

    let index = 0;
    let num = $('.atlas').children().length;
    let off = false;
    let index_s = 0;
    let timer = null;
    //移入事件
    $('.box').mouseover(function () {
        $(".pic_left").css("display", "block");
        $(".pic_right").css("display", "block");
        $(".pic_left").hover(function () {
            $(".pic_left").css({
                "background-position": "0"
            })
        }, function () {
            $(".pic_left").css({
                "background-position": "-83px"
            })
        })
        $(".pic_right").hover(function () {
            $(".pic_right").css({
                "background-position": "-35px"
            })
        }, function () {
            $(".pic_right").css({
                "background-position": "-115px"
            })
        })
    })
    //移出事件
    $('.box').mouseout(function () {
        $(".pic_left").css("display", "none");
        $(".pic_right").css("display", "none");
    })
    //点击事件
    $(".pic_left").click(function () {


        if (index == 0) {
            $('.atlas').css({
                "left": -(num - 1) * $('.box').width()
            })
            index = num - 2;
        } else {
            index--;
        }
        carousel(index);

    })
    $('.pic_right').click(function () {
        if (index == num - 1) {
            $('.atlas').css({
                "left": 0
            })
            index = 1
        } else {
            index++;
        }
        carousel(index)
    })
    //工具箱
    //轮播函数
    function carousel(index) {

        $('.atlas').stop().animate({
            "left": -index * $('.box').width()
        }, 2000)
        if (index == num - 1) {
            index_s = 0;
        } else {
            index_s = index;
        }
        $(".dot").children().each(function () {
            $(this).css("background", "#fff");
        })
        $(".dot").children().eq(index_s).css({
            "background": "#414141"
        })
        // $(".dot").children().each().click(function(){
        //     $(this) = index;
        // })
    }
    $(".log_1").click(function(){
        location.href = "login.html"
    })
    $(".log_2").click(function(){
        location.href = "registration.html"
    })

    $("#index").click(function(){
        location.href = "homePage.html"
    })
    //自动轮播
    timer = setInterval(function(){
        if (index == num - 1) {
            $('.atlas').css({
                "left": 0
            })
            index = 1
        } else {
            index++;
        }
        carousel(index)
    },4000)
    $(".box").mouseenter(function(){
        clearInterval(timer);
    })
    $(".box").mouseleave(function(){
        timer = setInterval(function(){
            if (index == num - 1) {
                $('.atlas').css({
                    "left": 0
                })
                index = 1
            } else {
                index++;
            }
            carousel(index)
        },4000)
    })
    
    $(".dot").children().each(function(){
        $(this).click(function(){
           index = $(this).index();
           carousel(index);
        })
    })

    //返回顶部
    $(window).scroll(function () {
        let top = parseInt($(this).scrollTop());
        if (top > 800) {
            $("#roof").animate({
                opacity: 'show'
              }, "slow");
        } else {
            $("#roof").animate({
                opacity: "hide"
            },"slow")
        } 
       
    })
    $("#roof").click(function(){
        $("body,html").animate({
            "scrollTop" : 0
        },1000);
        return false;
    })
    
   
})