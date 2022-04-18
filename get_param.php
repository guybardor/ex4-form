<!doctype html>
<html>

<head>
    <title>forms</title>
</head>

<body>
    <section>
        welcome<br>
        <?php



            $un   =  $_GET["reg_un"];
            $pass =  $_GET["pass_un"];
            $gen =   $_GET["gender_un"];

            if($un == "ani" && $pass == "Ani123456" && $gen = "male")
            {

                echo "this is me";
                echo "<h2>good night : " .$un.  "</h2>" ;
                echo "<h2>your gender is : ".$gen. "</h2>";
            }
            else{
                echo "you wont pass the wall";
            }
        ?>
    </section>
</body>

</html>