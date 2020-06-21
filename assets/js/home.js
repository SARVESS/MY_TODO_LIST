

// ajax call to delete tasks from list
(function(){
    $('#delete-button').on('click', function(){
    var item = new Array();
      if($('input:checkbox:checked').length>0){
        $('input:checkbox:checked').each(function(){
          item.push($(this).attr('id'));
        });
        sendResponse(item);
      }
   });
    function sendResponse(item) {
      $.ajax({
        type:'post',
        url:"/destroy",
        data:{item:item},
        success:function(data){
          location.reload();
        }
      });
    }
 })();

 // function to line through when checkbox is clicked
 (function(){
   var checkboxes = $('#list-checkbox input');
   var descriptions = $('#list-description');
   var dates = $('#list-date');
   for(let i = 0;i < checkboxes.length;i++){
     $(checkboxes[i]).on('click', function(){
        if(checkboxes[i].checked){
          descriptions[i].style.textDecoration = "line-through";
          dates[i].style.textDecoration = "line-through";
        } else {
          descriptions[i].style.textDecoration = 'none';
          dates[i].style.textDecoration = 'none';
        }
     });
   }
 })();
