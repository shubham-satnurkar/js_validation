<?php 
include("db.php");
$query=mysqli_query($conn,"select * from posts order by id desc");
// delete post 
if(!empty($_GET['delid'])){
    $id=$_GET['delid'];
    if(mysqli_query($conn,"delete from posts where id=$id"))
    {
        header("location:index.php");
    }
    else {
        echo "Not deleted";
    }
}
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Posts!</title>
  </head>
  <body>
    <main class="container">
        <h1> Posts </h1>
        <table class="table">
            <tr>
                <th colspan="5">
                    <a href="addpost.php"> Add Posts </a>
                </th>
            </tr>
            <tr>
                <th> S.no </th>
                <th> Name </th>
                <th> Description </th>
                <th> Date </th>
                <th> Action </th>
            </tr>
            <?php 
            if(mysqli_num_rows($query)>0)
            {
             $sn=1;
             while($arr=mysqli_fetch_assoc($query))
             {
                ?>
            <tr>
                <td><?= $sn;?></td>
                <td><?= $arr['name'];?></td>
                <td><?= $arr['description'];?></td>
                <td><?= $arr['created_at'];?></td>
                <td>
                    <a href=""> <a href="?delid=<?= $arr['id'];?>"> Delete </a> </a>
                </td>
            </tr>
            <?php
            $sn++;
             }
            }
            else {
                ?>
                <tr>
                    <td colspan="5" align="center"> No post found </td>
                </tr>
                <?php 
            }
            ?>
        </table>

    </main>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>