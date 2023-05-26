let form = document.getElementById("form");
let input = document.getElementById("input");
let errorMsg = document.getElementById("errorMsg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    errorMsg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    errorMsg.innerHTML = " ";
    console.log("success");
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};
let createPost = () => {
  posts.innerHTML += `<div class="post" id="post">
    <p> ${data.text}</p>
    <span id="options">
        <i onClick="editPost(this)" class="fa-regular fa-pen-to-square"></i>
        <i onClick="deletePost(this)" class="fa-solid fa-trash"></i>
    </span>
</div>`;
  input.value = " ";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
