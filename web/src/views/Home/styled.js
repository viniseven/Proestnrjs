import styled from 'styled-components'
import {headerHeight} from '../../components/styles/menu-styled'

export const Container = styled.main`
  width: 100%;
  height:${(100 - headerHeight)}vh;
  background-color: #e1e1e1;
  display:flex;
  align-items: center;

  .form-control{
    width: 40%;
    min-height: 20vh;
    margin: 0 auto 0vh;
    display:flex;
    flex-wrap:wrap;
  }

  .form-control .form-group{
    flex:1 100%;
    margin: 1vh;
  }

  .form-control .form-group-half{
    flex: 1 30%;
    margin: 1vh 2px;
  }

  .form-group .form-item{
    width:100%;
  }

  .form-item .form-title{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin: 1vh 0;
    font-size: 2em;
    font-weight: bold;
  }

  .form-item .form-label{
    flex:100%;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  .form-item .form-input{
    width:100%;
    height:30px;
    border: 1px solid #a3a3a3;
    padding: 3px;
  }

  .form-item .form-textarea{
    width:100%;
    min-height: 20vh;
    border: 1px solid #a3a3a3;
    padding: 3px;
  }

  .form-item .form-button{
    padding: 2vh 30px;
    border-radius: 3px;
    background-color: #09a030;
    color: white;
    box-shadow: 1px 1px 3px black;
    cursor: pointer;
    float:right;
  }

`;


