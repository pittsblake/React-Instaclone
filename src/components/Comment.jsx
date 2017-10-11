import React, {Component} from 'react';
import styled from 'styled-components'


const CommentSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const UserImage = styled.img`
border-radius: 50%;
width: 30px;
height: 30px;
padding: 10px;
`;



class Comment extends Component {
  render() {
    const {comment} = this.props;
    console.log(comment);
    return (
      <CommentSection>
        <UserImage src={comment.profile_pic}/>
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
      </CommentSection>
    );
  }
}

export default Comment;