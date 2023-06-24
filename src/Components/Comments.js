const Comments = ({ commentsData, username }) => {
  return (
    <>
      <div className='d-flex'>
        <div className='m-2'>
          <img
            src={commentsData.picUrl}
            className='rounded-circle'
            style={{ width: '30px', height: 'auto' }}
            alt='Profile Img'
          />
        </div>
        <div className='m-2'>
          <p>
            <span className='fw-semibold'>{commentsData.username}</span>{' '}
            <i class='bi bi-dot'></i> 1min
          </p>
          <p>
            Replying to{' '}
            <span className='fw-semibold text-info'>@{username}</span>
          </p>
          <p>{commentsData.comment}</p>
        </div>
      </div>
      <div className='d-flex justify-content-around'>
        <i class='bi bi-heart-fill'></i>
        <i class='bi bi-share-fill'></i>
        <i class='bi bi-chat-left-fill '></i>
      </div>
    </>
  );
};
export default Comments;
