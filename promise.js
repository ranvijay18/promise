
let posts = ["Post1", "Post2", "Post3"];
var count = posts.length;

createPost = () => {
  return new Promise((resolve, reject) => {
    
    this.count = this.count + 1;
    resolve('Post' + count + ' is created');
    let post = "Post"+count;
    posts.push(post);
  });
};

updateLastUserActivityTime = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      const date = new Date();
      resolve('User last activity time: ' + date);
    }, 1000);
  });
};

deletePost = () => {
    return new Promise((resolve,reject) =>{
        resolve('Post' + count +' is deleted');
        this.count = this.count - 1;
        posts.pop();
    })
}
Promise.all([createPost(),updateLastUserActivityTime(),posts,deletePost()])
.then((r) => {console.log(r)});
