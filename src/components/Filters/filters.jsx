import { useDispatch, useSelector } from "react-redux";
import { selectAllTeachers } from "../../redux/teachersSelectors";
import {
  changeLanguage,
  changeLevel,
  changePrice,
} from "../../redux/filtersSlice";
import { FilterWrap, Label, Select } from "./filters.styled";

export const Filters = () => {
  const allTeachers = useSelector(selectAllTeachers);
  const dispatch = useDispatch();
  const arrValue = [10, 20, 30, 40]

  const languages = allTeachers.flatMap((item) => item.languages);
  const uniqueLanguages = [...new Set(languages)];

  const levels = allTeachers.flatMap((item) => item.levels);
  const uniqueLevels = [...new Set(levels)];

  

  const handlerLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handlerLevelChange = (e) => {
    dispatch(changeLevel(e.target.value));
  };

  const handlerPriceChange = (e) => {
    dispatch(changePrice(e.target.value));
  };

  return (
    <FilterWrap>
      <div>
        <Label htmlFor="languages">Languages</Label>
        <Select id="languages" name="languages" onChange={handlerLangChange}>
          <option value="" label="All" />
          {uniqueLanguages.map((item, idx) => (
            <option key={idx} value={item} label={item} />
          ))}
        </Select>
      </div>
      <div>
        <Label htmlFor="levels">Level of knowledge</Label>
        <Select id="levels" name="levels" onChange={handlerLevelChange}>
          <option value="" label="All" />
          {uniqueLevels.map((item, idx) => (
            <option key={idx} value={item} label={item} />
          ))}
        </Select>
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Select id="price" name="price" onChange={handlerPriceChange}>
          <option value="" label="All" />
          {arrValue.map((item, idx) => (
            <option key={idx} value={item} label={item} />
          ))}
        </Select>
      </div>
    </FilterWrap>
  );
};
