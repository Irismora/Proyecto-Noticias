export const getAllNewsService = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
 /*  const token = localStorage.getItem("token"); */
>>>>>>> 0042847 (ListNewsSinToken)
=======
 /*  const token = localStorage.getItem("token"); */
>>>>>>> 0042847 (ListNewsSinToken)
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
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}/noticia/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }
  );

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

<<<<<<< HEAD
<<<<<<< HEAD
//en linea 95 no pone ruta, nosotros tenemos newnews, en authoritation el lo tiene sin bearer

export const getFilteredNewsService = async (token) => {
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
=======
export const getFilteredNewsService = async ( ) => {
>>>>>>> 0042847 (ListNewsSinToken)
=======
export const getFilteredNewsService = async ( ) => {
>>>>>>> 0042847 (ListNewsSinToken)
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}/News/${id}/photo`,
    {
<<<<<<< HEAD
<<<<<<< HEAD
      method: "POST",
      body: data,
      headers: {
        Authorization: "Bearer " + token,
      },
=======
     /*  headers: {
        Authorization: `Bearer ${token}`,
      }, */
>>>>>>> 0042847 (ListNewsSinToken)
=======
     /*  headers: {
        Authorization: `Bearer ${token}`,
      }, */
>>>>>>> 0042847 (ListNewsSinToken)
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
<<<<<<< HEAD
=======

/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
/* export const getAllEntriesWithVotesService = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}//listFilterNews`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
}; */
<<<<<<< HEAD
>>>>>>> 0042847 (ListNewsSinToken)
=======
>>>>>>> 0042847 (ListNewsSinToken)
