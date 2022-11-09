import React from 'react';
import '../hearder/Hearder.less';

export default class Hearder extends React.Component{
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
            <div className='hearder' style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}