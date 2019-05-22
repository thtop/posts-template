import React from 'react'

class PostList extends React.Component {

    renderList() {
        return (
            <div className="item">
                <i className="huge middle aligned icon node green"/>
                <div className="content">
                    <div className="description">
                        <h2>Post title</h2>
                        <p>Post body</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>
    }
}

export default PostList