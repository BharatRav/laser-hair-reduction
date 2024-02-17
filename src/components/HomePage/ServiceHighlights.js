export default function ServiceHighlights({ arr }) {
  return (
    <div className="container mx-auto grid grid-cols-2 md:flex md:flex-wrap gap-5">
    {arr.map((item, index) => (
        <div key={index} className="flex gap-2 flex-col flex-grow text-center">
          <p className="font-bold text-3xl">
            <string>{item.service}</string>
          </p>
          <p className="text-base">{item.highlight}</p>
        </div>
      ))}
    </div>
  );
}
