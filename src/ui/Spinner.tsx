function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4 pt-[200px]">
      <div className="flex items-center justify-center text-4xl text-blue-400 border-8 border-gray-300 rounded-full w-28 h-28 animate-spin border-t-blue-400"></div>
    </div>
  );
}

export default Spinner;
