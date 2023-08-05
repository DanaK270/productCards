fetch('http://localhost:5000/products').then((data) =>{
        return data.json(); //converted to object
    }).then((objectData) => {
        let cardsData="";
        objectData.map((values)=>{
            cardsData+=`<div class="col-md-4 themed-grid-col">
            <div class="card mb-4 rounded-3 shadow-sm" style="width: 18rem;">
                <div class="img-container">
                    <img src="${values.image}" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${values.name}</h5>
                    <h5 class="card-title">${values.price}</h5>
                    <p class="card-text"> ${values.description} </p>
                    <a href="#" class="btn btn-primary">Purchase Now</a>
                </div>
              </div>
        </div>`;
        });
        document.getElementById("cards-container").innerHTML=cardsData;
    });
