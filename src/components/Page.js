import React, { Component } from 'react'

export default class ALL extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    componentDidMount(){

        // console.log(this.props);

        let id = this.props.match.params;
        console.log(params);
        let params = this.props.match.params;
        let url = 'https://cnodejs.org/api/v1/topics?tab=all&page='+id;
        fetch(url)
        .then((res=>res.json()))
        .then((res)=>{

            // for(var i=0;i<res.data.length;i++){
            //     if(params.id === res.data[i].id && params.kind === res.data[i]){
                    // this.setState({data:res.data[i].content})
                    this.setState({data:res.data})
                    
                    console.log(res.data);

                // }
            // }
            
            
        })
    }
    componentDidUpdate(prevPros){
        console.log(prevPros);
        let path = prevPros.match.path;
        if(path != this.props.match.path){
            fetch('https://cnodejs.org/api/v1/topics?tab=all')
            .then((res=>res.json()))
            .then((res)=>{
                this.setState({data:res.data})
            })
        }
    }

    ShowContent=(item)=>{
        this.props.history.push({
            "pathname":'/home/show/'+item.id
        });
        return;
    }

    transfer=(item)=>{
        this.props.history.push({
            "pathname":'&page='+item
        });
    }
    render() {
            

        return (
            <div>
                <div>hi</div>
                {/* /*{
                    this.state.data.map((item)=>(
                        <div key={item.id} className="all">
                            
                            <div style={{float:"left"}} dangerouslySetInnerHTML={{__html:'<img src='+item.author.avatar_url+' alt=""/>'}}></div>
                            <span style={{width:"70px",textAlign:"center",float:"left",paddingLeft:"5px"}}>
                                <span style={{color:"#9e78c0"}} dangerouslySetInnerHTML={{__html:item.reply_count+'/'}}></span>
                                <span style={{color:"#b4b4b4"}} dangerouslySetInnerHTML={{__html:item.visit_count}}></span>
                            </span>
                            <span className="top">置顶</span>
                            <div className="all_content" onClick={this.ShowContent.bind(this,item)}><a className="all1" dangerouslySetInnerHTML={{__html:item.title}}></a></div>                                
                            <span  className="time">3个小时前</span>
                            <img style={{float:"right",width:"18px",height:"18px",margin:"5px 10px"}}src="https://avatars3.githubusercontent.com/u/56661717?v=4&s=120"/>
                        </div>
                        
                    ))
                } */}
                <div className="bottomWrap">
                        <ul>
                            {
                                [1,2,3,4,5,6,7,8,9,10].map((item)=>{
                                    return <li key={item}><a onClick={this.transfer.bind(this,item)} className="bottomInner" >{item}</a></li>
                                })
                                
                            }
                        </ul>  
                    </div>
            </div>
        )
    }
}
