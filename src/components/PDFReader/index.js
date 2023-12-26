import "./index.css";

const PDFViewer = () => {
  return (
    <div className="resume-container">
      <h1 className="resume">Resume</h1>
      <iframe
        id="resume"
        src="https://drive.google.com/file/d/1XU0CkgG5_edXWiHxB9TZvufGOc8n9U4A/preview"
        className="resume-display"
        allow="autoplay"
        title="resume"
      ></iframe>
    </div>
  );
};

export default PDFViewer;
