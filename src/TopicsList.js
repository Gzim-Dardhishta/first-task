import React from 'react'

function TopicsList( {topics, titleOfTopics}) {
  return (
    <div>
        <h2 className='title'>{ titleOfTopics }</h2>
        <div className="wrapper">
          {topics.map((topic) => (
            <div className='topics' key={topic.id}>
              <div className='icon'>{ topic.icon }</div>
              <div className="text">
                <h3>{ topic.title }</h3>
                <h4>{ topic.body }</h4>
              </div>
            </div>  
          ))}
          </div>
    </div>
  )
}

export default TopicsList;