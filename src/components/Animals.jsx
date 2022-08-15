function Animal(props) {
  const { animal, age, color, isHas } = props;

  if (isHas === true) {
    return (
      <div style={{ color: color }}>
        <h1>
          My {animal} {age}years old
        </h1>
      </div>
    );
  } else {
    return <div>Животное не существует</div>;
  }
}
export default Animal;
