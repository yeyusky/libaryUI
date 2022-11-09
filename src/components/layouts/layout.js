import React from 'react';
import './layout.less';

export default class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
       
    // componentDidMount() {
    //     this.clockStart = setInterval(() => this.tick(),1000)
    // }
  
    // componentWillUnmount() {
    //     clearInterval(this.clockStart)
    // }
    // 判断是否含有Sider子组件
    judeSider = () => {
        let hasSider = false
        React.Children.forEach(this.props.children, (child) => {
            if (child.type.name === 'Hearder' || child.type.name === 'Footer') { //这里使用child的type.name进行判断
                hasSider = true
            }
        })
        return hasSider
    }

    render() {
        const hasSider = this.judeSider()
        return ( 
            <div className={hasSider ? 'layout isHaschild' : 'layout'} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}