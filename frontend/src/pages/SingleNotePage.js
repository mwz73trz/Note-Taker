import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import notesAPI from "../API/notesAPI";

const SingleNotePage = () => {
  const params = useParams();
  const [note, setNote] = useState(null);

  const fetchSingleNote = async () => {
    const data = await notesAPI.getSingleNote(params.id);
    setNote(data);
  };

  useEffect(() => {
    fetchSingleNote();
  }, [params.id]);

  const renderSingleNote = () => {
    if (!note) {
      return null;
    }
    return (
      <div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
    );
  };
  return <div>{renderSingleNote()}</div>;
};

export default SingleNotePage;
