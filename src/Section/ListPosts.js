import { useContext, useState } from 'react';
import Post from '../Components/Post';
import { ForumContext } from '../Context/forumContext';

const ListPosts = () => {
  const { forumState } = useContext(ForumContext);
  const [sortSelection, setsortSelection] = useState('Latest');
  return (
    <>
      <div className='row'>
        <div className='col-8'>
          {forumState ? (
            forumState.posts
              .sort((a, b) =>
                sortSelection === 'Latest'
                  ? new Date(b.createdAt) - new Date(a.createdAt)
                  : sortSelection === 'Upvote'
                  ? b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
                  : ''
              )
              .map((post) => <Post key={post.postId} postData={post}></Post>)
          ) : (
            <p>Data Not Loaded </p>
          )}
        </div>
        <div className='col-4 py-3'>
          <h5>Sort By</h5>
          <select
            class='form-select'
            onChange={(event) => setsortSelection(event.target.value)}
            value={sortSelection}
          >
            <option value='Latest'>Latest Post</option>
            <option value='Upvote'>Most Upvoted Post</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default ListPosts;
