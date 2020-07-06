function TextInput({ title, type }) {
  return (
    <>
      <p>{title}</p>
      <input type={type} />
    </>
  );
}

export default TextInput;
