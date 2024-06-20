const Wrapper = (props) => {
  return (
    <>
      <div className="container">
        <h3>Contact list:</h3>
        {props.children}
      </div>
    </>
  );
};

export default Wrapper;
