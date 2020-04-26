<?php
$email_to = "hola@sauhce.com.ar";
$name = $_POST["Nombre"];
$email_from = $_POST["Email"];
$celular = $_POST["Celular"];
$sector = $_POST["Sector"];
$message = $_POST["Mensaje"];
$email_subject = "Feedback desde la website";
$headers = "From: " . $email_from . "\n";
$headers .= "Reply-To: " . $email_from . "\n";

$message = "Nombre: ". $name . "\r\nCelular: " . $celular. "\r\nSector: " . $sector. "\r\nMensaje: " . $message;
ini_set("sendmail_from", $email_to);
$sent = mail($email_to, $email_subject, $message, $headers, "-f".$email_to);
if ($sent)
{?>

    <script>alert("Gracias por enviar sus datos. En breve nos contactaremos.");
 window.location="/index.html";
</script>

<?php
} else {
echo "Hubo un error. Por favor, intente otro medio de contacto";
}
?>