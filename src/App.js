import React from 'react';
import boxes from './data/boxes';
import Box from './components/Box';

class App extends React.Component {
  
  state = {
    data: [...boxes]
  }

  handleSelect = (e) =>{
    this.setState((s)=>{
      return s.data.map((v)=>{
        if(v.id === Number(e.target.id)) v.on = !v.on
        return v
      })
    })
  }



  render() {

    //console.log(this.state.data)

    const boxElements = this.state.data.map((v)=>{
      return <Box key={v.id} id={v.id} on={v.on} boxSelect={this.handleSelect} {...v}/>
    })

    return(
      <div className="box-container">
        {boxElements}
      </div>
    )  
  }
    
  
}

export default App;
