import "./Form.css";

const Form = ({ children, handleSubmit }) => {
  return (
    <form className="Form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
