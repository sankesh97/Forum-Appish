import { useContext } from 'react';
import Post from '../Components/Post';
import { ForumContext } from '../Context/forumContext';

const ListPosts = () => {
  const { forumState } = useContext(ForumContext);
  return (
    <>
      <div className='row'>
        <div className='col-8'>
          {forumState ? (
            forumState.posts.map((post) => (
              <Post key={post.postId} postData={post}></Post>
            ))
          ) : (
            <p>Data Not Loaded </p>
          )}
        </div>
        <div className='col-4 py-3'>
          <h5>Sort By</h5>
        </div>
      </div>
    </>
  );
};
export default ListPosts;
