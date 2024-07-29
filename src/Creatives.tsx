import CreateGrid from "./components/CreateGrid";

const Creatives = () => {
  return (
    <div className="flex-1">
      <div>
        <h1 className="text-center text-[40px]  tracking-normal uppercase w-full bg-purple-200 mt-10">
          Creatives
        </h1>
        
      </div>
      <div>
      <CreateGrid/>
      </div>
    </div>
  );
};

export default Creatives;
