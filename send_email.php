<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "info@gillanisolar.com"; // Change this to your email
    $subject = "New Contact Form Message";

    $name = strip_tags($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = strip_tags($_POST["phone"]);
    $address = strip_tags($_POST["address"]);
    $interested_product = strip_tags($_POST["interested_product"]);
    $message = htmlspecialchars($_POST["message"]);

    $headers = "From: no-reply@yourdomain.com\r\n"; // use your domain email
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "You have received a new message from your website contact form:\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Address: $address\n";
    $body .= "Interested Product: $interested_product\n";
    $body .= "Message:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request.";
}
?>
