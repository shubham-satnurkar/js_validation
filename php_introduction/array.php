<?php 
  $arr=[3,4,56,7,8];
  $sum=0;
  for($i=0;$i<sizeof($arr);$i++){
      echo $arr[$i]."<br/>";
      $sum=$sum+$arr[$i];
  }
  echo "The sum of an array is ".$sum;
?>