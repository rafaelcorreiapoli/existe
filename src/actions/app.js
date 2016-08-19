export const SET_DRAWER_OPEN = 'app/SET_DRAWER_OPEN';
export function setDrawerOpen(open) {
  return {
    type: SET_DRAWER_OPEN,
    payload: {
      open
    }
  }
}
