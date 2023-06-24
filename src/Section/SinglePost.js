import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ForumContext } from '../Context/forumContext';
import Post from '../Components/Post';

const SinglePost = () => {
  const { postsId } = useParams();
  const { getPostData, currentPost } = useContext(ForumContext);

  useEffect(() => {
    getPostData(postsId);
  }, []);

  return (
    <div className='row'>
      <div className='col-8'>
        {currentPost ? (
          <Post postData={currentPost} showComments={true}></Post>
        ) : (
          'There is some issue'
        )}
      </div>
    </div>
  );
};
export default SinglePost;
