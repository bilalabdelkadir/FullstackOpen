const _ = require("lodash");

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

const mostBlogs = (blogs) => {
  const authorCounts = _.countBy(blogs, "author");
  const authorWithMostBlogs = _.maxBy(
    Object.keys(authorCounts),
    (author) => authorCounts[author]
  );

  return {
    author: authorWithMostBlogs,
    blogs: authorCounts[authorWithMostBlogs],
  };
};

const mostLikes = (blogs) => {
  const author = _.maxBy(blogs, (blog) => blog.likes).author;

  const totalLikes = _.sumBy(_.filter(blogs, { author }), "likes");

  console.log("name", author, "likes", totalLikes);
  return {
    author,
    likes: totalLikes,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};