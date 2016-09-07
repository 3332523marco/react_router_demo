import React from 'react';
import ReactDOM from 'react-dom';
import {Link,RouteHandler} from 'react-router';
require("../../css/style.css");

class TabsControl extends React.Component{

    constructor(){
        super();
        this.state={
            currentIndex : 0
        };
    }

    check_tittle_index(index){
        return index===this.state.currentIndex ? "Tab_tittle on_active" : "Tab_tittle";
    }

    check_item_index(index){
        return index===this.state.currentIndex ? "Tab_item show" : "Tab_item";
    }

    check_title_link(index){
        var toLink = "/page1";
        switch(index){
            case 0:
                toLink = "/page1";
                break;
            case 1:
            case 2:
                toLink = "/page2/"+index;
                break;
        }
        return toLink;
    }

    handleClick(data) {
        this.setState(data);//假如有三个组件 ABC，B 是 A 的子组件，C 是 B 的子组件，那么 B 中 setState 之后，B 和 C 会 rerender，而 A 不会。
    }

    render(){
        let _this=this;
        return(
            <div>
                {/*动态生成Tab导航*/}
                <div className="Tab_tittle_wrap">
                    { React.Children.map( this.props.children , (element,index) => {
                        return(
                            /*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                            <div className={ this.check_tittle_index(index) }><Link className="Tab_title_link" onClick={ () => { this.handleClick({currentIndex : index}) } }  to={this.check_title_link(index)}>{ element.props.name }</Link></div>
                        );
                    }) }
                </div>

                <div className="Tab_item_wrap">
                    {React.Children.map(this.props.children,(element,index)=>{
                        return(
                            <div className={ this.check_item_index(index) }>{ element }</div>
                        );
                    })}
                </div>

            </div>
        );
    }
}

class TabComponent extends React.Component{

    render(){
        return(
            <div className="container">
                <TabsControl>
                    <div name="first">
                        <RouteHandler />
                    </div>
                    <div name="second">
                        <RouteHandler />
                    </div>
                    <div name="third">
                        <RouteHandler />
                    </div>
                </TabsControl>
            </div>
        );
    }
}

{/*
 ReactDOM.render(<TabComponent/>,document.getElementById("app"));*/}

export default TabComponent;

