const styles = {
  container: {
    minWidth: 0,
    display: 'inline-flex',
    flex: 'auto',
    flexDirection: 'row',
  },
  iconsContainer: {

  },
  mainContainer: {
    minWidth: 0,
    flexGrow: 1,
    borderWidth: 2,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: '#d3d3d3',
    flexDirection: 'column'
  },
  topAreaContainer: {
    display: 'flex',
    padding: '8px 10px 8px 10px',
    alignItems: 'center',
    flexDirection : 'row',
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: '#d3d3d3',
    borderStyle: 'solid'
  },
  bottomAreaContainer: {
    padding: '8px 10px 8px 10px',
    display: 'flex',
    flexDirection: 'column'
  },
  footerAreaContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  image: {
    width: '100%',
    height: 'auto'
  },
  colaboradores: {
    numero: {
      marginLeft: 10,
      marginRight: 10
    },
    texto: {
      //marginLeft: 10
      textTransform: 'uppercase'
    }
  },
  projeto: {
    nome: {
      fontWeight: 'bold',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      marginBottom: 5,
      whiteSpace: 'nowrap'
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    usuario: {
      color: '#d3d3d3'
    },
    data: {
      alignSelf: 'flex-end'
    }
  }
}

export default styles;
