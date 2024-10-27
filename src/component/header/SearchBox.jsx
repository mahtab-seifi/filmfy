function SearchBox() {
  return (
    <>
      <div className="mx-5 relative">
        <input
          className="bg-Bistre w-full px-4  md:px-6 py-3 rounded-3xl  text-silk outline-none text-lg  md:text-xl placeholder-squirred"
          type="text"
          placeholder="Search for movie , tvshow , person , ..."
        />
        <i class="bi bi-search text-silk text-xl md:text-2xl absolute md:top-2.5 md:right-6 top-3 right-4"></i>
      </div>
    </>
  );
}

export default SearchBox;
