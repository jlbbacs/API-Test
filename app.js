    // fetch('https://fakestoreapi.com/products')
    // .then ((response) => response.json())
    // .then((data) => console.log(data))
 
const button = document.querySelector('#button1')
const input= document.querySelector('#input-text')

function showApi(){
    fetch(input.value).then((data)=> {
        return data.json();
    
     }).then((data)=> {
    
        let tableData = "";
        data.map((values)=> {
            tableData += `<tr class="text-center">
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td> <img src="${values.image}"/></td>
          </tr>`
    
        })
        document.querySelector('#table_body').innerHTML = tableData;
     })
    //  .catch((error)=>{
    //     alert('failed to fetch')
    //  }) 
     input.value = ""
    
    }

    button.addEventListener('click',showApi)



 








  