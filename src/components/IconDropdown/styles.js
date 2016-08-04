const styles = {
  icon: {
    marginRight: 30,
    fontSize: 20,
  },
  iconToggle: {
    marginRight: 10,
    fontSize: 20
  },
  menuItem: {
    textAlign: 'right',
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#ddd'
    }
  },
  menu: {
    boxShadow: 'none',
    border: '2px solid black',
    width: '100%',
    borderRadius: 0,
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'left'
  },
}

export default styles;
