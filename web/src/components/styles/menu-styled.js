import styled from 'styled-components'

export const headerHeight = 8

export const Header = styled.header`
  display:flex;
  width: 100%;
  height: ${headerHeight}vh;
  justify-content: space-between;
  padding: 0px 10px 10px 10px;
  vertical-align: middle;
  align-items:center;
  background-color: #026630;

  .logo-container{
    width: 10%;
  }

  .logo-container .logo{
    width: 100%;
    text-align: center;
    font-size: 2em;
    color:white;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  }

  .menu-main{
    width: 30%;
    display:none;
  }
  .menu-main .menu-list{
    display:flex;
    justify-content:flex-end;
    width:100%;
  }

  .menu-list .menu-item{
   padding: 0 10px
  }
`;
