<?php
    $servername="localhost";
    $username="root";
    $password="";
    $database="sneaker_store";

    $conn = new msqli($servername,$username,$password,$database);

    if ($conn->connect_error) {
        die("Connection failed :".$conn->connect_error);
    }

    $name=$_POST['name'];
    $phone=$_POST['phone'];
    $address=$_POST['address'];
    $expiry_month=$_POST['expiry_month'];
    $expiry_year=$_POST['expiry_year'];
    $cvv=$OST_P['cvv'];


    //insert data into database
    $sql= "INSERT INTO payments(name,phone,address,expiry_month,expiry_year,cvv)
    VALUES('$name','$phone','$address','$expiry_month','$expiry_year','$cvv')";

    if ($conn->query($sql)===TRUE) {

        echo "<script>alert('Checkout complete');</script>";

        echo "<script>window.setTimeout(function(){ window.location.href = 'index.html'; }, 1000);</script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>




    