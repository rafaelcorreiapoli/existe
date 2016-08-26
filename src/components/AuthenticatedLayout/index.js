import React, { PropTypes } from 'react'
import DrawerContainer from '../../containers/DrawerContainer'
import AppBarContainer from '../../containers/AppBarContainer';

const AuthenticatedLayout = ({
  children
}) => {
  return (
    <div>
      <DrawerContainer />
      <AppBarContainer />
      <div>
        {children}
      </div>
    </div>
  )
}

export default AuthenticatedLayout
