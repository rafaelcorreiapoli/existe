import React, { PropTypes } from 'react'
import styles from './styles';

export const TabItem = ({
  children,
  active,
  activeColor
}) => {
  return (
    <div style={styles.tabItem}>
      {children}
      {active && <div style={{backgroundColor: activeColor, height: 4, width: '75%', margin: 'auto'}} />}
    </div>
  )
}
export const Tabs = ({
  children,
  value,
  onClick,
  activeColor = '#e36a55'
}) => {
  console.log(children)

  const handleClick = () => {

  }

  return (
    <div style={styles.tabContainer}>
      {
      children.map((child, i) => {
        return (
          <div key={i} onClick={() => onClick(child.props.value)}>
            {React.cloneElement(child ,{
              active:value === child.props.value,
              activeColor
            })}
          </div>
        )
      })
      }
    </div>

  )
}
