  $(function () {
    //验证手机号
    $(".shouji").blur(function () {
      let str = $(this).val();
      let re = /0?(13|14|15|17|18|19)[0-9]{9}/;
      if (str == "" || str == null) {
        $(".shouji_1").html("手机号不能为空");
        return;
      } else if (re.test(str)) {
        $(".shouji_1").html("");
      } else {
        $(".shouji_1").html("请输入正确的手机号")
        return;
      }
    })
    //给登陆添加点击事件，判断在cookie中有没有，账号密码是否一致
    $(".denglu").click(function(){
      //获取文本框中的值
      let name = $(".shouji").val();
      console.log(name)
      let code = $(".qsrmm").val();
      //判断cookie里面是否有用户输入的值
      let storage = $.cookie("register") ? $.cookie("register") : "";
      //将用户的值转为对象方便操作
      let storageObj = tran(storage);
      //遍历查询
      if(name in storageObj){
        console.log(name);
        if(code == storageObj[name]){
          alert("登陆成功")
          location.href = "homepage.html"
          return;
        }else{
          alert("密码不正确")
          return;
        }
      }else{
        alert("用户名不存在")
      }
    })

//将字符串转为对象
    function tran(str) {
      if (!str) {
          return {};
      }
      return JSON.parse(str);
  }

  })