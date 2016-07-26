/**
 * Created by Administrator on 2016/7/22.
 */

    $(document).ready(function () {
        var mySwiper=new Swiper('.swiper-container',{
            effect:'cube',
            /*loop:true,*/
            autoplay:2000,
            pagination:'.swiper-pagination',
            grabCursor:true,
              /*autoplayDisableOnInteraction:false,*/
            cube:{
                slideShadows:true,
                shadow:true,
                shadowOffset:50,
                shadowScale:0.90
                /* shadow:false*/
            }
        })
    })
