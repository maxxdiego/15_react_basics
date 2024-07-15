import ChildFunction from "./ChildFunction";

const ParentFunction = () => {
  const handleChildClick = () => {
    console.log("Função criada no elemento pai!");
  };

  return (
    <div>
      <ChildFunction onChildClick={handleChildClick} />
    </div>
  );
};

export default ParentFunction;
