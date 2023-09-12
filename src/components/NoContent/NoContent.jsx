const NoContent = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full p-16 m-auto gap-5">
      <img
        src="./Icon.png"
        alt=""
      />
      <h1 className="text-black text-4xl font-bold text-center">
        Oops!! Sorry,
        <br />
        There is no content here
      </h1>
    </div>
  );
};

export default NoContent;
