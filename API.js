// izmantosim https://dummyjson.com/docs/posts


let loadPostBtn = document.querySelector('.loadPostBtn');
let postsDiv = document.querySelector('.posts');
let postDialog = document.querySelector('#postDialog');
let closedialogBtn = document.querySelector('.closeDialogBtn');

let addPostDialog = document.querySelector('#addPostDialog');

let openCreatePostBtn = document.querySelector('.openCreatePostBtn');
let savePostBtn = document.querySelector('.savePostBtn');
 let form = addPostDialog.querySelector('form');

savePostBtn.onclick = ()=>{
   
    fetch('https://dummyjson.com/posts/add',{
        method: 'POST',
         headers: {
        "Content-Type": "application/json"
    },
        body:JSON.stringify({
            title: form.querySelector('input[type="text"]').value,
            body:form.querySelector('textarea').value,
            userId: 5
        })
    })
    .then(res => res.json())
    .then(data => {
        form.reset();
        addPostDialog.close();
    });


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
                        <button class="editPostBtn" data-postid="${item.id}">Rediģēt</button>
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
        .then(()=>{
            for( button of document.querySelectorAll('.editPostBtn')){
                button.onclick = (e)=>{
                    id = e.target.dataset.postid;
                     fetch('https://dummyjson.com/posts/' + id)
                    .then((json)=>{return json.json()})
                    .then((data)=>{
                        form.querySelector('input[type="text"]').value = data.title;
                        form.querySelector('textarea').value = data.body;

                    })
                    .then(()=>{
                        addPostDialog.showModal();
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
