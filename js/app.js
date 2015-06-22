 $(document).ready(function(){
//   alert("Hello")
   $('.bxslider').bxSlider({
   pagerCustom: '#bx-pager'
 });
  
    var request = new XMLHttpRequest();
    request.open('GET', 'gallery_json.js', true);
    request.onload = function() {
    var data = JSON.parse(request.responseText)
    
  }
  request.send();
 
});