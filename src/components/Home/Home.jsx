const Home = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center p-10">
      <div className="flex flex-col">
        <img
          src="/images/foto.webp"
          alt="Leonardo Costante"
          className="h-20 w-20 rounded-full object-fill xl:h-24 xl:w-24"
        />
        <p className="text-5xl font-bold 2xl:text-7xl">
          ¡Hola! soy <span className="text-blue-500">Leo</span>
          <br />
          desarrollador
          <span className="text-red-500"> Full stack</span>
          <br />
          <span className="text-green-600">+2 años</span> de experiencia.
        </p>
        <p className="text-end text-xl text-gray-500 2xl:text-2xl">
          Desarrollando soluciones completas, eficientes y escalables.
        </p>
      </div>
    </section>
  );
};

export default Home;
