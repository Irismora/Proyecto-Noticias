export const getAllNewsService = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}/listFilterNews`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
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

export const deleteNoticiaService = async ({ id, token }) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/News/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
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

export const getAllNewsTokenService = async (token) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/listNews`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getSingleNewService = async (id) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/news/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const addPhotoService = async (id, data, token) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}/News/${id}/photo`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getProfileService = async (token) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/profile`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.user;
};

export const likeService = async ({ id, token }) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}/News/${id}/like`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const disLikeService = async ({ id, token }) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}/News/${id}/unlike`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const editNewService = async ({ id, token, title, summery, newsText, topic }) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/News/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, summery, newsText, topic }),
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
