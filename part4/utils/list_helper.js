const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((total, blog) => {
    return total + blog.likes;
  }, 0);
};

const favoriteBlog = (blogs) => {
  let maxLikes = 0;
  let favorite = null;
  blogs.forEach((blog) => {
    if (blog.likes > maxLikes) {
      maxLikes = blog.likes;
      favorite = blog;
    }
  });

  if (favorite) {
    const { title, author, likes } = favorite;
    return { title, author, likes };
  } else {
    return null;
  }
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
