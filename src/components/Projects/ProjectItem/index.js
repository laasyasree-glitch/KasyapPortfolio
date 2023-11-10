import "./index.css";
const ProjectItem = (props) => {
  const { details } = props;
  const { imageUrl, heading, description, skillsUsed } = details;
  return (
    <div className="card">
      <img className="card-image" alt="project" src={imageUrl} />
      <div className="sub-card">
        <h1 className="card-title">{heading}</h1>
        <br />
        <p className="card-description">{description}</p>
        <h2 className="skills-title">
          <br />
          <br />
          Skills Used
        </h2>
        <br />
        {skillsUsed !== null && (
          <ul>
            {skillsUsed.map((each) => (
              <li className="card-description">{each}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default ProjectItem;
