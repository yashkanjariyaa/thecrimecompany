import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "../../assets/css/createForm.css";

interface ApparelData {
  apparelType: string;
  size: string;
  color: string;
  printType: string;
  designPosition: string;
  designFile: File | null;
  apparelName: string;
}

interface ApparelFormProps {
  onSubmit: (data: ApparelData) => void;
}

const ApparelForm: React.FC<ApparelFormProps> = ({ onSubmit }) => {
  const [apparelType, setApparelType] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [printType, setPrintType] = useState("");
  const [designPosition, setDesignPosition] = useState("");
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [apparelName, setApparelName] = useState("");
  const [missingFields, setMissingFields] = useState<string[]>([]);

  const handleDrop = (acceptedFiles: File[]) => {
    setDesignFile(acceptedFiles[0]);
    setMissingFields((prev) => prev.filter((field) => field !== "designFile"));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMissingFields = [];

    if (!apparelType) newMissingFields.push("apparelType");
    if (!size) newMissingFields.push("size");
    if (!color) newMissingFields.push("color");
    if (!printType) newMissingFields.push("printType");
    if (!designPosition) newMissingFields.push("designPosition");
    if (!designFile) newMissingFields.push("designFile");
    if (!apparelName) newMissingFields.push("apparelName");

    if (newMissingFields.length > 0) {
      setMissingFields(newMissingFields);
    } else {
      onSubmit({
        apparelType,
        size,
        color,
        printType,
        designPosition,
        designFile,
        apparelName,
      });
      setMissingFields([]);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case "apparelType":
        setApparelType(value);
        break;
      case "size":
        setSize(value);
        break;
      case "color":
        setColor(value);
        break;
      case "printType":
        setPrintType(value);
        break;
      case "designPosition":
        setDesignPosition(value);
        break;
      case "apparelName":
        setApparelName(value);
        break;
    }
    if (value !== "") {
      setMissingFields((prev) => prev.filter((f) => f !== field));
    }
  };

  return (
    <form className="apparel-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="input">
          <label htmlFor="apparelType">Apparel Type</label>
          <select
            id="apparelType"
            className={`form-control ${
              missingFields.includes("apparelType") ? "missing-field" : ""
            }`}
            value={apparelType}
            onChange={(e) => handleInputChange("apparelType", e.target.value)}
          >
            <option value="">Select Apparel Type</option>
            <option value="T-shirt">T-shirt</option>
            <option value="Hoodie">Hoodie</option>
            <option value="Crop top">Crop top</option>
            <option value="Sweat shirt">Sweat shirt</option>
            <option value="Oversized tshirt">Oversized tshirt</option>
          </select>
        </div>

        {missingFields.includes("apparelType") && (
          <p className="missing-message">Please select an apparel type.</p>
        )}
      </div>

      <div className="form-group">
        <div className="input">
          <label htmlFor="size">Size</label>
          <select
            id="size"
            className={`form-control ${
              missingFields.includes("size") ? "missing-field" : ""
            }`}
            value={size}
            onChange={(e) => handleInputChange("size", e.target.value)}
          >
            <option value="">Select Size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        {missingFields.includes("size") && (
          <p className="missing-message">Please select a size.</p>
        )}
      </div>

      <div className="form-group">
        <div className="input">
          <label htmlFor="color">Color</label>
          <select
            id="color"
            className={`form-control ${
              missingFields.includes("color") ? "missing-field" : ""
            }`}
            value={color}
            onChange={(e) => handleInputChange("color", e.target.value)}
          >
            <option value="">Select Color</option>
            <option value="black">Black</option>
            <option value="white">White</option>
          </select>
        </div>

        {missingFields.includes("color") && (
          <p className="missing-message">Please select a color.</p>
        )}
      </div>

      <div className="form-group">
        <div className="input">
          <label htmlFor="printType">Print Type</label>
          <select
            id="printType"
            className={`form-control ${
              missingFields.includes("printType") ? "missing-field" : ""
            }`}
            value={printType}
            onChange={(e) => handleInputChange("printType", e.target.value)}
          >
            <option value="">Select Print Type</option>
            <option value="DTG">DTG</option>
            <option value="DTF">DTF</option>
          </select>
        </div>

        {missingFields.includes("printType") && (
          <p className="missing-message">Please select a print type.</p>
        )}
      </div>

      <div className="form-group">
        <div className="input">
          <label htmlFor="designPosition">Design Position</label>
          <select
            id="designPosition"
            className={`form-control ${
              missingFields.includes("designPosition") ? "missing-field" : ""
            }`}
            value={designPosition}
            onChange={(e) =>
              handleInputChange("designPosition", e.target.value)
            }
          >
            <option value="">Select Design Position</option>
            <option value="Front">Front</option>
            <option value="Back">Back</option>
            <option value="Pocket Logo">Pocket Logo</option>
          </select>
        </div>

        {missingFields.includes("designPosition") && (
          <p className="missing-message">Please select a design position.</p>
        )}
      </div>

      <div className="form-group" id="dropzone">
        <div className="input">
          <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? "active" : ""} ${
              missingFields.includes("designFile") ? "missing-field" : ""
            }`}
          >
            <input {...getInputProps()} />
            {designFile ? (
              <div>{designFile.name}</div>
            ) : (
              <div className="text">
                Drag & drop a design file here, or click to select a file
              </div>
            )}
          </div>
        </div>

        {missingFields.includes("designFile") && (
          <p className="missing-message">Please upload a design file.</p>
        )}
      </div>

      <div className="form-group">
        <div className="input">
          <label htmlFor="apparelName">Apparel Name</label>
          <input
            type="text"
            id="apparelName"
            className={`form-control ${
              missingFields.includes("apparelName") ? "missing-field" : ""
            }`}
            value={apparelName}
            onChange={(e) => handleInputChange("apparelName", e.target.value)}
          />
        </div>

        {missingFields.includes("apparelName") && (
          <p className="missing-message">Please enter an apparel name.</p>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={missingFields.length > 0}
      >
        Submit
      </button>
    </form>
  );
};

export default ApparelForm;
