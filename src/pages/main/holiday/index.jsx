import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";
import { Button, Card, Classes, ProgressBar } from "@blueprintjs/core";
import store from './store';
import "./index.scss";
import HolidayCard from './holidayCard';

@observer
class Holiday extends Component{

  componentDidMount(){
    store.getTop(3);
  }

  render(){
    return(
      <div className="holiday">
        <div className="progress">
          <h3>当前排名前三</h3>
          {store.topCards.map( (card, index) => (
            <div key={index}>
              {card.name}
              <ProgressBar intent={index} value={card.count/store.totalCount} />
            </div>
          ))}
        </div>
        <h2>
          <a target="_blank" href="https://hotels.ctrip.com/hotel/1120236.html">
            富阳新沙岛茗悦农家乐一日游团购套餐(点击查看详情)
          </a>
        </h2>
        <p>
        免费项目：【注、自己组织、免费提供场地、道具】
        1：庭院茶座    2：沙滩排球     3：拔河     4:足桌球    5：抓螃蟹
        5：简易K歌    6：踩高跷       7：打篮球   9：扑克    10：挖野菜
        </p>
        <div className="packages">
          { 
            [0, 1, 2].map(i =>
              <div key={i} className="column ">
                {
                  store.packages.slice(i*3,i*3+3).map( (item, index) =>
                    <HolidayCard
                      key={index}
                      card={item}
                      handleChoose={store.handleChoose}
                    />
                  )}
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default withRouter(Holiday);