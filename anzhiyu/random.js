var posts=["posts/4a17b156.html","posts/4fd0e23c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };