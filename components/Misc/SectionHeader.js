function SectionHeader(props) {
  let link = null;
  if (props.linkTitle) {
    link = <h5>{props.linkTitle}</h5>;
  } else if (props.link) {
    console.error(
      "Error in SectionHeader component usage. Prop -> link provided but no Prop -> linkTitle"
    );
  }

  return (
    <div className="row mx-0 mt-5 justify-content-between">
      <h4>{props.title}</h4>
      {link}
    </div>
  );
}

export default SectionHeader;
