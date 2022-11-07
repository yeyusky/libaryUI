import React from 'react';
import './Footer.less';

export default class Footer extends React.Component{
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
            <div className='footer'>
                {this.props.children}
            </div>
        )
    }
}