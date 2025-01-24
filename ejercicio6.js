const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];

  function swap(array, index1, index2){

    if (index1<0 || index1>array.length|| index2<0 ||index2> array.length){
        console.log( "Indices fuera de rango");
    }else{
                const i = array[index1];
        array[index1]=array[index2];
        array[index2]= i;
        return array;
    }
  }
  

  console.log(swap(fantasticFour,0,3 ));
  //console.log(swap(fantasticFour,2,4 ));