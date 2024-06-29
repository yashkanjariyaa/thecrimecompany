import CreateForm from "../components/create/CreateForm";
import ApparelData from "../constants/ApparelData";
import DisplayModel from "../components/create/DisplayModel";
import "../assets/css/create.css";
const Create: React.FC = () => {
  const handleFormSubmit = (data: ApparelData) => {
    console.log(data);
  };
  return (
    <section className="create">
      <div className="head">MAKE YOUR OWN APPARELS</div>
      <div className="form-display-container">
        <div className="left">
          <CreateForm onSubmit={handleFormSubmit} />
        </div>
        <div className="right">
          {/* path accourding to place of DisplayModel component */}
          <DisplayModel url={"../../assets/models/tshirt.glb"}/>
        </div>
      </div>
    </section>
  );
};

export default Create;
