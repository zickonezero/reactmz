!function(e){function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}var n={};o.m=e,o.c=n,o.i=function(e){return e},o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o(o.s=93)}({86:function(e,o,n){"use strict";var t={Android:function(){return!!navigator.userAgent.match(/Android/i)},BlackBerry:function(){return!!navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)},Windows:function(){return!!navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.BlackBerry()||t.iOS()||t.Windows()}};e.exports=t},93:function(e,o,n){"use strict";var t=n(86),i=function(e){return e&&e.__esModule?e:{default:e}}(t),r=function(){function e(){r(),c(),u(),t(),o(),n(),$("#input-name").keypress(function(e){13==e.which&&(e.preventDefault(),h=$(this).val(),u(),$(this).val("").attr("readonly","readonly"),$(".typeText").typeText("Thank you "+h+". Click on the logo to navigate."),l(0),v=!0)}),$(".typeText").typeText(f),$(window).resize(function(){c()}),i.default.any()&&($(".remove-hover").removeClass("remove-hover"),$("#footer, #picard").css("padding-bottom",0),$(".thumbnails, #picard").css("margin-bottom",0))}function o(){$.fn.typeText=function(e){function o(){$(".typeText").append(i[c]),c++,c<r?setTimeout(o,40):(1!=v?$(".loopThis").show().loopThis(600,600,.4):($(".loopThis").removeClass("loopThis"),d.blur().hide(),$("body").animate({scrollTop:0})),a())}var n=e,t=n.split(""),i=[],r=void 0,c=0;$(this).empty();for(var l=0;l<t.length;l++)i+=t[l];r=i.length,o()},$.fn.loopThis=function(e,o,n){var t={repeatThis:function(){$(".loopThis").animate({opacity:n},e,function(){$(this).animate({opacity:1},o,t.repeatThis())})}};t.repeatThis()}}function n(){$(".fancybox").fancybox({prevEffect:"none",nextEffect:"none",helpers:{title:{type:"outside"},overlay:{opacity:.8,css:{"background-color":"#000"}},thumbs:{width:50,height:50}}}),$("#ascensorBuilding").ascensor({AscensorName:"ascensor",ChildType:"section",AscensorFloorName:"section1 | section2 | section3 | section4 | section5",Time:1e3,WindowsOn:1,Direction:"chocolate",AscensorMap:"1|1 & 1|2 & 2|1 & 2|2 & 3|1",Easing:"easeInOutCubic",KeyNavigation:!1})}function t(){$("#loader").hide()}function r(){$("#submit_btn").click(function(){var e={orderNum:parseInt($("#order_num").val()),projLink0:$("#proj_link_0").val(),projRel:$("#proj_rel").val(),projTitle:$("#proj_title").val(),projRole:$("#proj_role").val(),projThumb:$("#proj_thumb").val(),projHeader:$("#proj_header").val(),projDesc:$("#proj_desc").val(),projLink1:$("#proj_link_1").val(),projLink1Title:$("#proj_link_1_title").val(),projLink1Role:$("#proj_link_1_role").val(),projLink2:$("#proj_link_2").val(),projLink2Title:$("#proj_link_2_title").val(),projLink2Role:$("#proj_link_2_role").val(),projLink3:$("#proj_link_3").val(),projLink3Title:$("#proj_link_3_title").val(),projLink3Role:$("#proj_link_3_role").val(),workRadio:$("#work_radio").prop("checked"),artRadio:$("#art_radio").prop("checked"),picsRadio:$("#pics_radio").prop("checked"),urlCheck:$("#url_check").prop("checked"),iframeCheck:$("#iframe_check").prop("checked"),newLineCheck:$("#new_line_check").prop("checked")};$.ajax({url:"/",type:"POST",contentType:"application/json",processData:!1,data:JSON.stringify(e),success:function(e){alert("Data inputed successfully."),location.reload()}})})}function a(){$("#name-form h1").click(function(){d.removeAttr("readonly"),$(".loopThis").stop(),$(this).hide(),d.focus()}),d.blur(function(){""==$(this).val()&&$(".loopThis").show().loopThis(600,600,.4)})}function c(){!i.default.any()&&$(window).width()>767?($(".thumbnails li:last-child").css({"padding-bottom":"200px"}),$("#qual-box").css("padding-bottom","400px")):$("#ascensorFloor2 .thumbnails li:last-child, #ascensorFloor3 .thumbnails li:first-child, #qual-box").css({"padding-bottom":0})}function l(e){if(d.val()){var o,n=d.val();o=n.length<20?n.length+2:n.length+1,d.width(o*e)}}function s(e){var o,n,t,i=document.cookie.split(";");for(o=0;o<i.length;o++)if(n=i[o].substr(0,i[o].indexOf("=")),t=i[o].substr(i[o].indexOf("=")+1),(n=n.replace(/^\s+|\s+$/g,""))==e)return unescape(t)}function p(e,o,n){var t=new Date;t.setDate(t.getDate()+n);var i=escape(o)+(null==n?"":"; expires="+t.toUTCString());document.cookie=e+"="+i}function u(){var e=s("username");null!==e&&""!==e?(f="Welcome back "+e+". Click on the logo to navigate.",l(0),d.attr("readonly","readonly"),v=!0):(f="Welcome. Please state your name.",null!==(e=h)&&""!==e&&p("username",e,365))}var d=$("#input-name"),h="",f=void 0,v=void 0;return{init:e}}();$(function(){r.init(),$(".fancybox").fancybox({prevEffect:"none",nextEffect:"none",helpers:{title:{type:"outside"},overlay:{opacity:.8,css:{"background-color":"#000"}},thumbs:{width:50,height:50}}})})}});