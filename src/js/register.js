$(function () {
    //注册账号
    //验证手机号
    //给创建账号添加点击事件

    $(".shouji").blur(function () {
        let str = $(this).val();
        let re = /0?(13|14|15|17|18|19)[0-9]{9}/;
        if (str == "" || str == null) {
            $(".shouji_1").html("手机号不能位空");
        } else if (re.test(str)) {
            $(".shouji_1").html("");
        } else {
            $(".shouji_1").html("请输入正确的手机号")
        }
    })
    //验证图片验证码
    $(".tpyzm").blur(function () {
        let str = $(this).val();
        let re = /^(3768)$/;
        if (str == "" || str == null) {
            $(".tpyzm_1").html("请输入四位图片验证码")
        } else if (re.test(str)) {
            $(".tpyzm_1").html("")
        } else {
            $(".tpyzm_1").html("请输入正确的图片验证码")
        }
    })
    //验证短信验证码
    $(".fsyzm").blur(function () {
        let str = $(this).val();
        let re = /^\d{6}$/;
        if (str == "" || str == null) {
            $(".fsyzm_1").html("验证码不能位空");
        } else if (re.test(str)) {
            $(".fsyzm_1").html("");
        } else {
            $(".fsyzm_1").html("请输入6位的验证码");
        }
    })
    //验证密码
    $(".mima").blur(function () {
        let str = $(this).val();
        let re = /^[0-9a-zA-Z\/.]{6,16}$/;
        if (str == "" || str == null) {
            $(".mima_1").html("请输入密码");
        } else if (re.test(str)) {
            $(".mima_1").html("")
        } else {
            $(".mima_1").html("请输入6~16位数字或字母")
        }
    })
    $(".chuangjian").click(function () {
        if("" == ($(".shouji").val() && $(".tpyzm").val() && $(".fsyzm").val() && $(".mima").val())){
            alert("内容不能为空");
            return;
        }
        let name = $(".shouji").val();
        let pwd = $(".mima").val();
        
        let storageStr = $.cookie("register") ? $.cookie("register") : "";
        var storageObj = tran(storageStr);
        //console.log(storageObj);
        if (name in storageObj) {
            //alert("用户已被注册");
            //return;
        } else { 
               storageObj[name] = pwd;          
            if ("" == $(".shouji_1").html() && "" == $(".tpyzm_1").html() && "" == $(".fsyzm_1").html() && "" == $(".mima_1").html()){
               
                $.cookie("register",JSON.stringify(storageObj),5);
                alert("注册成功")
                location.href = "login.html"
            }else if("" != $(".shouji_1").html()){
                alert("手机号错误")
                return;
            }else if("" != $(".tpyzm_1").html()){
                alert("图片验证码错误");
                return;
            }else if("" != $(".fsyzm_1").html()){
                alert("验证码错误");
            }else if("" != $(".mima_1").html()){
                alert("密码格式错误")
                return;
            }
        }
        $.cookie("register", JSON.stringify(storageObj), {"expires":5,"path":"/"});
        

    })
//将字符串转为对象
    function tran(str) {
        if (!str) {
            return {};
        }
        return JSON.parse(str);
    }
})