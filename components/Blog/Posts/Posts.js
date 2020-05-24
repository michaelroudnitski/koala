import PostPreview from "../Misc/PostPreview";

function Posts({ posts }) {
  let content = null;
  if (posts) {
    content = posts.map((post, index) => (
      <PostPreview key={index} post={post} />
    ));
  }

  return (
    <div>
      <h4 className="mx-3">New Posts</h4>
      <div className="horizontal-blog-post-cards">
        {content ? content : "Oops... Couldn't find what you were looking for"}
      </div>
    </div>
  );
}

export default Posts;
