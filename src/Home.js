
import React from 'react';

export default class Home extends React.Component{
    
    // constructor(){
    //     super();
    //     this.state={
    //         name:'sunil21',
    //         age:'32',
    //         email:'sunil@gmail.com'
    //     }
    //     alert(this.state.email)
    // }

    // componentDidMount(){
    //     alert('did mount');
    // }

    // componentDidUpdate(){
    //     alert('update');
    // }

    

    render(){
        const fname ="Sunil malviya";
        return(
            <>
            <h1>Home Component</h1>
            <p>
                {fname}
            </p>
            </>
        )
    }
}
