const API_BASE_URL = (process.env.REACT_APP_API_BASE_URL || '').replace(/\/$/, '');

async function parseJsonResponse(response) {
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return response.json();
  }
  const text = await response.text();
  return { message: text };
}

export async function apiFetch(path, options = {}) {
  const { method = 'GET', headers = {}, body, credentials = 'include' } = options;
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
    credentials
  });

  const data = await parseJsonResponse(response);
  if (!response.ok) {
    const errorMessage = data && data.message ? data.message : `Request failed with status ${response.status}`;
    const error = new Error(errorMessage);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

export async function apiFormData(path, formData, options = {}) {
  const { method = 'POST', headers = {}, credentials = 'include' } = options;
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    // Do not set Content-Type so the browser sets the multipart boundary
    headers: {
      ...headers
    },
    body: formData,
    credentials
  });

  const data = await parseJsonResponse(response);
  if (!response.ok) {
    const errorMessage = data && data.message ? data.message : `Request failed with status ${response.status}`;
    const error = new Error(errorMessage);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

export { API_BASE_URL };

