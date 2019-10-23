import React from 'react'
import './index.less'
import { Input } from 'antd'
const { Search } = Input;

export default class Head extends React.Component {


    render() {

        let tag1 = ["首页", "沸点", "个人简介"]

        return (
            <div className="headContainer">
                <a>
                    <img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="黄炯鹏的博客"/>
                </a>
                
                <nav>
                    <ul>
                        {tag1.map(item=>{
                            return (
                                <li>
                                    <a>
                                        {item}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <Search 
                    className="search"
                    placeholder="input search text" 
                    onSearch={value => console.log(value)} 
                    enterButton 
                />
                <a>登录</a>
            </div>
        )
    }
}