import React from 'react';
import './Sider.less';

export default class Sider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
       
    // componentDidMount() {
    //     this.clockStart = setInterval(() => this.tick(),1000)
    // }
  
    // componentWillUnmount() {
    //     clearInterval(this.clockStart)
    // }

    // window.onresize = () => {

    // }
    clickBtn() {
        let type = document.getElementsByClassName('sideBtn')[0].getAttribute('type');
        let w = document.getElementsByClassName('sider')[0].offsetWidth;
        if(type == '1') {
            document.getElementsByClassName('sider')[0].style.left = '0';
            document.getElementsByClassName('sider')[0].style.height = '100%';
            document.getElementsByClassName('sideBtn')[0].style.left = w+10 + 'px';
            document.getElementsByClassName('sideBtn')[0].setAttribute('type','0');
        }else{
            document.getElementsByClassName('sider')[0].style.left = '-260px';
            document.getElementsByClassName('sider')[0].style.height = '100%';
            document.getElementsByClassName('sideBtn')[0].style.left ='10px';
            document.getElementsByClassName('sideBtn')[0].setAttribute('type','1');
        }
        
    }
    render() {
        return (
            <div>
                <div className='sider' style={this.props.style}>
                    {this.props.children}
                </div>
                <div className='sideBtn' type='1' onClick={() => this.clickBtn()}>扭</div>
            </div>
            
        )
    }
}