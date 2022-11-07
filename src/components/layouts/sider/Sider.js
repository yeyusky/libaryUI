import React from 'react';
import './Sider.less';

export default class Sider extends React.Component{
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

    
    render() {
        return ( 
            <div className='sider' style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}