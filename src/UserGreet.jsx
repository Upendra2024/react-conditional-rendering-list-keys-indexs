import React from 'react';

export  class UserGreet extends React.Component{

constructor(){
  super()
  this.state ={
    isLoggedIn :true
  }
}

  render(){
//Conditional Rendering

//1. if else normal method

  //  if(this.state.isLoggedIn){
  //    return<div>Hello Upendra</div>
  //  }else{
  //    return <div>Hello User</div>
  //  }
  // }

//2.Element Variable method

// let message;

// if(this.state.isLoggedIn){
//   message = <div>Hi Pujitha</div>
// }else{
//   message = <div>Hi User</div>
// }
//   return message;
// }


//3.Using turnary operator

// {
//  return this.state.isLoggedIn ? <div>Hi Teja</div> :<div>Hi user</div>
// }
//   }

//4.shortcircuit method

{
  return this.state.isLoggedIn && <div>HI Kalyan</div>
}
  }

}