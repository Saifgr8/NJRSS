const Shimmer = () => {
  return (
    <div className="Shimmer-top">
      {Array(20)
        .fill("")
        .map((e,index) => (
          <div key={index} className="Shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
