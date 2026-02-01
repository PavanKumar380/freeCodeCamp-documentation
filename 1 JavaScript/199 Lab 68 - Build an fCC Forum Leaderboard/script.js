const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';
const postsContainer = document.getElementById('posts-container');

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

function timeAgo(timeStamp) {
  const currTime = new Date();
  const tStamp = new Date(timeStamp);
  let diff = (currTime - tStamp) / 1000;
  if(diff >= 60) {
    diff /= 60;
    if(diff >= 60) {
      diff /= 60;
      if(diff >= 24) {
        diff /= 24;
        return `${Math.floor(diff)}d ago`;
      }
      return `${Math.floor(diff)}h ago`;
    }
    return `${Math.floor(diff)}m ago`;
  }
  return `${Math.floor(diff)}s ago`;
}

const viewCount = n => n >= 1000 ? `${Math.floor(n / 1000)}k` : n;

function forumCategory(catId) {
  const {category, className} = catId in allCategories
    ? allCategories[catId]
    : { category: "General", className: "general" };

  return `<a href="${forumCategoryUrl}${className}/${catId}" class="category ${className}">${category}</a>`;
}

function avatars(postArr, usArr) {
  const sizeReg = /{size}/;
  let str = "";
  postArr.forEach(poster => {
    const uId = poster['user_id'];
    const reqUser = usArr.filter(user => user.id === uId)[0];
    const src = avatarUrl + reqUser['avatar_template'].replace(sizeReg, '30');
    str += `<img src="${src}" alt="${reqUser.name}">`
  });
  return str;
}

function showLatestPosts({users, topic_list}) {
  let trStr = "";
  topic_list.topics.forEach(({id, title, views, posts_count, slug, posters, category_id, bumped_at}) => {
    trStr += `
      <tr>
        <td>
          <a href="${forumTopicUrl}${slug}/${id}" class="post-title">${title}</a>
          ${forumCategory(category_id)}
        </td>
        <td>
          <div class="avatar-container">
            ${avatars(posters, users)}
          </div>
        </td>
        <td>${posts_count - 1}</td>
        <td>${views}</td>
        <td>${timeAgo(bumped_at)}</td>
      </tr>
    `;
  });
  postsContainer.innerHTML = trStr;
}

async function fetchData() {
  fetch(forumLatest)
    .then(res => res.json())
    .then(data => showLatestPosts(data))
    .catch(error => console.log(error));
}

fetchData();