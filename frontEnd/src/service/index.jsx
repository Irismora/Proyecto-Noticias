export const getAllNewsService = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}/listFilterNews`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};

export const registerUserService = async ({ username, email, password }) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/register`, {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.authToken;
};

export const getMyDataService = async (token) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/user`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const sendNewService = async ({ data, token }) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/newNews`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getFilteredNewsService = async (token) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}/listFilterNews`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

