import React from 'react';
import './App.css';
import './materialize.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      options :[1,2,3,5],
      num1:3,
      num2:8,
      answer : 11,
      score:0

    }
  }
  componentWillMount() {
    this.createData();
  }
  onTileClick =(e)=>{
    // e.preventDefault();
    console.log(e);
    if(e == this.state.answer){
      this.setState({score:this.state.score +10})
      console.log('yiee')
      this.createData();
    }
    else{
      alert('wrong');
      window.location.reload();
    }

  }
  createData = ()=>{
    var num1 = Math.floor(Math.random()*100);
    var num2 = Math.floor(Math.random()*100)
    console.log(num1,num2);
    var options = [];
    for( var i=0;i<4;i++){
      options.push(Math.floor(Math.random()*100))
    }
    console.log('options',options);
    var answer = num1 + num2;
    var index = Math.floor(Math.random()*10) % 4 ;
    console.log(index);
    options[index] = answer;
    this.setState({options,num1,num2,answer});
  }

  render(){

    var optionsData = this.state.options;
    var tiles = optionsData.map((x)=>{
          return(
            <div className="col s3 red lighten-3 cell valign-wrapper" onClick={()=>this.onTileClick(x)} key={x}>
              <p className="text center-align" >{x}</p>
            </div>
          )
    });


    console.log('yuuuu');

    return (
      <div className="App">
        <div className="row red accent-4">
          <div className="col center s12">
            <h1 className="white-text" style={{textAlign: 'center'}}>
              <span className="">Number Game</span>
            </h1>
          </div>
        </div>

        <div className="container  red darken-1" style={{paddingBottom: '5px'}}>
          <div className="row">
            <div className="col s12">
              <h3 className="white-text" style={{textAlign: 'center'}}>What is sum of {this.state.num1} and {this.state.num2}?</h3>
              <h3 className="white-text" style={{textAlign: 'center'}}>Score :{this.state.score}</h3>
            </div>
          </div>
          <div className="row">

            {tiles}

          </div>

          <div className='row' style={{marginBottom:'5px'}}>
            <div className='col s12' style={ { alignItems:'center' }}>
              <a className="waves-effect waves-light btn pink accent-3" style={{float:'center',margin:'auto',display:'block'}} onClick={()=>{window.location.reload()}}> Restart</a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default App;


