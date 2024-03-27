import { useEffect, useState } from "react";
import { TeachersItem } from "../TeachersItem/TeachersItem";
import { List, LoadMoreBtn } from "./TeachersList.styled";
import { Filters } from "../Filters/filters";
import { useSelector } from "react-redux";
import { selectAllTeachers, selectIsError, selectIsLoading, selectVisibleTeachers } from "../../redux/teachersSelectors";

export const TeachersList = () => {
 
  
  const filtredTeachers = useSelector(selectVisibleTeachers);
  const allTeachers = useSelector(selectAllTeachers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(8);
  const [visibleLoadMore, setVisibleLoadMore] = useState(true);
  const [teachers, setTeachers] = useState([])


  useEffect(() => {
    if (filtredTeachers) {
     setTeachers(filtredTeachers)
    } else {
      setTeachers(allTeachers)
    }
    setItems(teachers.slice(0, 4));
    teachers.length <= 4
      ? setVisibleLoadMore(false)
      : setVisibleLoadMore(true);
  }, [teachers, filtredTeachers, allTeachers]);

  const clickLoadMore = () => {
    const idx = items.length;
    setPageSize((prev) => prev + 4);
    setItems((prev) => [...prev, ...teachers.slice(idx, pageSize)]);
    teachers.length <= pageSize
      ? setVisibleLoadMore(false)
      : setVisibleLoadMore(true);
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      <Filters/>
      <List>
        {items.map((teacher) => (
          <li key={teacher.id}>
            <TeachersItem teacher={teacher} />
          </li>
        ))}
        {visibleLoadMore && (
          <LoadMoreBtn type="button" onClick={clickLoadMore}>
            Load more
          </LoadMoreBtn>)}
      </List>
      
      
    </div>
  );
};
