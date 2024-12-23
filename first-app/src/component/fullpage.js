import React,{component}from 'react';

class fullpage extends component{
    render(){
        const {children}=this.props
        return (
            <div className={'fullpage_first'}>
                {children}
            </div>
        )
    }
}
export default fullpage