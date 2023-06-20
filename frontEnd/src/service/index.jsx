export const getAllNewsService = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${import.meta.env.VITE_BACKEND}/listFilterNews`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return {};
};
