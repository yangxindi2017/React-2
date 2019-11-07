import React, { Component } from 'react'

export default class ALL extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        console.log('helloContent');
        let id = this.props.match.params.id;
        let url = 'https://cnodejs.org/api/v1/topics';
        fetch(url)
        .then((res=>res.json()))
        .then((res)=>{
            for(var i=0;i<res.data.length;i++){
                if(this.props.match.params.id === res.data[i].id){
                    this.setState({data:res.data[i].content})
                }
            }

        })
    }

    componentDidUpdate(prevPros){
        let id = this.props.match.params.id;
        if(id != prevPros.match.params.id){
            fetch('https://cnodejs.org/api/v1/topics?')
            .then((res=>res.json()))
            .then((res)=>{
                for(var i=0;i<res.data.length;i++){
                    if(this.props.match.params.id === res.data[i].id){
                        this.setState({data:res.data[i].content})
                    }
                }

            })
        }
    }


    render() {
            
        return (
            <div>
                {
                    <div  dangerouslySetInnerHTML={{__html:this.state.data}}></div>
                }
                
            </div>
        )
    }
}
