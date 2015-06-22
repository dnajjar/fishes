 $(document).ready(function(){
//   alert("Hello")
  $('.bxslider').bxSlider({
  buildPager: function(slideIndex){
    switch(slideIndex){
      case 0:
        return '<img src="/images/thumbs/tree_root.jpg">';
      case 1:
        return '<img src="/images/thumbs/houses.jpg">';
      case 2:
        return '<img src="/images/thumbs/hill_fence.jpg">';
    }
  }
});
 
});