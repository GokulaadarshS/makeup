async function makeup(){
    const url = "http://makeup-api.herokuapp.com/api/v1/products.json";
    fetch(url);
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        getdata(data);
    })
    .catch(function(err){
        console.log(err.message);
    });
}

function getdata(data){
   let userdiv = document.querySelector("#data");
   userdiv.innerHTML = "";
   let table = document.createElement("table");

   data.forEach(function(currentdata){
       let row = table.insertRow();
       let name = row.insertCell();
       name.innerHTML = currentdata.name;
       let brand = row.insertCell();
       brand.innerHTML = currentdata.brand;
       let price = row.insertCell();
       price.innerHTML = currentdata.price;
       let image = row.insertCell();
       image.innerHTML = currentdata.image_link;
       let product_link = row.insertCell();
       product_link.innerHTML = currentdata.product_link;
       let description = row.insertCell();
       description.innerHTML = currentdata.description;
   });

   userdiv.appendChild(table)

}
