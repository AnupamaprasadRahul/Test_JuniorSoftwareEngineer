<?php


echo "<h3>PHP page - displays current date and time</h3>".'<br>';

date_default_timezone_set("Europe/Malta");

echo "The Current DATE and TIME is ".date('d').",".date(' l').",".date(' M').",".date(' Y').",".date(' h:i:s a ') .'<br>';


// function perform reverse of a string.


function stringReverse($word){
    $length=strlen($word);
    $reversed='';

    for($i=$length-1;$i>=0;$i--)
    {
        $reversed .=$word[$i];
    }

     return $reversed;
}


     $word="HelloWorld!";
     $answer=stringReverse($word);
     echo $answer ."<br>";


     

     

 // function to give output as an array of elements starts with vowels

function vowel($array)
{
    $results=array();

    foreach($array as $element)
    {
        $firstLetter=substr($element,0,1);
        $vowels=array('a','e','i','o','u');

        if(in_array(strtolower($firstLetter),$vowels))
        {
            $results[]=$element;
        }
    }
        return $results;
}

   $list=array('pineapples','Apple','Banana','grapes','umbrella','pear','owl','elephant','icecream');
   $answer=vowel($list);

   print_r ($answer);



?>