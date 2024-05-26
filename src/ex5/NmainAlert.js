export default function NmainAlert({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage != null
              ? errorMessage
              : "The Form has been submitted Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
