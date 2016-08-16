import { ACCENT } from '../../resources/colors';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column'
  },
  valueRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textField: {
    alignSelf: 'stretch',
    width: '100%'
  },
  addButton: {
    alignSelf: 'flex-end',
    color: ACCENT
  },
  deleteButton: {
    marginLeft: 10
  },
  deleteIcon: {
    color: ACCENT
  }
}

export default styles;
