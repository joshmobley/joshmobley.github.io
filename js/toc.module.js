define(["require","exports"],function(t,i){"use strict";var o=function(){function t(){}return t.prototype.buildTOC=function(){function t(){e=$(window).scrollTop(),n=$(window).height(),s=$(document).height(),$(".writing h3").each(function(){var t=$(this).text(),i=$(this).attr("id"),o=$(this).offset().top;c[t]={text:t,id:i,top:o}})}function i(){$.each(c,function(){return a==$(this).attr("href")&&$('.toc-js a[href="#'+this.id+'"]').addClass("active"),e>=this.top-10?($(".toc-js .active").removeClass("active"),$('.toc-js a[href="#'+this.id+'"]').addClass("active"),!0):e+n>=s-40?($(".toc-js .active").removeClass("active"),$(".toc-js li:last a").addClass("active"),!0):void 0})}function o(){$(".writing").append('<div class="toc-js"></div>'),0!=Object.keys(c).length&&$(".toc-js").append("<h3>Table of Contents</h3><ol></ol>"),$.each(c,function(){$(".toc-js ol").append('<li><a href="#'+this.id+'">'+this.text+"</a></li>")}),$(".toc-js").append('<a class="back-link" href="/writing.html">&larr; back to writing')}var e,n,s,c={},a=window.location.hash;t(),o(),i(),$(window).on("scroll resize hashchange",function(){t(),i()})},t.prototype.destroyTOC=function(){$(".toc-js").remove()},t.prototype.repositionTOC=function(t){"up"==t?$(".toc-js").css("padding-top","2em"):"down"==t&&$(".toc-js").css("padding-top","")},t}();i.TOC=o});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYy5tb2R1bGUudHMiXSwibmFtZXMiOlsiVE9DIiwicHJvdG90eXBlIiwiYnVpbGRUT0MiLCJjYWxjSGVpZ2h0cyIsInNjcm9sbFRvcCIsIiQiLCJ3aW5kb3ciLCJ3aW5IZWlnaHQiLCJoZWlnaHQiLCJkb2NIZWlnaHQiLCJkb2N1bWVudCIsImVhY2giLCJ0ZXh0IiwidGhpcyIsImlkIiwiYXR0ciIsInRvcCIsIm9mZnNldCIsInRvYyIsInNldEFjdGl2ZVN0YXRlIiwiaGFzaCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ3cml0ZVRPQyIsImFwcGVuZCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJsb2NhdGlvbiIsIm9uIiwiZGVzdHJveVRPQyIsInJlbW92ZSIsInJlcG9zaXRpb25UT0MiLCJkaXJlY3Rpb24iLCJjc3MiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoidURBQUEsSUFBQUEsR0FBQSxXQUVJLFFBQUFBLE1BbUdKLE1BakdJQSxHQUFBQyxVQUFBQyxTQUFBLFdBZ0JJLFFBQUFDLEtBRUlDLEVBQVlDLEVBQUVDLFFBQVFGLFlBQ3RCRyxFQUFZRixFQUFFQyxRQUFRRSxTQUN0QkMsRUFBWUosRUFBRUssVUFBVUYsU0FFeEJILEVBQUUsZUFBZU0sS0FBSyxXQUNsQixHQUFJQyxHQUFnQlAsRUFBRVEsTUFBTUQsT0FDeEJFLEVBQWNULEVBQUVRLE1BQU1FLEtBQUssTUFDM0JDLEVBQWVYLEVBQUVRLE1BQU1JLFNBQVNELEdBRXBDRSxHQUFJTixJQUNBQSxLQUFRQSxFQUNSRSxHQUFNQSxFQUNORSxJQUFPQSxLQU9uQixRQUFBRyxLQUVJZCxFQUFFTSxLQUFNTyxFQUFLLFdBS1QsTUFISUUsSUFBUWYsRUFBRVEsTUFBTUUsS0FBSyxTQUNyQlYsRUFBRSxvQkFBc0JRLEtBQVMsR0FBSSxNQUFNUSxTQUFTLFVBRXBEakIsR0FBYVMsS0FBVSxJQUFFLElBQ3pCUixFQUFFLG1CQUFtQmlCLFlBQVksVUFDakNqQixFQUFFLG9CQUFzQlEsS0FBUyxHQUFJLE1BQU1RLFNBQVMsV0FDN0MsR0FDRGpCLEVBQVlHLEdBQWVFLEVBQVksSUFDN0NKLEVBQUUsbUJBQW1CaUIsWUFBWSxVQUNqQ2pCLEVBQUUscUJBQXFCZ0IsU0FBUyxXQUN6QixHQUhMLFNBU2QsUUFBQUUsS0FDSWxCLEVBQUUsWUFBWW1CLE9BQU8sOEJBRVUsR0FBM0JDLE9BQU9DLEtBQUtSLEdBQUtTLFFBQ2pCdEIsRUFBRSxXQUFXbUIsT0FBTyx1Q0FHeEJuQixFQUFFTSxLQUFNTyxFQUFLLFdBQ1RiLEVBQUUsY0FBY21CLE9BQU8saUJBQW1CWCxLQUFTLEdBQUksS0FBT0EsS0FBVyxLQUFJLGVBR2pGUixFQUFFLFdBQVdtQixPQUFPLG9FQTFEeEIsR0FDSXBCLEdBQ0FHLEVBQ0FFLEVBSEFTLEtBSUFFLEVBQWdCZCxPQUFPc0IsU0FBU1IsSUF5RHBDakIsS0FDQW9CLElBQ0FKLElBRUFkLEVBQUVDLFFBQVF1QixHQUFHLDJCQUE0QixXQUNyQzFCLElBQ0FnQixPQUtSbkIsRUFBQUMsVUFBQTZCLFdBQUEsV0FDSXpCLEVBQUUsV0FBVzBCLFVBR2pCL0IsRUFBQUMsVUFBQStCLGNBQUEsU0FBZUMsR0FDTSxNQUFiQSxFQUNBNUIsRUFBRSxXQUFXNkIsSUFBSSxjQUFlLE9BQ2IsUUFBYkQsR0FDTjVCLEVBQUUsV0FBVzZCLElBQUksY0FBZSxLQU81Q2xDLElBckdBbUMsR0FBQW5DLElBQUFBIiwiZmlsZSI6InRvYy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVE9De1xuXG4gICAgY29uc3RydWN0b3IoKXsgfVxuXG4gICAgYnVpbGRUT0MoKSA6IHZvaWQge1xuXG4gICAgICAgIGludGVyZmFjZSBUT0Mge1xuICAgICAgICAgICAgW2tleTogc3RyaW5nXToge1xuICAgICAgICAgICAgICAgIHRleHQgOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgaWQgOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgdG9wIDogbnVtYmVyXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRvYyA6IFRPQyA9IHt9O1xuICAgICAgICBsZXQgc2Nyb2xsVG9wIDogbnVtYmVyO1xuICAgICAgICBsZXQgd2luSGVpZ2h0IDogbnVtYmVyO1xuICAgICAgICBsZXQgZG9jSGVpZ2h0IDogbnVtYmVyO1xuICAgICAgICBsZXQgaGFzaCA6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNhbGNIZWlnaHRzKCl7XG5cbiAgICAgICAgICAgIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIHdpbkhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGRvY0hlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpO1xuXG4gICAgICAgICAgICAkKCcud3JpdGluZyBoMycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA6IHN0cmluZyA9ICQodGhpcykudGV4dCgpO1xuICAgICAgICAgICAgICAgIGxldCBpZCA6IHN0cmluZyA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgICAgICBsZXQgdG9wIDogbnVtYmVyID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdG9jW3RleHRdID0ge1xuICAgICAgICAgICAgICAgICAgICAndGV4dCc6IHRleHQsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IGlkLFxuICAgICAgICAgICAgICAgICAgICAndG9wJzogdG9wXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0QWN0aXZlU3RhdGUoKXtcblxuICAgICAgICAgICAgJC5lYWNoKCB0b2MsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoIGhhc2ggPT0gJCh0aGlzKS5hdHRyKCdocmVmJykgKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRvYy1qcyBhW2hyZWY9XCIjJyArIHRoaXNbJ2lkJ10gKyAnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiggc2Nyb2xsVG9wID49IHRoaXNbJ3RvcCddLTEwICl7XG4gICAgICAgICAgICAgICAgICAgICQoJy50b2MtanMgLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnRvYy1qcyBhW2hyZWY9XCIjJyArIHRoaXNbJ2lkJ10gKyAnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZiggc2Nyb2xsVG9wICsgd2luSGVpZ2h0ID49ICggZG9jSGVpZ2h0IC0gNDAgKSApe1xuICAgICAgICAgICAgICAgICAgICAkKCcudG9jLWpzIC5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJy50b2MtanMgbGk6bGFzdCBhJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gd3JpdGVUT0MoKXtcbiAgICAgICAgICAgICQoJy53cml0aW5nJykuYXBwZW5kKGA8ZGl2IGNsYXNzPVwidG9jLWpzXCI+PC9kaXY+YCk7XG5cbiAgICAgICAgICAgIGlmKCBPYmplY3Qua2V5cyh0b2MpLmxlbmd0aCAhPSAwICl7XG4gICAgICAgICAgICAgICAgJCgnLnRvYy1qcycpLmFwcGVuZCgnPGgzPlRhYmxlIG9mIENvbnRlbnRzPC9oMz48b2w+PC9vbD4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJC5lYWNoKCB0b2MsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJCgnLnRvYy1qcyBvbCcpLmFwcGVuZCgnPGxpPjxhIGhyZWY9XCIjJyArIHRoaXNbJ2lkJ10gKyAnXCI+JyArIHRoaXNbJ3RleHQnXSArICc8L2E+PC9saT4nICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLnRvYy1qcycpLmFwcGVuZCgnPGEgY2xhc3M9XCJiYWNrLWxpbmtcIiBocmVmPVwiL3dyaXRpbmcuaHRtbFwiPiZsYXJyOyBiYWNrIHRvIHdyaXRpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGNIZWlnaHRzKCk7XG4gICAgICAgIHdyaXRlVE9DKCk7XG4gICAgICAgIHNldEFjdGl2ZVN0YXRlKCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgcmVzaXplIGhhc2hjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY2FsY0hlaWdodHMoKTtcbiAgICAgICAgICAgIHNldEFjdGl2ZVN0YXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBkZXN0cm95VE9DKCkgOiB2b2lkIHtcbiAgICAgICAgJCgnLnRvYy1qcycpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHJlcG9zaXRpb25UT0MoIGRpcmVjdGlvbjogc3RyaW5nICkgOiB2b2lkIHtcbiAgICAgICAgaWYoIGRpcmVjdGlvbiA9PSAndXAnKXtcbiAgICAgICAgICAgICQoJy50b2MtanMnKS5jc3MoJ3BhZGRpbmctdG9wJywgJzJlbScpO1xuICAgICAgICB9ZWxzZSBpZiggZGlyZWN0aW9uID09ICdkb3duJyApe1xuICAgICAgICAgICAgJCgnLnRvYy1qcycpLmNzcygncGFkZGluZy10b3AnLCAnJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcblxuXG59Il19
