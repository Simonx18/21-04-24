import React from 'react';

const SingleComment = ({
  author,
  comment,
  rate,
  onClickDelete,
  reviewId
}) => {
  return (
      <li className='list-group-item'>
          <h6 className='m-0 font-size'>{author}</h6>
          <p className='m-0 font-size'>{comment}</p>
          <div className='d-flex justify-content-between'>
              <div className='d-flex align-items-center'>
                  <p className='font-size m-0'>{rate}</p>
              </div>
              <div className='d-flex align-items-center'>
                  <button className='d-flex align-items-center justify-content-center icon-btn-style'
                      onClick={() => onClickDelete(reviewId)}>
                  </button>
              </div>
          </div>
      </li>
  )
}

export default SingleComment;