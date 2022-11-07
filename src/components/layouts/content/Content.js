import React from 'react';
import './Content.less';

export default class Content extends React.Component{
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
            <div className='content'>
                {this.props.children}
            </div>
        )
    }
}