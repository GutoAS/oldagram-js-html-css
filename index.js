const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
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

const postContainerEl = document.getElementById("postsContainerEl");

const postELements = posts.map((post) => {
  postContainerEl.innerHTML += `
  <section>
    <div class="container">
      <div class="user-container">
        <img class="user-avatar" src="${post.avatar}" />
        <div>
          <h3 >${post.name}</h3>
          <p >${post.location}</p>
        </div>
      </div>
      <div class="post-container">
        <img id="postImgEl" src="${post.post}" />
        <div class="post-icon-container">
          <img id="likeIconEl" src="images/icon-heart.png" alt="" />
          <img src="images/icon-comment.png" alt="" />
          <img src="images/icon-dm.png" alt="" />
        </div>
        <p class="likes"><span id="likesCounterEl">${post.likes}</span> likes</p>
        <p>
          <span class="username">${post.username}</span>
          <span id="userCommentEL"></span>${post.comment}
        </p>
      </div>
    </div>
  </section>
  `;
});
