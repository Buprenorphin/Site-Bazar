var playrOne = {name: "Roman", score: 1000, rank: 1};
var playrTwo = {name: "Sofa", score: 5000, rank: 5};

function playrDetails (){
    console.log (this.name + this.score + thide.rank);
}

playrOne.logDetails = playrDetails;
playrTwo.logDetails = playrDetails;

playrOne.logDetails ();
playrTwo.logDetails ();