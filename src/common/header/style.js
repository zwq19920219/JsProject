import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0
`;

export const Logo = styled.a.attrs({href:'/'})` 
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;

export const NavBar = styled.div`
    width:900px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
`;

export const NavItem =styled.a`
    color:#333;
    font-size: 15px;
    margin: 17px 6px;
    padding-top: 2px;
    padding-bottom: 15px;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;
export const NavSearch=styled.input.attrs({
    placeholder:'检索'
})`
    width:160px;
    height:38px;
    border:none;
    margin:8px 50px;
    padding: 0 20px;
    font-size: 14px;
    border-size:boder-box;
    outline:none;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
`;

export const NavRight=styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`

export const Button=styled.div`
    float:right;
    margin-top:9px;
    padding:0 20px;
    line-height=38px;
    border-radius:19px;
    border:1px solid #ec6149
`





