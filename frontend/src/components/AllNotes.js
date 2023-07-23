import { Link } from "react-router-dom";

const AllNotes = (props) => {
  return (
    <div>
      <Link to={`notes/${props.note.id}`}>{props.note.title}</Link>
    </div>
  );
};

export default AllNotes;
