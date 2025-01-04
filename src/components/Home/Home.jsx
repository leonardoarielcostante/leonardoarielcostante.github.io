const Home = () => {
  return (
    <section className="flex h-screen items-center p-10">
      <div className="flex flex-col">
        <img
          src="/images/foto.webp"
          alt="Leonardo Costante"
          className="h-20 w-20 rounded-full object-fill"
        />
        <p className="text-6xl font-bold">
          ¡Hola! soy <span className="text-blue-500">Leo</span>
          <br />
          desarrollador
          <span className="text-red-500"> Full stack</span>
          <br />
          <span className="text-green-600">+2 años</span> de experiencia.
        </p>
        <p className="text-end text-xl text-gray-500">
          Desarrollando soluciones completas, eficientes y escalables.
        </p>
      </div>
    </section>
  );
};

export default Home;
