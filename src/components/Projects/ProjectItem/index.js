import "./index.css";
const ProjectItem = (props) => {
  const { details } = props;
  const { more, imageUrl, heading, description, skillsUsed } = details;
  return (
    <div className="card">
      <img className="card-image" alt="project" src={imageUrl} />
      <div className="sub-card">
        <h1 className="card-title">{heading}</h1>
        <br />
        <br />
        <p className="card-description">{description}</p>
        <br />
        <br />
        {skillsUsed !== null && (
          <div>
            <p>
              Skills Used :<span>{skillsUsed}</span>
            </p>
            <br />
            <br />
          </div>
        )}

        <p>{more}</p>
      </div>
    </div>
  );
};
export default ProjectItem;
