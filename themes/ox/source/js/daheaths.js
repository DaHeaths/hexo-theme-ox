var App = {
        root:'/',
        isHome: true,
        isCate: false,
        isTag: false
    };

function $(cls)
{
  return document.querySelector(cls);
}
$(".header .mod-nav").onclick = function(e)
{
   e.preventDefault();
  $(".mobile-nav").classList.add('move_right');
  alert('勇敢改变，勇敢做自己！ ');
}
$(".mobile-nav .close").onclick = function()
{
  $(".mobile-nav").classList.add('move_left');
}

$('.mod-soso').onclick = function (){
	alert('夜间阅读模式，站长傻了！≡[。。]≡')
}
