import "./index.css";
const ProjectItem = (props) => {
  const { details } = props;
  const { more, imageUrl, heading, description, skillsUsed } = details;
  return (
    <div className="proj-card">
      <h1 className="proj-card-title">{heading}</h1>
      <br />
      <p>{description}</p>
      <br />
      {skillsUsed !== null && (
        <div>
          <p>
            Skills Used :<span>{skillsUsed}</span>
          </p>
          <br />
        </div>
      )}
      <img className="proj-card-image" alt="project" src={imageUrl} />

      <p>{more}</p>
    </div>
  );
};
export default ProjectItem;
