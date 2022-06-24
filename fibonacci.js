let x = 0;

 let y = 1;

    console.log(x,y);

  for(i=0;i<5;i++)
       {
        z = x + y;
       x = y;
        y = z;

        console.log(z);
       }