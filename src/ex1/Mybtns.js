import "./Style.css";

export default function Mybtns({ title, children }) {
  return (
    <div>
      {title == null || title === "" ? (
        <div></div>
      ) : (
        <button>
          {title} {children}
        </button>
      )}
    </div>
  );
}
