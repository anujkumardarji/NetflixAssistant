$(document).ready(function() {
  
    var nameOfuser;
    var flag = false;
    //dropdown 
    $(".dropdown-menu li a").click(function(){
    var selText = $(this).text();
    if(nameOfuser == selText) {
         
     }
    nameOfuser = selText;
    $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="selectedValue"></span>');
    });  

    //radio button
    var count = 0; //for alert to not happen when page loades for first time 
    $('#aBtnGroup button').on('click', function() {
    //    console.log(nameOfuser)
    if(nameOfuser == undefined && count!=0){alert('select the user dummy')}
    else{    
        var thisBtn = $(this);
        
        thisBtn.addClass('active').siblings().removeClass('active');
        var btnText = thisBtn.text();
        var btnValue = thisBtn.val();
        // console.log(btnText + ' - ' + btnValue);
        
        $('#selectedVal').text(btnValue);
    }
    count=1;
  });
  
  //this is to set the default value 
  $('#aBtnGroup button[value="Free"]').click();
    
})

  