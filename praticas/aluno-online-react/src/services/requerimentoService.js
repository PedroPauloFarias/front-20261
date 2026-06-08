const BASE_URL = "http://localhost:3000";

export async function listarRequerimentos() {
  const response = await fetch(`${BASE_URL}/requerimentos`);
  return response.json();
}

export async function cadastrarRequerimento(requerimento) {
  const response = await fetch(`${BASE_URL}/requerimentos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requerimento),
  });
  return response.json();
}