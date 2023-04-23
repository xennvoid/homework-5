import { Post } from './types';
import { updateObjectInArray } from './updateObjectInArray';

const app = document.getElementById('app') as HTMLDivElement;

const getPosts = async (): Promise<Post[]> => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const renderPosts = (posts: Post[]) => {

  const postsSection = document.createElement('section');
  postsSection.className = 'post__list';
  app.append(postsSection);

  posts.map(post => {
    const article = document.createElement('article');
    article.className = 'post__item';
    article.dataset.id = post.id.toString();

    const title = document.createElement('h3');
    title.className = 'post__title';
    title.innerText = post.title;

    const textBody = document.createElement('p');
    textBody.className = 'post__text';
    textBody.innerText = post.body;

    const authorId = document.createElement('span');
    authorId.className = 'post__author';
    authorId.innerText = "From user with id: " + post.userId;

    article.append(title, textBody, authorId);

    postsSection.append(article);
  })
}

getPosts().then(result => {
  console.log(result)
  const updatedPosts = updateObjectInArray<Post>(result, 'userId', 1, { title: "123" })
  renderPosts(updatedPosts)
})
