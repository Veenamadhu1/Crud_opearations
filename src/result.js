import React from "react";

class Result extends React.Component{
  render(){
    const {result}=this.props;
    return(
      <div className="result">
        <p>{result}</p>

      </div>
    )
  }
}

export default Result;