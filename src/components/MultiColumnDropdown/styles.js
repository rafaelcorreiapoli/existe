const styles = {
  icon: {
    marginRight: 30,
    fontSize: 20,
  },
  leftText: {
    fontSize: 10,
    width: 100,
    minWidth: 100,
    whiteSpace: 'normal'
  },
  mainText: {
    fontWeight: 'bold',
    minWidth: 0,
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  iconToggle: {
    marginRight: 10,
    fontSize: 20
  },
  columnContainer: {
    display: 'flex', flexDirection: 'row'
  },
  column: {
    width: 250
  },
  menuItem: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#ddd'
    }
  },
  menuItemText: {
    textDecoration: 'underline'
  },
  middleColumn: {
    borderWidth: 0,
    borderRightWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid'
  },
  menuDivisor: {
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    height: 40,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  menu: {
    paddingTop: 0,
    paddingBottom: 0,
    boxShadow: 'none',
    border: '2px solid black',
    //width: '100%',
    borderRadius: 0,
  },
  button: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    width: 350,
    height: 60,
    borderWidth: 0,
    ':active': {
      outline: 0
    },
    ':focus': {
      outline: 0
    }
  },
}

export default styles;
