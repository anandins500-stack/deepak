<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $from = "New Delhi";
    
    // Email configuration
    $to = "deepakvrm0770@gmail.com"; // Your email
    $subject = "New Portfolio Contact Form Submission from $name";
    
    $email_content = "
    <html>
    <head>
        <title>New Contact Form Submission</title>
    </head>
    <body>
        <h2>New Message from Portfolio Website</h2>
        <table style='border-collapse: collapse; width: 100%;'>
            <tr>
                <td style='padding: 10px; border: 1px solid #ddd; background: #f9f9f9;'><strong>Name:</strong></td>
                <td style='padding: 10px; border: 1px solid #ddd;'>$name</td>
            </tr>
            <tr>
                <td style='padding: 10px; border: 1px solid #ddd; background: #f9f9f9;'><strong>Email:</strong></td>
                <td style='padding: 10px; border: 1px solid #ddd;'><a href='mailto:$email'>$email</a></td>
            </tr>
            <tr>
                <td style='padding: 10px; border: 1px solid #ddd; background: #f9f9f9;'><strong>From:</strong></td>
                <td style='padding: 10px; border: 1px solid #ddd;'>$from</td>
            </tr>
            <tr>
                <td style='padding: 10px; border: 1px solid #ddd; background: #f9f9f9;'><strong>Message:</strong></td>
                <td style='padding: 10px; border: 1px solid #ddd;'>$message</td>
            </tr>
        </table>
        <br>
        <p><small>This email was sent from your portfolio website contact form.</small></p>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: ' . $email . "\r\n";
    $headers .= 'Reply-To: ' . $email . "\r\n";
    
    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode([
            'status' => 'success',
            'message' => 'Thank you! Your message has been sent successfully.'
        ]);
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'Sorry, something went wrong. Please try again later.'
        ]);
    }
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid request method.'
    ]);
}
?>