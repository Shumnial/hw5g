"use strict";$(function(){function i(){r.find(".popup__video")[0].pause()}function e(i){i.preventDefault();var e=r.find("video");$(".play");e.attr("src",$(this).attr("data-video")+".mp4"),r.iziModal("open"),e[0].play()}function t(){r.iziModal("close")}function s(i){var e=$(i.target),t=e.attr("href");i.preventDefault(),n.removeClass("abilities__name--active"),e.addClass("abilities__name--active"),$(".abilities__info").hide(),$(".abilities__info[data-id="+t+"]").show()}function a(i){var e=$(i.target),t=e.attr("href");i.preventDefault(),l.removeClass("abilities__name--active"),e.addClass("abilities__name--active"),$(".abilities__info-inner").hide(),$(".abilities__info[data-id="+t+"]").find(".abilities__info-inner").show()}function o(){var i=$(".burger"),e=$(".nav");i.hasClass("burger--active")?(i.toggleClass("burger--active"),e.hide()):(i.toggleClass("burger--active"),e.css("display","flex"))}var n=$(".abilities__name--desktop"),l=$(".abilities__name--mobile"),r=$("#popup");$(".slider").slick({dots:!0,arrows:!0,infinite:!0,speed:300,slidesToShow:4,slidesToScroll:4,autoplay:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2,dots:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]}),$("#popup").iziModal({width:1060,onClosed:i,transitionIn:"fadeIn",transitionOut:"fadeOut"}),$(document).on("click",".play",e),$(document).on("click",".popup__close",t),n.on("click",s),l.on("click",a),$(".burger").on("click",o)});
//# sourceMappingURL=../javascripts/common.js.map
