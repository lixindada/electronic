//01 新闻滚动 开始
$(function(){
    var $this = $(".scrollNews");
    var scrollTimer;
    $this.hover(function(){
        clearInterval(scrollTimer);
    },function(){
        scrollTimer = setInterval(function(){
            scrollNews( $this );
        }, 3000 );
    }).trigger("mouseleave");
});
function scrollNews(obj){
    var $self = obj.find("ul:first");
    var lineHeight = $self.find("li:first").height(); //获取行高
    $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
        $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
    })
}

//手风琴 开始
$("h3").click(function(){
    $(this).toggleClass("active");
    $(this).next().slideToggle();
})
$("h4").click(function(){
    $(this).toggleClass("active");
    $(this).next().slideToggle();
})
//换肤 开始
$(".peeler>p>a").click(function(){
    var this_class = $(this).attr("class");
    var this_id = "img/"+$(this).attr("id")+".jpg";
    $(".banner>img").attr("src",this_id);
    $("body").attr("class",this_class)
})
// tab选项卡 开始
$(".products>ul>li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".products>div").hide();
    $(".products>div").eq($(this).index()).show();
})
// 点小图看大图 开始
$(".small_img>div>img").click(function(){
    $(".big_img>img").attr("src","img/"+$(this).attr("alt")+".jpg");
    $("#zoom>img").attr("src","img/"+$(this).attr("alt")+".jpg");
    $(".show_img>img").attr("src","img/"+$(this).attr("alt")+".jpg");
})
// 点击看大图
$(".fdj").click(function(){
    $(".show_img").show();
})
$(".show_img").click(function () {
    $(this).hide();
})
        // 按ESC关闭
$("body").keydown(function (event) {
    event.which==27 ? $(".show_img").hide() : null;
})
// 商品评分
$(".nostar>li>a").click(function () {
    var title = $(this).attr("title");
    alert("您给此商品的评分是："+title);
    var cl = $(this).parent().attr("class");
    $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
    $(this).blur();//去掉超链接的虚线框
    return false;
});
// 衣服换色
$(".color_click>a").click(function () {
    $(".big_img>img").attr("src","img/"+$(this).attr("class")+".jpg");
    $("#zoom>img").attr("src","img/"+$(this).attr("class")+".jpg");
    $(".show_img>img").attr("src","img/"+$(this).attr("class")+".jpg");
    $(".color_text>span:eq(1)").html($(this).html());
})
// 数量 总计联动
$("#number").change(function () {
    $(".number>span:eq(1)").html("200"*$(this).val())
})
// 加入购物车
$("button").click(function(){
    var pro_size = $(".size_text>span:eq(1)").text();
    var pro_color =  $(".color_text>span:eq(1)").text();
    var pro_num = $("select").val();
    var pro_price = $(".number").text();
    var dialog = " 感谢您的购买。\n您购买的\n"+
        "产品是：免烫高支棉条纹衬衣"+"；\n"+
        "尺寸是："+pro_size+"；\n"+
        "颜色是："+pro_color+"；\n"+
        "数量是："+pro_num+"；\n"+
        "总价是："+pro_price +"元。";
    if( confirm(dialog) ){
        alert("您已经下单!");
    }
    return false;//避免页面跳转
});
// 尺寸修改
$(".size_click>a").click(function (){
    $(".size_text>span:eq(1)").html($(this).attr("class"))
});
// 点击跳转链接 开始
$(".slick_cont").click(function () {
    window.location.href="details.html";
})