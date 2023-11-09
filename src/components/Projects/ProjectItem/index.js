import "./index.css";
const ProjectItem = (props) => {
  const { details } = props;
  const { imageUrl, heading, description } = details;
  return (
    <div className="card">
      <img className="card-image" alt="project" src={imageUrl} />
      <h1 className="card-title">{heading}</h1>
      <p className="card-description">{description}</p>
    </div>
  );
};
export default ProjectItem;
