import { PostInfo } from '../PostInfo/PostInfo';
import commentsFromServer from '../../api/comments.json';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => {
      const comments = commentsFromServer.filter(
        comment => comment.postId === post.id,
      );

      const postWithComments = { ...post, comments };

      return <PostInfo post={postWithComments} key={post.id} />;
    })}
  </div>
);
