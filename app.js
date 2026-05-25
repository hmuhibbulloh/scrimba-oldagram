const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 241,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const containerEl = document.querySelector(".container");

function renderPost(post) {
  const {
    name,
    username,
    location,
    avatar,
    post: postImage,
    comment,
    likes,
  } = post;

  const postDiv = document.createElement("div");
  postDiv.classList.add("post");
  const postHTML = `
          <div class="post__author">
          <img class="user-avatar" src="${avatar}" />
          <p class="post__author-name">
            ${name}
            <span class="post__author-location">${location}</span>
          </p>
        </div>
        <div class="post__img">
          <img src="${postImage}" />
        </div>
        <div class="post__stats">
          <div class="icons">
            <img class="icon" src="./images/icon-heart.png" />
            <img class="icon" src="./images/icon-comment.png" />
            <img class="icon" src="./images/icon-dm.png" />
          </div>
          <p class="post__author__likes">${likes} likes</p>
          <p>
            <span class="post__author__username">${username}</span> ${comment}
          </p>
        </div>
  `;

  postDiv.innerHTML = postHTML;
  containerEl.append(postDiv);
}

for (const post of posts) {
  renderPost(post);
}
