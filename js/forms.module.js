define(["require","exports"],function(t,o){"use strict";function n(t){t.css("color","#aaa").val("Write your message here...")}function e(t){t.val("").css("color","#111")}function a(){$("textarea").on("focus",function(){e($(this))}).on("focusout",function(){""==$(this).val()&&n($(this))})}function i(){$('#contact-form [type="submit"]').on("click",function(t){t.preventDefault();var o={};$("form input, form textarea").each(function(){var t=$(this).attr("name"),n=$(this).val();o[t]=n}),$.ajax({url:"https://formspree.io/jmob1986@gmail.com",method:"POST",data:o,dataType:"json"}).done(function(t){var o=$("form").height(),e=$(".form-content").html();$("form").css("height",o),$(".form-content").animate({opacity:"0"},function(){var t=$(this);$(this).html("<h2>Thanks!</h2><p>I&rsquo;ll get back to you soon.</p>").animate({opacity:"1"}),setTimeout(function(){console.log("timeout"),t.animate({opacity:"0"},function(){$(this).html(e).animate({opacity:"1"}),n($("form textarea")),a()})},5e3)})}).fail(function(){$("form h2").after('<p class="error-msg" style="display: none;">Sorry, but something went wrong. Please try again.</p>'),$("form .error-msg").fadeIn()})})}o.formStyles=a,o.formSubmit=i});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLm1vZHVsZS50cyJdLCJuYW1lcyI6WyJ0ZXh0YXJlYVJlc3R5bGUiLCJ0ZXh0YXJlYSIsImNzcyIsInZhbCIsInRleHRhcmVhU3R5bGUiLCJmb3JtU3R5bGVzIiwiJCIsIm9uIiwidGhpcyIsImZvcm1TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibWVzc2FnZURhdGEiLCJlYWNoIiwibmFtZSIsImF0dHIiLCJ2YWx1ZSIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiZGF0YVR5cGUiLCJkb25lIiwiZm9ybUhlaWdodCIsImhlaWdodCIsImZvcm1IVE1MIiwiaHRtbCIsImFuaW1hdGUiLCJvcGFjaXR5IiwiY29udGVudCIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsImFmdGVyIiwiZmFkZUluIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6InVEQUlBLFNBQUFBLEdBQXlCQyxHQUNyQkEsRUFBU0MsSUFBSSxRQUFTLFFBQVFDLElBQUksOEJBR3RDLFFBQUFDLEdBQXVCSCxHQUNuQkEsRUFBU0UsSUFBSSxJQUFJRCxJQUFJLFFBQVMsUUFHbEMsUUFBQUcsS0FDUUMsRUFBRSxZQUNHQyxHQUFJLFFBQVMsV0FDVkgsRUFBZUUsRUFBRUUsU0FFcEJELEdBQUksV0FBWSxXQUNRLElBQWpCRCxFQUFFRSxNQUFNTCxPQUFlSCxFQUFpQk0sRUFBRUUsU0FJOUQsUUFBQUMsS0FDSUgsRUFBRSxpQ0FBaUNDLEdBQUcsUUFBUyxTQUFTRyxHQUNwREEsRUFBTUMsZ0JBQ04sSUFBSUMsS0FDSk4sR0FBRSw2QkFBNkJPLEtBQU0sV0FDakMsR0FBSUMsR0FBaUJSLEVBQUVFLE1BQU1PLEtBQUssUUFDOUJDLEVBQWlCVixFQUFFRSxNQUFNTCxLQUM3QlMsR0FBWUUsR0FBUUUsSUFFeEJWLEVBQUVXLE1BQ0VDLElBQUssMENBQ0xDLE9BQVEsT0FDUkMsS0FBTVIsRUFDTlMsU0FBVSxTQUNYQyxLQUFNLFNBQVNGLEdBQ2QsR0FBSUcsR0FBc0JqQixFQUFFLFFBQVFrQixTQUNoQ0MsRUFBbUJuQixFQUFFLGlCQUFpQm9CLE1BQzFDcEIsR0FBRSxRQUFRSixJQUFLLFNBQVVxQixHQUN6QmpCLEVBQUUsaUJBQWlCcUIsU0FBVUMsUUFBVyxLQUNwQyxXQUNJLEdBQUlDLEdBQVV2QixFQUFFRSxLQUNoQkYsR0FBRUUsTUFDR2tCLEtBQUssMkRBQ0xDLFNBQVVDLFFBQVcsTUFDMUJFLFdBQVksV0FDUkMsUUFBUUMsSUFBSSxXQUNaSCxFQUNLRixTQUFVQyxRQUFXLEtBQ2xCLFdBQ0l0QixFQUFFRSxNQUNHa0IsS0FBS0QsR0FDTEUsU0FBVUMsUUFBVyxNQUMxQjVCLEVBQWdCTSxFQUFFLGtCQUNsQkQsT0FFYixTQUdaNEIsS0FBTSxXQUNMM0IsRUFBRSxXQUNHNEIsTUFBTSxzR0FDWDVCLEVBQUUsbUJBQW1CNkIsYUFuRGpDQyxFQUFBL0IsV0FBQUEsRUFVQStCLEVBQUEzQixXQUFBQSIsImZpbGUiOiJmb3Jtcy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgTWVzc2FnZURhdGEge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cblxuZnVuY3Rpb24gdGV4dGFyZWFSZXN0eWxlKHRleHRhcmVhOkpRdWVyeSl7XG4gICAgdGV4dGFyZWEuY3NzKCdjb2xvcicsICcjYWFhJykudmFsKCdXcml0ZSB5b3VyIG1lc3NhZ2UgaGVyZS4uLicpO1xufVxuXG5mdW5jdGlvbiB0ZXh0YXJlYVN0eWxlKHRleHRhcmVhOkpRdWVyeSl7XG4gICAgdGV4dGFyZWEudmFsKCcnKS5jc3MoJ2NvbG9yJywgJyMxMTEnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1TdHlsZXMoKXtcbiAgICAgICAgJCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgLm9uKCAnZm9jdXMnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHRleHRhcmVhU3R5bGUoICQodGhpcykgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbiggJ2ZvY3Vzb3V0JywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiggJCh0aGlzKS52YWwoKSA9PSAnJyApeyB0ZXh0YXJlYVJlc3R5bGUoICQodGhpcykgKTsgfSBcbiAgICAgICAgICAgIH0pO1xufSAgIFxuICAgIFxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1TdWJtaXQoKXtcbiAgICAkKCcjY29udGFjdC1mb3JtIFt0eXBlPVwic3VibWl0XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgbWVzc2FnZURhdGEgOiBNZXNzYWdlRGF0YSA9IHt9O1xuICAgICAgICAkKCdmb3JtIGlucHV0LCBmb3JtIHRleHRhcmVhJykuZWFjaCggZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBuYW1lICA6IHN0cmluZyA9ICQodGhpcykuYXR0cignbmFtZScpO1xuICAgICAgICAgICAgbGV0IHZhbHVlIDogc3RyaW5nID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhW25hbWVdID0gdmFsdWU7IFxuICAgICAgICB9KTtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2Zvcm1zcHJlZS5pby9qbW9iMTk4NkBnbWFpbC5jb21cIiwgXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgZGF0YTogbWVzc2FnZURhdGEsXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCJcbiAgICAgICAgfSkuZG9uZSggZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBsZXQgZm9ybUhlaWdodCA6IG51bWJlciA9ICQoJ2Zvcm0nKS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGxldCBmb3JtSFRNTDogc3RyaW5nID0gJCgnLmZvcm0tY29udGVudCcpLmh0bWwoKTtcbiAgICAgICAgICAgICQoJ2Zvcm0nKS5jc3MoICdoZWlnaHQnLCBmb3JtSGVpZ2h0ICk7XG4gICAgICAgICAgICAkKCcuZm9ybS1jb250ZW50JykuYW5pbWF0ZSh7ICdvcGFjaXR5JzogJzAnIH0sIFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoJzxoMj5UaGFua3MhPC9oMj48cD5JJnJzcXVvO2xsIGdldCBiYWNrIHRvIHlvdSBzb29uLjwvcD4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyAnb3BhY2l0eSc6ICcxJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aW1lb3V0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyAnb3BhY2l0eSc6ICcwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKGZvcm1IVE1MKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgJ29wYWNpdHknOiAnMScgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYVJlc3R5bGUoJCgnZm9ybSB0ZXh0YXJlYScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1TdHlsZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5mYWlsKCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCgnZm9ybSBoMicpXG4gICAgICAgICAgICAgICAgLmFmdGVyKCc8cCBjbGFzcz1cImVycm9yLW1zZ1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5Tb3JyeSwgYnV0IHNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLjwvcD4nKTtcbiAgICAgICAgICAgICQoJ2Zvcm0gLmVycm9yLW1zZycpLmZhZGVJbigpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0iXX0=
