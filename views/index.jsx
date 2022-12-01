const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  }

  class Index extends React.Component {
    render(){
    return (
      <div style={myStyle}>My First React Component!</div>
    )}
    
  }

  module.exports = Index