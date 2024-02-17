export default function Form() {
  return (
    <div className="bg-white rounded-lg shadow-2xl text-black mx-4 md:mx-0">
      <form className="flex flex-col gap-4 px-4 py-6 md:py-10">
        <h4 className="capitalize font-semibold hidden md:block text-xl">
          Get In Touch
        </h4>
        <h4 className="md:hidden text-[#1B3358] capitalize text-4xl font-medium align-middle">
          <strong className="text-[#F1916D]">Come Get&nbsp;</strong>
          <br />
          The Perfect Skin.
        </h4>
        <div className="flex flex-col justify-start items-start gap-1">
          <label className="cursor-pointer" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full h-10 transition-all border-gray-300 outline-none border-2 rounded-lg focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-1">
          <label className="cursor-pointer" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="text"
            className="w-full h-10 transition-all focus:border-blue-500 outline-none border-gray-300 border-2 rounded-lg"
          />
        </div>
        <button className="rounded-full bg-[#615392] text-white capitalize hover:text-[#615392] hover:bg-white border-[#615392] border-2 w-full px-16 max-w-2xl py-2 transition-all">
          Submit
        </button>
      </form>
    </div>
  );
}
