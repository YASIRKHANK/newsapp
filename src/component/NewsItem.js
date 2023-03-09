import React, { Component } from 'react'


export class NewsItem extends Component {

  render() {
    let {Title,description,imgurl,newsurl}=this.props
    return (
      <div> 
        <div className="card" style={{width: "18rem" }}>
  <img src={!imgurl?"https://a.fsdn.com/sd/topics/topicgoogle_fb.gif": imgurl}/>
  <div className="card-body">
    <h5 className="card-title">{Title}</h5>
    <p className="card-text">{description}</p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
