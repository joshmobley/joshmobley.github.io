define(["require","exports"],function(t,i){"use strict";i.__esModule=!0;var o=function(){function t(){}return t.prototype.buildTOC=function(){function t(){o=$(window).scrollTop(),e=$(window).height(),s=$(document).height(),$(".writing h3").each(function(){var t=$(this).text(),i=$(this).attr("id"),o=$(this).offset().top;n[t]={text:t,id:i,top:o}})}function i(){$.each(n,function(){return c==$(this).attr("href")&&$('.toc-js a[href="#'+this.id+'"]').addClass("active"),o>=this.top-10?($(".toc-js .active").removeClass("active"),$('.toc-js a[href="#'+this.id+'"]').addClass("active"),!0):o+e>=s-40?($(".toc-js .active").removeClass("active"),$(".toc-js li:last a").addClass("active"),!0):void 0})}var o,e,s,n={},c=window.location.hash;t(),$(".writing").append('<div class="toc-js"></div>'),0!=Object.keys(n).length&&$(".toc-js").append("<h3>Table of Contents</h3><ol></ol>"),$.each(n,function(){$(".toc-js ol").append('<li><a href="#'+this.id+'">'+this.text+"</a></li>")}),$(".toc-js").append('<a class="back-link" href="/writing.html">&larr; back to writing'),i(),$(window).on("scroll resize hashchange",function(){t(),i()})},t.prototype.destroyTOC=function(){$(".toc-js").remove()},t.prototype.repositionTOC=function(t){"up"==t?$(".toc-js").css("padding-top","2em"):"down"==t&&$(".toc-js").css("padding-top","")},t}();i.TOC=o});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYy5tb2R1bGUudHMiXSwibmFtZXMiOlsiVE9DIiwicHJvdG90eXBlIiwiYnVpbGRUT0MiLCJjYWxjSGVpZ2h0cyIsInNjcm9sbFRvcCIsIiQiLCJ3aW5kb3ciLCJ3aW5IZWlnaHQiLCJoZWlnaHQiLCJkb2NIZWlnaHQiLCJkb2N1bWVudCIsImVhY2giLCJ0ZXh0IiwidGhpcyIsImlkIiwiYXR0ciIsInRvcCIsIm9mZnNldCIsInRvYyIsInNldEFjdGl2ZVN0YXRlIiwiaGFzaCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJsb2NhdGlvbiIsImFwcGVuZCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJvbiIsImRlc3Ryb3lUT0MiLCJyZW1vdmUiLCJyZXBvc2l0aW9uVE9DIiwiZGlyZWN0aW9uIiwiY3NzIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IndFQUFBLElBQUFBLEVBQUEsV0FFSSxTQUFBQSxLQW1HSixPQWpHSUEsRUFBQUMsVUFBQUMsU0FBQSxXQWdCSSxTQUFBQyxJQUVJQyxFQUFZQyxFQUFFQyxRQUFRRixZQUN0QkcsRUFBWUYsRUFBRUMsUUFBUUUsU0FDdEJDLEVBQVlKLEVBQUVLLFVBQVVGLFNBRXhCSCxFQUFFLGVBQWVNLEtBQUssV0FDbEIsSUFBSUMsRUFBZ0JQLEVBQUVRLE1BQU1ELE9BQ3hCRSxFQUFjVCxFQUFFUSxNQUFNRSxLQUFLLE1BQzNCQyxFQUFlWCxFQUFFUSxNQUFNSSxTQUFTRCxJQUVwQ0UsRUFBSU4sSUFDQUEsS0FBUUEsRUFDUkUsR0FBTUEsRUFDTkUsSUFBT0EsS0FPbkIsU0FBQUcsSUFFSWQsRUFBRU0sS0FBTU8sRUFBSyxXQUtULE9BSElFLEdBQVFmLEVBQUVRLE1BQU1FLEtBQUssU0FDckJWLEVBQUUsb0JBQXNCUSxLQUFTLEdBQUksTUFBTVEsU0FBUyxVQUVwRGpCLEdBQWFTLEtBQVUsSUFBRSxJQUN6QlIsRUFBRSxtQkFBbUJpQixZQUFZLFVBQ2pDakIsRUFBRSxvQkFBc0JRLEtBQVMsR0FBSSxNQUFNUSxTQUFTLFdBQzdDLEdBQ0RqQixFQUFZRyxHQUFlRSxFQUFZLElBQzdDSixFQUFFLG1CQUFtQmlCLFlBQVksVUFDakNqQixFQUFFLHFCQUFxQmdCLFNBQVMsV0FDekIsUUFITCxJQXRDZCxJQUNJakIsRUFDQUcsRUFDQUUsRUFIQVMsS0FJQUUsRUFBZ0JkLE9BQU9pQixTQUFTSCxLQXlEcENqQixJQWJJRSxFQUFFLFlBQVltQixPQUFPLDhCQUVVLEdBQTNCQyxPQUFPQyxLQUFLUixHQUFLUyxRQUNqQnRCLEVBQUUsV0FBV21CLE9BQU8sdUNBR3hCbkIsRUFBRU0sS0FBTU8sRUFBSyxXQUNUYixFQUFFLGNBQWNtQixPQUFPLGlCQUFtQlgsS0FBUyxHQUFJLEtBQU9BLEtBQVcsS0FBSSxlQUdqRlIsRUFBRSxXQUFXbUIsT0FBTyxvRUFLeEJMLElBRUFkLEVBQUVDLFFBQVFzQixHQUFHLDJCQUE0QixXQUNyQ3pCLElBQ0FnQixPQUtSbkIsRUFBQUMsVUFBQTRCLFdBQUEsV0FDSXhCLEVBQUUsV0FBV3lCLFVBR2pCOUIsRUFBQUMsVUFBQThCLGNBQUEsU0FBZUMsR0FDTSxNQUFiQSxFQUNBM0IsRUFBRSxXQUFXNEIsSUFBSSxjQUFlLE9BQ2IsUUFBYkQsR0FDTjNCLEVBQUUsV0FBVzRCLElBQUksY0FBZSxLQU81Q2pDLEVBckdBLEdBQWFrQyxFQUFBbEMsSUFBQUEiLCJmaWxlIjoidG9jLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUT0N7XG5cbiAgICBjb25zdHJ1Y3RvcigpeyB9XG5cbiAgICBidWlsZFRPQygpIDogdm9pZCB7XG5cbiAgICAgICAgaW50ZXJmYWNlIFRPQyB7XG4gICAgICAgICAgICBba2V5OiBzdHJpbmddOiB7XG4gICAgICAgICAgICAgICAgdGV4dCA6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBpZCA6IHN0cmluZyxcbiAgICAgICAgICAgICAgICB0b3AgOiBudW1iZXJcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdG9jIDogVE9DID0ge307XG4gICAgICAgIGxldCBzY3JvbGxUb3AgOiBudW1iZXI7XG4gICAgICAgIGxldCB3aW5IZWlnaHQgOiBudW1iZXI7XG4gICAgICAgIGxldCBkb2NIZWlnaHQgOiBudW1iZXI7XG4gICAgICAgIGxldCBoYXNoIDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cbiAgICAgICAgZnVuY3Rpb24gY2FsY0hlaWdodHMoKXtcblxuICAgICAgICAgICAgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgd2luSGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgZG9jSGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICQoJy53cml0aW5nIGgzJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCB0ZXh0IDogc3RyaW5nID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgbGV0IGlkIDogc3RyaW5nID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgICAgIGxldCB0b3AgOiBudW1iZXIgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0b2NbdGV4dF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICd0ZXh0JzogdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogaWQsXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiB0b3BcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRBY3RpdmVTdGF0ZSgpe1xuXG4gICAgICAgICAgICAkLmVhY2goIHRvYywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiggaGFzaCA9PSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSApe1xuICAgICAgICAgICAgICAgICAgICAkKCcudG9jLWpzIGFbaHJlZj1cIiMnICsgdGhpc1snaWQnXSArICdcIl0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCBzY3JvbGxUb3AgPj0gdGhpc1sndG9wJ10tMTAgKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRvYy1qcyAuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAkKCcudG9jLWpzIGFbaHJlZj1cIiMnICsgdGhpc1snaWQnXSArICdcIl0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKCBzY3JvbGxUb3AgKyB3aW5IZWlnaHQgPj0gKCBkb2NIZWlnaHQgLSA0MCApICl7XG4gICAgICAgICAgICAgICAgICAgICQoJy50b2MtanMgLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRvYy1qcyBsaTpsYXN0IGEnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB3cml0ZVRPQygpe1xuICAgICAgICAgICAgJCgnLndyaXRpbmcnKS5hcHBlbmQoYDxkaXYgY2xhc3M9XCJ0b2MtanNcIj48L2Rpdj5gKTtcblxuICAgICAgICAgICAgaWYoIE9iamVjdC5rZXlzKHRvYykubGVuZ3RoICE9IDAgKXtcbiAgICAgICAgICAgICAgICAkKCcudG9jLWpzJykuYXBwZW5kKCc8aDM+VGFibGUgb2YgQ29udGVudHM8L2gzPjxvbD48L29sPicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkLmVhY2goIHRvYywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKCcudG9jLWpzIG9sJykuYXBwZW5kKCc8bGk+PGEgaHJlZj1cIiMnICsgdGhpc1snaWQnXSArICdcIj4nICsgdGhpc1sndGV4dCddICsgJzwvYT48L2xpPicgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcudG9jLWpzJykuYXBwZW5kKCc8YSBjbGFzcz1cImJhY2stbGlua1wiIGhyZWY9XCIvd3JpdGluZy5odG1sXCI+JmxhcnI7IGJhY2sgdG8gd3JpdGluZycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsY0hlaWdodHMoKTtcbiAgICAgICAgd3JpdGVUT0MoKTtcbiAgICAgICAgc2V0QWN0aXZlU3RhdGUoKTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCByZXNpemUgaGFzaGNoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjYWxjSGVpZ2h0cygpO1xuICAgICAgICAgICAgc2V0QWN0aXZlU3RhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRlc3Ryb3lUT0MoKSA6IHZvaWQge1xuICAgICAgICAkKCcudG9jLWpzJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcmVwb3NpdGlvblRPQyggZGlyZWN0aW9uOiBzdHJpbmcgKSA6IHZvaWQge1xuICAgICAgICBpZiggZGlyZWN0aW9uID09ICd1cCcpe1xuICAgICAgICAgICAgJCgnLnRvYy1qcycpLmNzcygncGFkZGluZy10b3AnLCAnMmVtJyk7XG4gICAgICAgIH1lbHNlIGlmKCBkaXJlY3Rpb24gPT0gJ2Rvd24nICl7XG4gICAgICAgICAgICAkKCcudG9jLWpzJykuY3NzKCdwYWRkaW5nLXRvcCcsICcnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFxuXG5cbn1cbiJdfQ==
