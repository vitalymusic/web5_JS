// izmantosim https://dummyjson.com/docs/posts


let loadPostBtn = document.querySelector('.loadPostBtn');
let postsDiv = document.querySelector('.posts');
let postDialog = document.querySelector('#postDialog');
let closedialogBtn = document.querySelector('.closeDialogBtn');

let addPostDialog = document.querySelector('#addPostDialog');

let openCreatePostBtn = document.querySelector('.openCreatePostBtn');
let savePostBtn = document.querySelector('.savePostBtn');


savePostBtn.onclick = ()=>{
    let form = addPostDialog.querySelector('form');
    fetch('https://dummyjson.com/posts/add',{
        method: 'POST',
        body:new FormData(form)
    })
    .then(res => res.json())
    .then(data => console.log(data));


}


openCreatePostBtn.onclick = ()=>{
    addPostDialog.showModal();
}


closedialogBtn = onclick = ()=>{
    postDialog.close();
}

loadPostBtn.onclick = () => {
    fetch('https://dummyjson.com/posts')
        .then((json) => { return json.json() })
        .then((data) => {
            let html = "";
            data["posts"].forEach((item) => {
                html += `
                    <div class="post">
                        <h3>${item.title}</h3>
                        <p>${item.body}</p>

                        <button class="openPostBtn" data-postid="${item.id}">Lasīt vairāk</button>
                    </div>
               `;
            })
            postsDiv.innerHTML = html;
        })
        .then(() => {
            for (button of document.querySelectorAll('.openPostBtn')) {
                button.onclick = (e) => {
                    let id = e.target.dataset.postid;
                    fetch('https://dummyjson.com/posts/' + id)
                    .then((json)=>{return json.json()})
                    .then((data)=>{
                       
                        document.querySelector('.dialog_content h3').innerHTML = data.title;
                        document.querySelector('.dialog_content p').innerHTML = data.body;
                        postDialog.showModal();
                    })
                }
            }


        })
        .finally(() => {
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
