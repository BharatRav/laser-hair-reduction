export default function CostCalculator() {
  return (
    <div className=" text-black md:mx-0 py-8">
      <form className="flex flex-col gap-4 px-4 bg-white rounded-lg shadow-2xl py-6 md:py-10 max-w-md mx-auto">
        <h4 className="capitalize font-semibold text-xl">
          Cost Calculator
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
        <div className="flex flex-col justify-start items-start gap-1">
          <label className="cursor-pointer" htmlFor="phone">
            Select Body Part
          </label>
          <select
            id="body"
            name="body"
            className="w-full h-10 transition-all focus:border-blue-500 outline-none border-gray-300 border-2 rounded-lg"
          >
            <em>-Select</em>
            <option value="full_body">Full Body</option>
            <option value="full_body">One Body Part</option>
            <option value="full_body">Two Body Parts</option>
          </select>
        </div>
        <button className="rounded-full bg-[#615392] text-white capitalize hover:text-[#615392] hover:bg-white border-[#615392] border-2 w-full px-16 max-w-2xl py-2 transition-all">
          Submit
        </button>
      </form>
    </div>
  );
}
