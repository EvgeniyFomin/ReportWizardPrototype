$(document).on('change', '.checkbox', function() {
  var id = this.attributes["id"].value;
    var text = $(this).prev().text();
    debugger;
    if(this.checked) {
        // var a = this.attributes["id"].value;
        $("#sr").append("<span data-id = " + id +" >" + text + " </span>");
    }
   else{
       $("span[data-id = " + id +"]").remove();
        debugger;
   }
});