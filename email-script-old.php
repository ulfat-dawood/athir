<?php 

if(isset(  $_POST['sendMailBtn']  )){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $msgBody = $_POST['msg'];

    // $emailTo = "info@nexencare.com"; 
    $emailTo = "dawoodu@nexencare.com"; 
    $subject = "Client Email ($name - $contact)"; 

    $headers = 'From: '. $email . "\r\n" . 

    'Reply-To: '. $emailTo . "\r\n" . 

    'X-Mailer: PHP/' . phpversion(); 

    mail($emailTo, $subject, $msgBody, $headers );
    echo "fdf"; 
    header("location: index.php");
}

?>