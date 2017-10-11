import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

const TopBar = styled.div `
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  border-bottom: thin solid black;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1010px;
  height: 77px;
  font-size: 25px;
  align-items: center;
  font-family: cursive;
`;

const Search = styled.div`
  
`;

const IconContainer = styled.div`
  width: 156px;
  height: 24px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  
`;



class Navbar extends Component{
  render(){
    return (
      
        <TopBar>
          <Header>
            <h3><FaInstagram /> | InstaClone</h3>
            <Search>
              <FaSearch/><input type="text"/>
            </Search>
             <IconContainer>
                <Icons>
                  <FaCompass />
                  <FaHeartO />
                  <FaUser />
                </Icons>
              </IconContainer>
          </Header>
        </TopBar>  
     
    );
  }
}

export default Navbar