export const SET_FILTRO_CATEGORIA = 'SET_FILTRO_CATEGORIA';
export const SET_FILTRO_ORDEM = 'SET_FILTRO_ORDEM';
export const SET_FILTRO_STATUS = 'SET_FILTRO_STATUS';
export const SET_FILTRO_AREA = 'SET_FILTRO_AREA';
export const ADD_PROJETO = 'ADD_PROJETO';
export const REMOVE_PROJETO = 'REMOVE_PROJETO';
export const UPDATE_PROJETO = 'UPDATE_PROJETO';
export const SET_LOGIN_EMAIL = 'SET_LOGIN_EMAIL';
export const SET_LOGIN_PASSWORD = 'SET_LOGIN_PASSWORD';
export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CRIAR_PROJETO_SUCCESS = 'CRIAR_PROJETO_SUCCESS';
export const CRIAR_PROJETO_ERRO = 'CRIAR_PROJETO_ERRO';
export const START_CRIAR_PROJETO = 'START_CRIAR_PROJETO';

export function setFiltroCategoria(categoria) {
  return {
    type: SET_FILTRO_CATEGORIA,
    payload: {
      categoria
    }
  }
}

export function setFiltroOrdem(ordem) {
  return {
    type: SET_FILTRO_ORDEM,
    payload: {
      ordem
    }
  }
}

export function setFiltroStatus(status) {
  return {
    type: SET_FILTRO_STATUS,
    payload: {
      status
    }
  }
}

export function setFiltroArea(area) {
  return {
    type: SET_FILTRO_AREA,
    payload: {
      area
    }
  }
}
export function addProjeto(projeto) {
  return {
    type: ADD_PROJETO,
    payload: {
      projeto
    }
  }
}


export function removeProjeto(id) {
  return {
    type: REMOVE_PROJETO,
    payload: {
      id
    }
  }
}

export function updateProjeto(id, fields) {
  return {
    type: UPDATE_PROJETO,
    payload: {
      id,
      fields
    }
  }
}


export function setLoginEmail(email) {
  return {
    type: SET_LOGIN_EMAIL,
    payload: {
      email
    }
  }
}


export function setLoginPassword(password) {
  return {
    type: SET_LOGIN_PASSWORD,
    payload: {
      password
    }
  }
}


export function startLogin(email, password) {
  return {
    type: START_LOGIN,
    payload: {
      email,
      password
    }
  }
}

export function loginSuccess(userId) {
    return {
      type: LOGIN_SUCCESS,
      payload: {
        userId
      }
    }
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    payload: {
      error
    }
  }
}

export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(startLogin(email, password));

    return asteroid.loginWithPassword({ email, password})
    .then(result => {
        console.log('Success');
        console.log(result);
        dispatch(loginSuccess(result));
    })
    .catch(error => {
        console.log('Error');
        console.error(error);
        dispatch(loginError(error));
    });
  }
}

export function createProjetoSuccess(projetoId) {
  return {
    type: CRIAR_PROJETO_SUCCESS,
    payload: {
      projetoId
    }
  }
}

export function createProjetoError(error) {
  return {
    type: CRIAR_PROJETO_ERRO,
    payload: {
      error
    }
  }
}

export function startCreateProjeto() {
  return {
    type: START_CRIAR_PROJETO,
  }
}

export function createProjeto(projeto) {
  return (dispatch) => {
    dispatch(startCreateProjeto())
    return asteroid.call('projetos.add', projeto)
    .then(result => {
      dispatch(createProjetoSuccess(result));
    })
    .catch(error => {
      dispatch(createProjetoError(error));
    })
  }
}
