export const getAllNewsService = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/listNews`, {
    headers: { authorization: token },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return {};
};
