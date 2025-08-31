const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";

function buildHeaders(token, isJson) {
  const headers = {};
  if (isJson) headers["Content-Type"] = "application/json";
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
}

async function handleResponse(response) {
  const contentType = response.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json().catch(() => ({})) : await response.text();
  if (!response.ok) {
    const message = (isJson && data && (data.message || data.error)) || response.statusText;
    const error = new Error(message || "Request failed");
    error.status = response.status;
    error.data = data;
    throw error;
  }
  return data;
}

export const apiClient = {
  async get(path, { token, query } = {}) {
    const url = new URL(`${API_BASE_URL}${path}`);
    if (query) Object.entries(query).forEach(([k, v]) => v !== undefined && v !== null && url.searchParams.append(k, v));
    const res = await fetch(url.toString(), {
      method: "GET",
      headers: buildHeaders(token, false),
      credentials: "include",
    });
    return handleResponse(res);
  },

  async post(path, body, { token, isFormData } = {}) {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method: "POST",
      headers: buildHeaders(token, !isFormData),
      body: isFormData ? body : JSON.stringify(body ?? {}),
      credentials: "include",
    });
    return handleResponse(res);
  },

  async put(path, body, { token, isFormData } = {}) {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method: "PUT",
      headers: buildHeaders(token, !isFormData),
      body: isFormData ? body : JSON.stringify(body ?? {}),
      credentials: "include",
    });
    return handleResponse(res);
  },

  async del(path, { token } = {}) {
    const res = await fetch(`${API_BASE_URL}${path}`, {
      method: "DELETE",
      headers: buildHeaders(token, false),
      credentials: "include",
    });
    return handleResponse(res);
  },
};

export default apiClient;

