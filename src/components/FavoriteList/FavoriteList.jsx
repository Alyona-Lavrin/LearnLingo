import { useSelector } from "react-redux";
import { selectFavoriteTeachers } from "../../redux/teachersSelectors";
import { TeachersItem } from "../TeachersItem/TeachersItem";
import { List, LoadMoreBtn } from "../TeachersList/TeachersList.styled";
import { useEffect, useState } from "react";

export const FavoriteList = () => {
  const favoriteTeachers = useSelector(selectFavoriteTeachers);

  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(8);
  const [visibleLoadMore, setVisibleLoadMore] = useState(true);

  useEffect(() => {
    setItems(favoriteTeachers.slice(0, 4));
    favoriteTeachers.length <= 4
      ? setVisibleLoadMore(false)
      : setVisibleLoadMore(true);
  }, [favoriteTeachers]);

  const clickLoadMore = () => {
    const idx = items.length;
    setPageSize((prev) => prev + 4);
    setItems((prev) => [...prev, ...favoriteTeachers.slice(idx, pageSize)]);
    favoriteTeachers.length <= pageSize
      ? setVisibleLoadMore(false)
      : setVisibleLoadMore(true);
  };

  return (
    <main>
      <div>
        <List>
          {items.map((teacher) => (
            <li key={teacher.id}>
              <TeachersItem teacher={teacher} />
            </li>
          ))}
          {visibleLoadMore && (
            <LoadMoreBtn type="button" onClick={clickLoadMore}>
              Load more
            </LoadMoreBtn>
          )}
        </List>
      </div>
    </main>
  );
};
