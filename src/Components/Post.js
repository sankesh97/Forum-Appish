import { useContext } from 'react';
import { ForumContext } from '../Context/forumContext';
import './Post.css';
import { Link } from 'react-router-dom';
import Comments from './Comments';

const Post = ({ postData, showComments }) => {
  const { votesHandler, bookmarkHandler } = useContext(ForumContext);

  return (
    <div className='row my-3 bg-body p-2'>
      <div className='col-2 d-flex flex-column justify-content-start'>
        <i
          onClick={() => {
            votesHandler(postData, 'inc');
          }}
          class='bi bi-caret-up-square-fill fs-1 text-info'
        ></i>
        <p className='m-1 fw-semibold'>
          {postData.upvotes - postData.downvotes}
        </p>
        <i
          onClick={() => {
            votesHandler(postData, 'decr');
          }}
          class='bi bi-caret-down-square-fill fs-1 text-info'
        ></i>
      </div>
      <div className='col-10'>
        <div>
          <img
            src={postData.picUrl}
            className='rounded-circle'
            style={{ width: '30px', height: 'auto' }}
            alt='Profile Img'
          />
          <p className='d-inline mx-2'>Posted by @{postData.username}</p>
        </div>
        <h4 className='my-2'>{postData.post}</h4>
        {postData.tags.map((tag) => (
          <span key={tag} class='text-capitalize badge bg-info mx-1'>
            {tag}
          </span>
        ))}
        <p className='my-2'>{postData.postDescription}</p>
      </div>
      <hr />
      <div className='d-flex justify-content-between m-2'>
        <Link className='text-info' to={`/${postData.postId}`}>
          <i class='bi bi-chat-left-fill'></i>
        </Link>
        <i class='bi bi-share-fill'></i>
        <i
          onClick={() => bookmarkHandler(postData)}
          class={`bi bi-bookmark-fill ${
            postData.isBookmarked ? 'text-info' : ''
          }`}
        ></i>
      </div>

      <div className='bg-light'>
        {showComments
          ? postData.comments.map((comment) => (
              <div className='my-2'>
                <Comments
                  key={comment.commentId}
                  commentsData={comment}
                  username={postData.username}
                ></Comments>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};
export default Post;
