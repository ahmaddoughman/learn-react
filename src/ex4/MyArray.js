import { useState } from "react";

export default function MyArray() {
  const [deviceNameInputValue, setDeviceNameInputValue] = useState("");

  const [devices, setDevices] = useState([
    { name: "iphone" },
    { name: "mac" },
    { name: "samsung" },
    { name: "windows" },
  ]);

  const devicesList = devices.map((device, id) => {
    return (
      <li key={id}>
        {device.name}{" "}
        <button
          onClick={() => {
            handleDeleteClick(id);
          }}
        >
          delete
        </button>{" "}
        <button
          onClick={() => {
            handleEditClick(id);
          }}
        >
          edit
        </button>
      </li>
    );
  });

  function handleEditClick(id) {
    const newDevices = devices.map((device, index) => {
      if (index === id) {
        return { ...device, name: device.name + "1" };
      } else {
        return device;
      }
    });
    setDevices(newDevices);
  }

  function handleDeleteClick(id) {
    const newDevices = [...devices]; // Create a copy of the devices array
    newDevices.splice(id, 1); // Remove the element at the specified index
    setDevices(newDevices); // Update the state with the modified array
  }

  function handleAddClick() {
    setDevices([...devices, { name: deviceNameInputValue }]);
    setDeviceNameInputValue("");
  }
  return (
    <div>
      <ul>{devicesList}</ul>
      <div>
        <label>Device Name: </label>
        <input
          type="text"
          value={deviceNameInputValue}
          onChange={(event) => {
            setDeviceNameInputValue(event.target.value);
          }}
        />
        <button onClick={handleAddClick}>add</button>
      </div>
    </div>
  );
}
