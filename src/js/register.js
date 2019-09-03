$(function(){
   //注册账号
   $(".shouji").blur(function(){
       let str = $(".shouji").val();
       //console.log(str)
       let re = /0?(13|14|15|17|18|19)[0-9]{9}/;
    //    console.log(re)
    // if(!re.test($(".shouji").val())){

    //     $(".shouji_1").append("<p>111111</p>");
    //     console.log( $(".shouji_1").append("<p>111111</p>"))

    // } 
   })
})