import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components'

const Main = styled.div`
  margin: 50px;
  z-index: -4;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  jusify-content: flex-end;
  align-items: center;
  width: 600px;
  height: 60px;
`;

const UserImage = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 10px;
`;

const UserName = styled.p`
  width: 102px;
  height: 18px;
`;

const PostImage = styled.img`
  display: flex;
  max-width: 600px;
  width: 100%;
  height: 600px;
`;

const Caption = styled.p`
  display: flex;
  max-width: 600px;
  width: 100%;
`;


class Post extends Component{

  render(){
    const { post } = this.props;
    return(
      <Main>
        <Header>  
          <UserImage src={post.user.profile_pic} alt={post.user.username} />        
          <UserName>{post.user.username}</UserName>         
        </Header>
        <div>
          <PostImage src={post.image.url} />
          <Caption>{post.caption}</Caption>
        </div>
        <div>
          <FaHeartO />
          <FaCommentO />
        </div>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
      </Main>
    )
  }
}

export default Post;