fetch("data.json")
   .then(function(response){
      return response.json();
   })
   .then(function(data){
      let placeholder = document.querySelector("#data-output");
      let out = "";
      for(let list of data){
         out += `
            <div class="link-list">
               <div class="list-data">
                  <span><img src='${list.icon}'></span>
                  <span>${list.category}</span>
               </div>
               <div class="list-score">
                  <span>${list.score}<span class="a"> /100</span></span>
               </div>
            </div>
          `;
       }
       placeholder.innerHTML = out;
    });

