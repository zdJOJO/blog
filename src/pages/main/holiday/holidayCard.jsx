import React, {Component} from "react";
import { observer } from "mobx-react";
import { Button, Card, Classes } from "@blueprintjs/core";

@observer
class HolidayCard extends Component{

  state = {
    choose: false
  }

  componentWillMount(){
    const { card } = this.props;
    let choose = card.name===window.localStorage.getItem("cardName");
    this.setState({choose});
  }

  handleChoose=()=>{
    const { card, handleChoose } = this.props;
    handleChoose(card, ()=>{
      if(this.state.choose) return;
      let choose = !this.state.choose;
      this.setState({choose});
    });
  }

  render(){
    const { card } = this.props;
    return(
      <Card
        className="package"
        elevation={1}
        interactive
      >
        <h5><a href="javascript:void(0)">{card.name}</a></h5>
        <h3><a href="javascript:void(0)">{card.price}</a></h3>
        <p>{card.detail}</p>
        <Button 
          text={ this.state.choose ? "已选择" : "请选择" } 
          iconName={this.state.choose ? "thumbs-up" : ""}
          intent={ this.state.choose ? 1 : -1 } 
          onClick={this.handleChoose} 
        />
      </Card>
    );
  }
}

export default HolidayCard;