<?php 
  $arr=[3,4,56,7,8];
  $sum=0;
  foreach($arr as $a){
      echo $a."<br/>";
      $sum=$sum+$a;
  }
  echo "The sum of an array is ".$sum;
?>