define(["require","exports","./toc.module","./forms.module","./header.module","jquery"],function(o,e,n,i,r,t){"use strict";e.__esModule=!0,t(document).ready(function(){if(0!=t("form").length&&(i.formStyles(),i.formSubmit()),0!=t(".writing").length){var o=new n.TOC;o.buildTOC(),t(window).on("scroll",function(){t(window).scrollTop()>50?o.repositionTOC("up"):o.repositionTOC("down")})}r.default()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMudHMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJsZW5ndGgiLCJmb3Jtc19tb2R1bGVfMSIsImZvcm1TdHlsZXMiLCJmb3JtU3VibWl0IiwidG9jXzEiLCJ0b2NfbW9kdWxlXzEiLCJUT0MiLCJidWlsZFRPQyIsIndpbmRvdyIsIm9uIiwic2Nyb2xsVG9wIiwicmVwb3NpdGlvblRPQyIsImhlYWRlcl9tb2R1bGVfMSJdLCJtYXBwaW5ncyI6IjJJQUtBQSxFQUFFQyxVQUFVQyxNQUFPLFdBT2YsR0FMd0IsR0FBcEJGLEVBQUUsUUFBUUcsU0FDVkMsRUFBQUMsYUFDQUQsRUFBQUUsY0FHd0IsR0FBeEJOLEVBQUUsWUFBWUcsT0FBWSxDQUMxQixHQUFJSSxHQUFZLEdBQUlDLEdBQUFDLEdBQ3BCRixHQUFJRyxXQUVKVixFQUFFVyxRQUFRQyxHQUFJLFNBQVUsV0FDUFosRUFBRVcsUUFBUUUsWUFDVixHQUNUTixFQUFJTyxjQUFjLE1BRWxCUCxFQUFJTyxjQUFjLFVBSzlCQyxFQUFBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUT0MgfSBmcm9tICcuL3RvYy5tb2R1bGUnO1xuaW1wb3J0IHsgZm9ybVN0eWxlcywgZm9ybVN1Ym1pdCB9IGZyb20gJy4vZm9ybXMubW9kdWxlJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXIubW9kdWxlJztcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuJChkb2N1bWVudCkucmVhZHkoIGZ1bmN0aW9uKCl7XG5cbiAgICBpZiggJCgnZm9ybScpLmxlbmd0aCAhPSAwICl7XG4gICAgICAgIGZvcm1TdHlsZXMoKTtcbiAgICAgICAgZm9ybVN1Ym1pdCgpO1xuICAgIH1cblxuICAgIGlmKCAkKCcud3JpdGluZycpLmxlbmd0aCAhPSAwKXtcbiAgICAgICAgbGV0IHRvYyA6IFRPQyA9IG5ldyBUT0M7XG4gICAgICAgIHRvYy5idWlsZFRPQygpO1xuXG4gICAgICAgICQod2luZG93KS5vbiggJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgaWYoIHNjcm9sbCA+IDUwICl7XG4gICAgICAgICAgICAgICAgdG9jLnJlcG9zaXRpb25UT0MoJ3VwJyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0b2MucmVwb3NpdGlvblRPQygnZG93bicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoZWFkZXIoKTtcblxufSk7Il19
