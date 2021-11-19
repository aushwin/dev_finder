import "./Bg.css";
const Bg = (props) => {
  return (
    <div className="h-screen background-image flex justify-center items-center">
      <div className="h-4/5 bg w-4/5 shadow-md bg-white">{props.children}</div>
    </div>
  );
};

export default Bg;
