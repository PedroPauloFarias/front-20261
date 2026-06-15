const API_URL = 'http://localhost:3000'

function gerarToken(usuario) {
  const header = btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }))
  const payload = btoa(JSON.stringify({ id: usuario.id, email: usuario.email }))
  const signature = btoa(Date.now().toString())
  return `${header}.${payload}.${signature}`
}

async function login(email, senha) {
  const response = await fetch(`${API_URL}/usuarios?email=${email}`)
  const usuarios = await response.json()

  if (!usuarios.length) {
    throw new Error('Usuário não encontrado')
  }

  const usuario = usuarios[0]

  if (usuario.senha !== senha) {
    throw new Error('Senha incorreta')
  }

  const token = gerarToken(usuario)
  const dadosUsuario = { id: usuario.id, email: usuario.email, nome: usuario.nome }

  localStorage.setItem('token', token)
  localStorage.setItem('usuario', JSON.stringify(dadosUsuario))

  return { token, usuario: dadosUsuario }
}

function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('usuario')
}

function getToken() {
  return localStorage.getItem('token')
}

function getUsuario() {
  const usuario = localStorage.getItem('usuario')
  return usuario ? JSON.parse(usuario) : null
}

function isAutenticado() {
  return !!getToken()
}

export default { login, logout, getToken, getUsuario, isAutenticado }