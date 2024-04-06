import { useSelector } from "react-redux";
import { selectFavoriteTeachers } from "../../redux/teachersSelectors";
import { TeachersItem } from "../TeachersItem/TeachersItem";
import {
  List,
  LoadMoreBtn,
  NoFavorite,
} from "../TeachersList/TeachersList.styled";
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
        {favoriteTeachers.length ? (
          <List>
            {items.map((teacher, i) => (
              <li key={i}>
                <TeachersItem teacher={teacher} />
              </li>
            ))}
            {visibleLoadMore && (
              <LoadMoreBtn type="button" onClick={clickLoadMore}>
                Load more
              </LoadMoreBtn>
            )}
          </List>
        ) : (
          <NoFavorite>You dont have any favorite teachers</NoFavorite>
        )}
      </div>
    </main>
  );
};
