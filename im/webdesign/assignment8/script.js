$(document).ready(function(){
    
    var language = 0;

    $("#first").click(function()
    {
        $("#first").hide();  
        $("#second").show();
        $("#second").css("width", "100%");
        
        $("#main").css("width", "80%");
        $(".tab").css("width", "79%");
        $(".tab").css("margin", "0 auto");
        $("#main").css("height", "65vh");
        
        setTimeout(function(){
            $(".hiddenText").css("opacity", "1");
        }, 1500);

    });
    
    $(".button").click(function()
    {
        if (language == 0)
        {
            $(".select").replaceWith(
            "<div class='select'> <ol> <li>حبيبتي</li> <li>خطيبتي</li> <li>كلبي</li> <li>درجتي - احيانا</li> <li>والدي ووالدتي - كثيرا </li></ol> </div>");
                
            language = 1;
        }
        else
        {
            $(".select").replaceWith("<div class='select'><ol><li>7abibti</li><li>5a6eebti</li><li>my dog</li><li>my major (sometimes)</li><li>my parents (most times)</li></ol></div>");
            language = 0;
                
        }
    });
    
    
    $("form[name='survey']").validate({
    rules: {
        
      firstname: "required",
      answer: "required",
    },
        
      messages: {
      name: "please enter your name",
      answer: "please type something, anything"
      }, 
        
    submitHandler: function(form) {
      form.submit();
    }
  });
    
});