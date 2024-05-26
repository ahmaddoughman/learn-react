import { useState } from "react";

export default function MyForm() {
  // second way
  const [formInputs, setFormInput] = useState({
    name: "",
    email: "",
    age: "",
    txtarea: "",
    isChecked: false,
    country: "",
    status: "",
  });

  function handleCheckBoxChanged(event) {
    setFormInput({ ...formInputs, isChecked: event.target.checked });
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(formInputs);
        }}
      >
        <label>Name:</label>
        <input
          value={formInputs.name}
          onChange={(event) => {
            setFormInput({ ...formInputs, name: event.target.value });
          }}
        />
        <br></br>

        <label>Email: </label>
        <input
          value={formInputs.email}
          onChange={(event) => {
            setFormInput({ ...formInputs, email: event.target.value });
          }}
        />
        <br></br>

        <label>age: </label>
        <input
          value={formInputs.age}
          onChange={(event) => {
            setFormInput({ ...formInputs, age: event.target.value });
          }}
        />
        <br></br>

        <label>text: </label>
        <textarea
          value={formInputs.txtarea}
          onChange={(event) => {
            setFormInput({ ...formInputs, txtarea: event.target.value });
          }}
        />
        {/* 2nd way */}
        {/* <label>text: </label>
        <textarea
          onChange={(event) => {
            setFormInput({ ...formInputs, txtarea: event.target.value });
          }}
        >
          {formInputs.txtarea}
        </textarea> */}
        <br></br>

        <label>Are you student: </label>
        <input
          type="checkbox"
          checked={formInputs.isChecked}
          onChange={handleCheckBoxChanged}
        />
        <br></br>

        <select
          value={formInputs.country}
          onChange={(event) => {
            setFormInput({ ...formInputs, country: event.target.value });
          }}
        >
          <option>Lebanon</option>
          <option>KSA</option>
          <option>Egypt</option>
        </select>
        <br></br>

        <div>
          <input
            value="student"
            type="radio"
            name="status"
            checked={formInputs.status == "student"}
            onChange={(event) => {
              setFormInput({ ...formInputs, status: event.target.value });
            }}
          />
          student
          <input
            value="teacher"
            type="radio"
            name="status"
            checked={formInputs.status == "teacher"}
            onChange={(event) => {
              setFormInput({ ...formInputs, status: event.target.value });
            }}
          />
          teacher
        </div>

        <button>Submit</button>
      </form>
      <br></br>
    </div>
  );
}
