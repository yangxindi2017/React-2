import React, { Component } from 'react'

export default class ALL extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

//这个只会执行一次！！改变状态靠下面的DidUpdate
    componentDidMount(){
        let kind = this.props.match.params.kind;
        let url = 'https://cnodejs.org/api/v1/topics?tab='+kind;

        fetch(url)
        .then((res=>res.json()))
        .then((res)=>{
            this.setState({data:res.data})
        })
    }

    //状态一改变他就会执行，setState
    componentDidUpdate(prevPros){
        // console.log(this.props,prevPros)
        let kind = this.props.match.params.kind;
        if(kind != prevPros.match.params.kind){
            fetch('https://cnodejs.org/api/v1/topics?tab='+kind)
            .then((res=>res.json()))
            .then((res)=>{
                this.setState({data:res.data})
            })
        }
        
    }


    ShowContent=(item)=>{
        this.props.history.push({

            pathname:`/home/show/${item.id}`
        });
        
        return;
    }

    transfer=(item)=>{
        console.log('hello');
        let kind = this.props.match.params.kind;
        console.log(kind);
        this.props.history.push({
            "pathname":'/home/'+kind+'&page='+item
        });
    }
    render() {
        return (
            <div style={{width:"900px"}} >
                     {
                        this.state.data.map((item)=>(
                            <div key={item.id} className="all">
                                
                                <div style={{float:"left"}} dangerouslySetInnerHTML={{__html:'<img src='+item.author.avatar_url+' alt=""/>'}}></div>
                                <span style={{width:"70px",textAlign:"center",float:"left",paddingLeft:"5px"}}>
                                    <span style={{color:"#9e78c0"}} dangerouslySetInnerHTML={{__html:item.reply_count+'/'}}></span>
                                    <span style={{color:"#b4b4b4"}} dangerouslySetInnerHTML={{__html:item.visit_count}}></span>
                                </span>
                                <span className="top">置顶</span>
                                <div className="all_content" onClick={this.ShowContent.bind(this,item)}>
                                    <a className="all1" dangerouslySetInnerHTML={{__html:item.title}}></a>
                                </div>                                
                                <span  className="time">3个小时前</span>
                                <img style={{float:"right",width:"18px",height:"18px",margin:"5px 10px"}}src="https://avatars3.githubusercontent.com/u/56661717?v=4&s=120"/>
                            </div>
                            
                        ))
                    } 
                    <div className="bottomWrap">
                        <ul >
                            {
                                [1,2,3,4,5,6,7,8,9,10].map((item)=>{
                                    return <li  key={item}><a onClick={this.transfer.bind(this,item)} className="bottomInner" >{item}</a></li>
                                })
                                
                            }
                        </ul>  
                    </div>
            </div>

        )
    }
}
