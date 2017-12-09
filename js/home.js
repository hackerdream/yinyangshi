// top特效
(function () {

    var $man = $("#top-man").find("img"),
        $logo = $("#logo"),
        $entry = $("#index-entry"),
        $topCenter = $("#top-center"),
        $qr = $("#app-down"),
        cLDistance,
        cRDistance;

    init();

    //初始化动画
    function init() {
        $man.eq(0).animate({
            left: "-480px"
        }, 1500);
        $man.eq(1).animate({
            right: "-240px"
        }, 1500);
        $logo.animate({
            left: "60px"
        }, 2000);
        $entry.animate({
            right: "20px"
        }, 2000);
        $topCenter.delay(1500).animate({
            top: "100px",
            opacity: 1
        }, 1000);
        $qr.delay(1700).animate({
            top: "662px",
            opacity: 1
        }, 1000)
    }
    //hover效果
    setTimeout(function () {
        cLDistance = parseFloat($man.eq(0).css("left"));
        cRDistance = parseFloat($man.eq(1).css("right"));
        cTop = parseFloat($man.eq(0).css("top"))

        $("#top-main").mouseover(function (e) {

            $("#top-main").mousemove(function (e) {
                var nTop = cTop + e.clientY / 60, //竖直
                    cWidth = e.clientX / 60; //水平移动

                $man.eq(0).css({
                    top: nTop + 'px',
                    left: cLDistance - cWidth + 'px'
                })
                $man.eq(1).css({
                    top: nTop + 'px',
                    right: cRDistance - cWidth + 'px'
                })
            })
        })
    }, 3000);

})();