<?php

$nombre = $email = $asunto = $mensaje = "";
$email_to = "hola@sauhce.com.ar";
$email_subject = "Feedback desde la website";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = test_input($_POST["nombre"]);
  $email_from = test_input($_POST["email"]);
  $asunto = test_input($_POST["asunto"]);
  $mensaje = test_input($_POST["mensaje"]);
  $headers = "From: " . $email_from . "\n";
  $headers .= "Reply-To: " . $email_from . "\n";
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

$message = "Nombre: ". $nombre . "\r\nasunto: " . $asunto. "\r\n email: " . $email_from. "\r\nMensaje: " . $mensaje;
ini_set("sendmail_from", $email_to);
$sent = mail($email_to, $email_subject, $message, $headers, "-f".$email_to);
if ($sent)
{?>
<script>
alert("Gracias por enviar sus datos. En breve nos contactaremos.");
 window.location="http://www.sauhce.com.ar";
</script>

<?php
} else {
echo "Hubo un error. Por favor, intente otro medio de contacto";
}
?>
