<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>CleverApp</title>

<!-- SET: FAVICON -->
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
<!-- END: FAVICON -->

<!-- SET: STYLESHEET -->
<link href="css/style.css" rel="stylesheet" type="text/css" media="all">
<link rel="stylesheet" type="text/css" href="css/responsive.css" media="all">
<link href='http://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>
<!-- END: STYLESHEET -->



<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2">
</head>

<body>

<!-- SET: WRAPPER -->
<div class="wrapper">
	
    <!-- SET: CONTAINER -->

            <!-- SET: HEADER -->
            <?php include("header.php") ?>
            <!-- END: HEADER -->
            
            <!-- SET: bannerdiv -->
            <section>
           	<div id="mapdiv">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2999.9049644761117!2d-96.000401!3d41.245628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938dcb483b5a9b%3A0x70d38ae1f7c12997!2s5611+William+St%2C+Omaha%2C+NE+68106!5e0!3m2!1sen!2sus!4v1391456491998" width="100%" height="325" frameborder="0" style="border:0"></iframe>      
            </div>
            </section>
            <!-- END: bannerdiv -->
            <section>
            <div id="inner3">
            	<div class="container">
                
                	<div class="inner3_left">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    <div class="left">CleverApp Inc. 7301 Corby St Omaha
                    <div class="clear_0"></div>
                    </div>
                    
                    <div class="right">
                    <a class="phone2"><img src="images/dd2_03.png" alt="">(43) 436 464 426</a>
                    <a href="mailto:office@cleverapp.com" class="mail2"><img src="images/dd3_06.png" alt="">office@cleverapp.com</a>
                    <div class="clear_0"></div>
                    </div>
               
                   
                    </div>
                    
                    <div class="inner3_right">
                    <form id="form" name="form" class="wufoo topLabel page" enctype="multipart/form-data" method="post" action="contact_submit.php" onsubmit="return validateForm();">
                    
                    <input type="text"  class="input_value"  placeholder="Name" id="first_name"><br>
                    
                    <input type="text"  class="input_value" placeholder="Email"  id="email"><br>
                    
                    <input type="text" class="input_value" placeholder="Website...." id="website"><br>
							                    
                    <textarea class="textarea" cols="34" rows="4" placeholder="Message..." id="message"></textarea>
                    
                     <input type="button" value="Send message" class="submit" onClick="return validateForm();"/>

                    
                    
                    </form>
                    <span id="errS"></span>
                    
                    <div class="clear_0"></div>
                    </div>
                
                <div class="clear_0"></div>
                </div>
                <div class="clear_0"></div>
             </div>	
            </section>
            
               
</div>
<!-- END: WRAPPER -->


  		<!-- SET: FOOTER -->
        <?php include("footer.php") ?>
            
        <!-- END: FOOTER -->


<!-- SET: SCRIPTS -->
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.0.js"></script>
<script type="text/javascript" src="js/script.js"></script>

<script type="text/javascript" src="js/retina-1.1.0.js"></script>
  
<script type="text/javascript">

							  function validateForm()
							  {
								fname = $('#first_name');
								emal = $('#email');
								web = $('#website');
								comments = $('#message');
								
								fname.css({'border':''});
								emal.css({'border':''});
								web.css({'border':''});
								comments.css({'border':''});
								
								$('#errS').text('');
								
								err_s = false;
								
								if (fname.val() == '' || fname.val() == 'Jaso|') {
									fname.css({'border':'1px solid #FF0000'});
									err_s = true;
								}
														
								var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
								if (emal.val() == '' || !emailPattern.test(emal.val()) || emal.val() == 'Email...') {
									emal.css({'border':'1px solid #FF0000'});
									err_s = true;
								}
								
								
								if (web.val() == ''  || web.val() == 'Website...') {
									web.css({'border':'1px solid #FF0000'});
									err_s = true;
								}
								
								if (comments.val() == '' || comments.val() == 'Message...') {
									comments.css({'border':'1px solid #FF0000'});
									err_s = true;
								}
								
								if (err_s) {
									$('#errS').text('Please fill all required fields.');
									$('#errS').fadeIn(1000, function () {
										$('#errS').fadeOut(5000);
									});
									return false;
								}
								
								$.ajax({
									url: 'contact_submit.php',
									type : 'POST',
									data : 'first_name='+fname.val()+'&Email='+emal.val()+'&web_site='+web.val()+'&comments='+comments.val(),
									cache : false,
									success: function (data) {
										$('#errS').text(data);
										$('#errS').fadeIn(1000, function () {
											$('#errS').fadeOut(5000);
										});
										$('#first_name').val('');
										$('#email').val('');									
										$('#website').val('');
										$('#message').val('');
									}
								});
							
								return false;
							  }
							  
							</script>
<!-- END: SCRIPTS -->                            

</body>
</html>
