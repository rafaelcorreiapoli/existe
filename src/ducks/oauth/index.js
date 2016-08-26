const VALIDATE_CODE = 'oauth/VALIDATE_CODE'

export const validateCode = (provider, code) => (dispatch, getState, asteroid) => {
  asteroid.call('exchangeOAuth', { provider, code } )
  .then(res => {
    window.opener.oAuthCB(res)
    window.close()
  })
  .catch(err => {
    console.log('err', err)
  })
}
