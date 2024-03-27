import { useDispatch } from "react-redux";
import { TeachersList } from "../components/TeachersList/TeachersList";
import { useEffect } from "react";
import { allTeachersThunk } from "../redux/teachersSlice";

const TeachersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allTeachersThunk())
  }, [dispatch])
  
  return (
    <main>
      <TeachersList/>
    </main>
  );
};

export default TeachersPage;
