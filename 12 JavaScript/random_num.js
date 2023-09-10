var n = Math.random();
n = n * 6;    //it means random number ni range 0 - 0.999 hoy but *6 kari to range 0 
              //to 5 thay jai tiya sudhi na number aapse
n = Math.floor(n) + 1 ;  //0 to 5 sudhi random aapto but have +1 kariu atle 0 to 6 sudhi aapse
console.log(n);