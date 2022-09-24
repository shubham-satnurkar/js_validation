<?php 
  error_reporting(0);
  if(isset($_POST['add'])){
      $num1=$_POST['t1'];
      $num2=$_POST['t2'];
      $sum=$num1+$num2;
  }
?>
<!DOCTYPE html>
<html>
    <body>
        <h2> Addition </h2>
        <form method="post">
            No1 : <input type="text" name="t1" value="<?= $num1;?>"/><br/>
            No2 : <input type="text" name="t2" value="<?= $num2;?>"/><br/>
            Result : <input type="text" name="t3" value="<?= $sum;?>"/><br/>
            <input type="submit" value="Addition" name="add"/>

        </form>
    </body>
</html>