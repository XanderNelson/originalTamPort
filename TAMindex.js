
var prevScrollpos = window.pageYOffset;
window.onscroll = function()
{
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos)
  {
    document.getElementById("topbar").style.top = "0";
    document.getElementById("dropdown").style.top = "0";
  }
  else
  {
    document.getElementById("topbar").style.top = "-90px";
    document.getElementById("dropdown").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}
// ------------help from https://codepen.io/tr13ze/pen/VjLLgJ
$(function()
{
   $('.scrollbtn').click (function()
   {
     $('html, body').animate({scrollTop: $('.mainPage').offset().top }, 'slow');
           return false;
   });
 });
