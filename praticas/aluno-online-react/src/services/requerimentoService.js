import authService from './authService'

const API_URL = 'http://localhost:3000'

function getHeaders() {
  const token = authService.getToken()
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
}

async function listar() {
  const token = authService.getToken()
  if (!token) throw { status: 401, message: 'Não autorizado' }

  const response = await fetch(`${API_URL}/requerimentos`, {
    headers: getHeaders(),
  })

  if (response.status === 401) throw { status: 401, message: 'Não autorizado' }

  return response.json()
}

async function cadastrar(requerimento) {
  const token = authService.getToken()
  if (!token) throw { status: 401, message: 'Não autorizado' }

  const response = await fetch(`${API_URL}/requerimentos`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(requerimento),
  })

  if (response.status === 401) throw { status: 401, message: 'Não autorizado' }

  return response.json()
}

async function remover(id) {
  await fetch(`${API_URL}/requerimentos/${id}`, {
    method: 'DELETE',
    headers: getHeaders(),
  })
}

async function atualizar(id, requerimento) {
  const response = await fetch(`${API_URL}/requerimentos/${id}`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(requerimento),
  })
  return response.json()
}

export default { listar, cadastrar, remover, atualizar }