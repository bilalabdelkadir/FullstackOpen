const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const likesArray = blogs.map((blog) => blog.likes);
  const reducer = (sum, likes) => sum + likes;
  return likesArray.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  const favorite = blogs.reduce((prev, current) => {
    return prev.likes > current.likes ? prev : current;
  });

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
