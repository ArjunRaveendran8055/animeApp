import React from 'react';
import "./App.css"

class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    data:
    [
      {id:"1",name:'<ashan>',email_address : '<ashan@gmail.com>'},
      { id :"2", name :'<arjun> ', email_address  : "<arjun@gmail.com>" },
  ]
  };
  
}

  render() {
    return (
      <div className="main-container">
        <div className="grid-container">
        {this.state.data.map((item,id)=>{
          return(<li key={id}>{item.name}</li>)
        })
        }
        <button onClick={(e)=>{
          this.setState((prev)=>({data:[...prev,{name:"arunan"}]}))
        }}>Submit</button>
        </div>
      </div>
    );
  }
}


export default App;




import React from 'react';
import "./App.css"

class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    count:0

  };
  
}

  render() {
    return (
      <div className="main-container">
        <div className="grid-container">
        count is {this.state.count}
        <br />
        <button onClick={(e)=>{
          this.setState((prev)=>({count:prev.count+1}))
        }}>Submit</button>
        </div>
      </div>
    );
  }
}


export default App;






<div className="grid-container">
<div className="card item1">sdfjad</div>
<div className="card item2">3213123153</div>
<div className="card item3">mallu</div>
<div className="card item4">hindu</div>

<div className="card item1">sdfjad</div>
<div className="card item2">3213123153</div>
<div className="card item3">mallu</div>
<div className="card item4">hindu</div>
</div>




<div className="card" key={index}></div>
