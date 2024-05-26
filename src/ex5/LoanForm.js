import "./LoanForm.css";

import { useState } from "react";
import NmainAlert from "./NmainAlert";

export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [loanInputs, setLoadInputs] = useState({
    name: "",
    age: "",
    phoneNumber: "",
    isEmployee: false,
    salary: "",
  });


  function handleSubmit(event) {
    event.preventDefault();
    setShowModal(true);
    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 50) {
      setErrorMessage("Please enter a valid age between 18 and 50.");
    } else if (phoneNumber.toString().length < 5) {
      setErrorMessage("Please enter a valid phone number.");
    } else {
      setShowModal(true);
      setLoadInputs({
        ...loanInputs,
        name: "",
        age: "",
        phoneNumber: "",
        isEmployee: false,
        salary: "",
      });
    }
  }

  const btnIsDisabled =
    loanInputs.name == "" ||
    loanInputs.age == "" ||
    loanInputs.phoneNumber == "";

    function handleDivClick(){
      if(showModal){
        setShowModal(false);
      }
    }

  return (
    <div className={"container"} onClick={handleDivClick}>
      <h2>Requesting a Loan</h2>
      <hr></hr>
      <form className={"form"}>
        <label>name:</label>
        <input
          type="text"
          value={loanInputs.name}
          onChange={(event) =>
            setLoadInputs({ ...loanInputs, name: event.target.value })
          }
        />

        <label>Phone number:</label>
        <input
          type="number"
          value={loanInputs.phoneNumber}
          onChange={(event) =>
            setLoadInputs({ ...loanInputs, phoneNumber: event.target.value })
          }
        />

        <label>Age:</label>
        <input
          type="number"
          value={loanInputs.age}
          onChange={(event) =>
            setLoadInputs({ ...loanInputs, age: event.target.value })
          }
        />

        <label>Are you employee?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) =>
            setLoadInputs({ ...loanInputs, isEmployee: event.target.checked })
          }
        />

        <label>Salary:</label>
        <select
          value={loanInputs.salary}
          onChange={(event) =>
            setLoadInputs({ ...loanInputs, salary: event.target.value })
          }
        >
          <option>less than 500$</option>
          <option>between 500$ & 2000$</option>
          <option>above 2000$</option>
        </select>

        <button
          className={btnIsDisabled ? "disabled" : "btn"}
          disabled={btnIsDisabled } // can not make submit
          onClick={handleSubmit}
        >
          submit
        </button>
      </form>

      <NmainAlert errorMessage={errorMessage} isVisible={showModal}/>
    </div>
  );
}
