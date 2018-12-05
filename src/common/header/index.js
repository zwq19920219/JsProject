import React from 'react'
import { HeaderWrapper, Logo, NavBar, NavItem,NavSearch,NavRight,Button } from './style'

class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo></Logo>
                <NavBar>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavSearch></NavSearch>
                </NavBar>
                <NavRight>
                    <Button>注册</Button>
                    <Button>写文章</Button>
                </NavRight>
            </HeaderWrapper>
        )
    }
}

export default Header;