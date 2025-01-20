const movies = [
    {
      title: "Bracula: Condemor II",
      duration: 192,
      categories: ["comedia", "aventura"],
    },
    {
      title: "Spider-Man: No Way Home",
      duration: 122,
      categories: ["aventura", "acción"],
    },
    {
      title: "The Voices",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "Shrek",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
  ];

 //resultado a esperar const categorias = ["comedia", "aventura", "acción", "thriller", "animación"];
 const categories= [ ];

  for( let i= 0; i< movies.length;i++){

    for(let j=0;j<movies[i].categories.length;j++){

        const category= movies[i].categories[j]; 

        if(!categories.includes(category)){
        categories.push(category);
        }
    }
    
  }

console.log(categories);
  

