window.addEventListener("app:mounted",(function(){new Accordion("#sidebar-channels",{duration:200,openOnInit:[0]});var e=document.querySelector("#categories");e._swiper=new Swiper(e,{slidesPerView:"auto",spaceBetween:14,navigation:{nextEl:".next-btn",prevEl:".prev-btn"}}),new Popper("#cart-drafts-menu",".popper-ref",".popper-root",{placement:"bottom-end",modifiers:[{name:"offset",options:{offset:[0,4]}}]}),new Popper("#cart-menu",".popper-ref",".popper-root",{placement:"bottom-end",modifiers:[{name:"offset",options:{offset:[0,4]}}]});var n=new Modal("#posSheet");window.addEventListener("change:breakpoint",(function(e){e.detail.smAndUp&&n.close()}))}),{once:!0});