console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.


const postHeader = document.createElement('h1')
postHeader.innerText = 'This is why i love chickens'
document.body.append(postHeader)


const post = document.createElement('article')
post.classList.add('post')
document.body.append(post)

const paragraph = document.createElement('p')
paragraph.classList.add('post__content')
paragraph.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
post.append(paragraph)

const footer = document.createElement('footer')
footer.classList.add('post__footer')
post.append(footer)

const username = document.createElement('span')
username.classList.add('post__username')
username.innerText = '@username'
footer.append(username)

const button = document.createElement('button')
button.classList.add('post__button')
button.innerHTML = '♥ Like'
footer.append(button)

button.addEventListener("click", handleLikeButtonClick);






