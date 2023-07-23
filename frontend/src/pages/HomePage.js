import { useEffect, useState } from "react";
import notesAPI from "../API/notesAPI";
import AllNotes from "../components/AllNotes";

const HomePage = () => {
  const [notes, setNotes] = useState([]);

  const fetchAllNotes = async () => {
    const data = await notesAPI.getAllNotes();
    setNotes(data ? data : []);
  };

  useEffect(() => {
    fetchAllNotes();
  }, []);

  const renderAllNotes = () => {
    return notes.map((note, index) => {
      return (
        <div>
          <AllNotes note={note} />
        </div>
      );
    });
  };
  return <div>{renderAllNotes()}</div>;
};

export default HomePage;
