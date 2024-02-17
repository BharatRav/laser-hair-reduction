export default function Hero() {
    const services = ["Advanced tech","Pain Free","Exceptional Doctors"]
  return (
    <div className="text-white capitalize bg-banner bg-cover w-full max-w-[1560px]">
      <h1 className="font-bold text-[55px]">Laser Hair Reduction</h1>
      <h3 className="font-semibold text-[32px]">Right At The Comfort Of Your Home</h3>
      <div>
        <ul>
          {services.map((service,idx) => {
            return <li key={idx} className="text-2xl font-normal">{service}</li>;
          })}
        </ul>
      </div>
      <p>Full Body Starting from</p>
      <p><strong>&#8377;1,999</strong> /Per Session</p>
    </div>
  );
}
