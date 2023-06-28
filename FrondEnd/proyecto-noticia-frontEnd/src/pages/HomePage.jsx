import useNews from "../hooks/useNews";

const HomePage = () => {
  const { news, loading, error } = useNews();

  if (loading) return <p>cargando noticias....</p>;
  if (error) return <p>{error}</p>;

  console.log(news);
  return (
    <section>
      <h1>Ultimas Noticias</h1>

      <p> Aqui se visualizara la lista de noticias</p>
    </section>
  );
};

export default HomePage;
