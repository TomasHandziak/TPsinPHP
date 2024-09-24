<?html 

    include 'conexion_be.html';

    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $password = $_POST['password'];
    $username = $_POST['username'];
    $rePassword = $_POST['rePassword'];

    if($rePassword != $password){
        echo '
            <script> 
                alert("Las contraseñas no coinciden");
                window.location = "../registerForm.html";
            </script>
        ';
        exit();
        mysqli_close($conexion);    
    }


    $password = hash('sha512', $password); 


    $query = "INSERT INTO usurios(name, username, mail, password) 
              VALUES ('$name','$username','$mail','$password')";

    $verificar_mail =mysqli_query($conexion, "SELECT * FROM usurios WHERE mail='$mail'");
    $verificar_user =mysqli_query($conexion, "SELECT * FROM usurios WHERE username='$username'");


    if(mysqli_num_rows($verificar_mail) > 0) {
        echo '
        <script>
            alert("Correo ya registrado, intentalo denuevo");
            window.location = "../registerForm.html";
        </script>
        ';
        exit();
        mysqli_close($conexion);
    }

    
    if(mysqli_num_rows($verificar_user) > 0) {
        echo '
        <script>
            alert("Nombre de usuario ya registrado, intentalo denuevo");
            window.location = "../registerForm.html";
        </script>
        ';
        exit();
        mysqli_close($conexion);
    }

    $ejecutar = mysqli_query($conexion, $query);

    if($ejecutar){
        echo '
            <script>
                alert("Se registró correctamente");
                window.location = "../form.html"
            </script>
        ';
    } else {
        echo '
            <script>
                alert("Intentalo denuevo");
                window.location = "../registerForm.html"
            </script>
        ';
    }

    mysqli_close($conexion);
?>