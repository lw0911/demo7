<?php

//if (strlen($_POST['comments'])) {
	//echo 'Your Message has been sent.';
	//exit();
//}

$fname = $_POST['first_name'];
$email = $_POST['Email'];
$website = $_POST['web_site'];
$comments = $_POST['comments'];
//print_r($_REQUEST);
//exit;
/*if (strtolower($heard_from) == 'other') {
	$heard_from = $_POST['other_specify'];
}*/

$admin_email = 'office@cleverapp.com';

$subject = ' Contact Us - '.$fname;

$to      = $admin_email;

$headers = 'From: '.$to . "\r\n" .
    'Reply-To: '.$to . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$subject1 = 'KIPL.com';

$to1      = $email;

$headers1 = 'From: '.$to . "\r\n" .
    'Reply-To: '.$to . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$message1 = 'Thank you for contacting GTI.  We have received your email and we will be in touch soon.';

$message .= 'Hi,' . "\n";
$message .= 'Email id of the customer' . "\n";
$message .= 'Name : '.$fname . "\n";
$message .= 'Email Address : '.$email . "\n";
$message .= 'Message : '.$comments . "\n";
$message .= 'Regards,' . "\n";
$message .= 'Admin.';
@mail($to, $subject, $message, $headers);
@mail($to1, $subject1, $message1, $headers1);

echo 'Your Message has been sent.';