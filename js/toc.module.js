define(["require","exports"],function(t,o){"use strict";var i=function(){function t(){}return t.prototype.buildTOC=function(){var t={};$(".writing h3").each(function(){var o=$(this).text(),i=$(this).attr("id"),n=$(this).offset().top;t[o]={text:o,id:i,top:n}}),$(".writing").append('<div class="toc-js"></div>'),console.log(t),0!=Object.keys(t).length&&$(".toc-js").append("<h3>Table of Contents</h3><ol></ol>"),$.each(t,function(){$(".toc-js ol").append('<li><a href="#'+this.id+'">'+this.text+"</a></li>")}),$(".toc-js").append('<a class="back-link" href="/writing.html">&larr; back to writing'),$(window).on("scroll",function(){var o=$(window).scrollTop();$.each(t,function(){if(o>=this.top-10)return $(".toc-js .active").removeClass("active"),$('.toc-js a[href="#'+this.id+'"]').addClass("active"),!0})}),$(window).on("hashchange",function(t){var o=window.location.hash;$(".toc-js a").each(function(){$(this).removeClass("active"),o==$(this).attr("href")&&$(this).addClass("active")})})},t.prototype.destroyTOC=function(){$(".toc-js").remove()},t.prototype.repositionTOC=function(t){"up"==t?$(".toc-js").css("padding-top","2em"):"down"==t&&$(".toc-js").css("padding-top","")},t}();o.TOC=i});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYy5tb2R1bGUudHMiXSwibmFtZXMiOlsiVE9DIiwicHJvdG90eXBlIiwiYnVpbGRUT0MiLCJ0b2MiLCIkIiwiZWFjaCIsInRleHQiLCJ0aGlzIiwiaWQiLCJhdHRyIiwidG9wIiwib2Zmc2V0IiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ3aW5kb3ciLCJvbiIsInNjcm9sbCIsInNjcm9sbFRvcCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJldmVudCIsImhhc2giLCJsb2NhdGlvbiIsImRlc3Ryb3lUT0MiLCJyZW1vdmUiLCJyZXBvc2l0aW9uVE9DIiwiZGlyZWN0aW9uIiwiY3NzIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6InVEQUFBLElBQUFBLEdBQUEsV0FFSSxRQUFBQSxNQWdGSixNQTlFSUEsR0FBQUMsVUFBQUMsU0FBQSxXQVVJLEdBQUlDLEtBRUpDLEdBQUUsZUFBZUMsS0FBSyxXQUNsQixHQUFJQyxHQUFnQkYsRUFBRUcsTUFBTUQsT0FDeEJFLEVBQWNKLEVBQUVHLE1BQU1FLEtBQUssTUFDM0JDLEVBQWVOLEVBQUVHLE1BQU1JLFNBQVNELEdBRXBDUCxHQUFJRyxJQUNBQSxLQUFRQSxFQUNSRSxHQUFNQSxFQUNORSxJQUFPQSxLQUtmTixFQUFFLFlBQVlRLE9BQU8sOEJBQ3JCQyxRQUFRQyxJQUFLWCxHQUNrQixHQUEzQlksT0FBT0MsS0FBS2IsR0FBS2MsUUFDakJiLEVBQUUsV0FBV1EsT0FBTyx1Q0FHeEJSLEVBQUVDLEtBQU1GLEVBQUssV0FDVEMsRUFBRSxjQUFjUSxPQUFPLGlCQUFtQkwsS0FBUyxHQUFJLEtBQU9BLEtBQVcsS0FBSSxlQUdqRkgsRUFBRSxXQUFXUSxPQUFPLG9FQUVwQlIsRUFBRWMsUUFBUUMsR0FBRyxTQUFVLFdBQ25CLEdBQUlDLEdBQVNoQixFQUFFYyxRQUFRRyxXQUV2QmpCLEdBQUVDLEtBQU1GLEVBQUssV0FDVCxHQUFJaUIsR0FBVWIsS0FBVSxJQUFFLEdBR3RCLE1BRkFILEdBQUUsbUJBQW1Ca0IsWUFBWSxVQUNqQ2xCLEVBQUUsb0JBQXNCRyxLQUFTLEdBQUksTUFBTWdCLFNBQVMsV0FDN0MsTUFNbkJuQixFQUFFYyxRQUFRQyxHQUFHLGFBQWMsU0FBU0ssR0FDaEMsR0FBSUMsR0FBT1AsT0FBT1EsU0FBU0QsSUFFM0JyQixHQUFFLGFBQWFDLEtBQUssV0FDaEJELEVBQUVHLE1BQU1lLFlBQVksVUFDaEJHLEdBQVFyQixFQUFFRyxNQUFNRSxLQUFLLFNBQ3JCTCxFQUFFRyxNQUFNZ0IsU0FBUyxlQU9qQ3ZCLEVBQUFDLFVBQUEwQixXQUFBLFdBQ0l2QixFQUFFLFdBQVd3QixVQUdqQjVCLEVBQUFDLFVBQUE0QixjQUFBLFNBQWVDLEdBQ00sTUFBYkEsRUFDQTFCLEVBQUUsV0FBVzJCLElBQUksY0FBZSxPQUNiLFFBQWJELEdBQ04xQixFQUFFLFdBQVcyQixJQUFJLGNBQWUsS0FPNUMvQixJQWxGQWdDLEdBQUFoQyxJQUFBQSIsImZpbGUiOiJ0b2MubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRPQ3tcblxuICAgIGNvbnN0cnVjdG9yKCl7IH1cblxuICAgIGJ1aWxkVE9DKCkgOiB2b2lkIHtcblxuICAgICAgICBpbnRlcmZhY2UgVE9DIHtcbiAgICAgICAgICAgIFtrZXk6IHN0cmluZ106IHtcbiAgICAgICAgICAgICAgICB0ZXh0IDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGlkIDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHRvcCA6IG51bWJlclxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0b2MgOiBUT0MgPSB7fTtcblxuICAgICAgICAkKCcud3JpdGluZyBoMycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCB0ZXh0IDogc3RyaW5nID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICAgICBsZXQgaWQgOiBzdHJpbmcgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBsZXQgdG9wIDogbnVtYmVyID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG5cbiAgICAgICAgICAgIHRvY1t0ZXh0XSA9IHtcbiAgICAgICAgICAgICAgICAndGV4dCc6IHRleHQsXG4gICAgICAgICAgICAgICAgJ2lkJzogaWQsXG4gICAgICAgICAgICAgICAgJ3RvcCc6IHRvcFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy53cml0aW5nJykuYXBwZW5kKGA8ZGl2IGNsYXNzPVwidG9jLWpzXCI+PC9kaXY+YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCB0b2MgKTtcbiAgICAgICAgaWYoIE9iamVjdC5rZXlzKHRvYykubGVuZ3RoICE9IDAgKXtcbiAgICAgICAgICAgICQoJy50b2MtanMnKS5hcHBlbmQoJzxoMz5UYWJsZSBvZiBDb250ZW50czwvaDM+PG9sPjwvb2w+Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAkLmVhY2goIHRvYywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQoJy50b2MtanMgb2wnKS5hcHBlbmQoJzxsaT48YSBocmVmPVwiIycgKyB0aGlzWydpZCddICsgJ1wiPicgKyB0aGlzWyd0ZXh0J10gKyAnPC9hPjwvbGk+JyApO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcudG9jLWpzJykuYXBwZW5kKCc8YSBjbGFzcz1cImJhY2stbGlua1wiIGhyZWY9XCIvd3JpdGluZy5odG1sXCI+JmxhcnI7IGJhY2sgdG8gd3JpdGluZycpO1xuXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQuZWFjaCggdG9jLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmKCBzY3JvbGwgPj0gdGhpc1sndG9wJ10tMTAgKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRvYy1qcyAuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkKCcudG9jLWpzIGFbaHJlZj1cIiMnICsgdGhpc1snaWQnXSArICdcIl0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignaGFzaGNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIGxldCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cbiAgICAgICAgICAgICQoJy50b2MtanMgYScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBpZiggaGFzaCA9PSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSApe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRlc3Ryb3lUT0MoKSA6IHZvaWQge1xuICAgICAgICAkKCcudG9jLWpzJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcmVwb3NpdGlvblRPQyggZGlyZWN0aW9uOiBzdHJpbmcgKSA6IHZvaWQge1xuICAgICAgICBpZiggZGlyZWN0aW9uID09ICd1cCcpe1xuICAgICAgICAgICAgJCgnLnRvYy1qcycpLmNzcygncGFkZGluZy10b3AnLCAnMmVtJyk7XG4gICAgICAgIH1lbHNlIGlmKCBkaXJlY3Rpb24gPT0gJ2Rvd24nICl7XG4gICAgICAgICAgICAkKCcudG9jLWpzJykuY3NzKCdwYWRkaW5nLXRvcCcsICcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuXG5cbn0iXX0=
