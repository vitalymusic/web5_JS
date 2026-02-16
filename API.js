// izmantosim https://dummyjson.com/docs/posts


let loadPostBtn = document.querySelector('.loadPostBtn');
let postsDiv = document.querySelector('.posts');


loadPostBtn.onclick = ()=>{
    fetch('https://dummyjson.com/posts')
        .then((json)=>{return json.json()})
        .then((data)=>{
            let html="";
            data["posts"].forEach((item)=>{
              html +=`
                    <div class="post">
                        <h3>${item.title}</h3>
                        <p>${item.body}</p>
                    </div>
               `; 
            })
            postsDiv.innerHTML = html;
        })
        .finally(()=>{
            console.log("Dati ielādēti!!!");
        })
    ;


}


// loadPostBtn.onclick = async () => {
//     try {
//         const response = await fetch('https://dummyjson.com/posts');
//         const data = await response.json();
//         let html = "";
//         data.posts.forEach((item) => {
//             html += `
//                 <div class="post">
//                     <h3>${item.title}</h3>
//                     <p>${item.body}</p>
//                 </div>
//             `;
//         });

//         postsDiv.innerHTML = html;

//     } catch (error) {
//         console.error("Kļūda ielādējot datus:", error);
//     } finally {
//         console.log("Dati ielādēti!!!");
//     }
// };


// XML
// async await
