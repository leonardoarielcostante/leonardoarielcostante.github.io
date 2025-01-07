const Home = () => {
  return (
    <section
      id="home"
      className="flex h-screen w-full items-center justify-center p-4 md:p-10"
    >
      <div className="flex flex-col">
        <img
          src="/images/foto.webp"
          alt="Leonardo Costante"
          className="h-16 w-16 rounded-full object-fill md:h-24 md:w-24"
        />
        <p className="whitespace-normal text-2xl font-bold md:text-5xl 2xl:text-7xl">
          ¡Hola! soy <span className="text-blue-500">Leo</span>
          <br />
          desarrollador
          <span className="text-red-500"> Full&nbsp;stack</span>
          <br />
          <span className="text-green-600">+2 años</span> de experiencia.
        </p>
        <p className="text-end text-sm text-gray-500 md:text-base 2xl:text-2xl">
          Desarrollando soluciones completas, eficientes y escalables.
        </p>
      </div>
    </section>
  );
};

export default Home;
