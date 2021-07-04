import React from 'react'

class Badge extends React.Component {
  render() {
    return (
      <span className="Badge">
        {this.props.badgeText}
      </span>
    )
  }
}

export default Badge;