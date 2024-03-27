import { createSelector } from "@reduxjs/toolkit";

export const selectFavoriteTeachers = (state) =>
  state.favoriteTeacher.favoriteTeacher;
export const selectAllTeachers = (state) => state.teachers.teachers;
export const selectIsLoading = (state) => state.teachers.isLoading;
export const selectIsError = (state) => state.teachers.error;
export const selectFilters = (state) => state.filters;

export const selectVisibleTeachers = createSelector(
  [selectAllTeachers, selectFilters],
  (teachers, filters) => {
    if (filters.language && filters.level && filters.price) {
      const visibleTeacher = [];
      for (const obj of teachers) {
        if (obj.languages.includes(filters.language)) {
          visibleTeacher.push(obj);
        }
      }
      let visibleArr = [];
      for (const obj of visibleTeacher) {
        if (obj.levels.includes(filters.level)) {
          visibleArr.push(obj);
        }
      }
      const maxPrice = Number(filters.price) + 10;
      visibleArr = visibleArr.filter(
        (item) =>
          item.price_per_hour >= Number(filters.price) &&
          item.price_per_hour < maxPrice
      );
      return visibleArr;
    }

    if (filters.language && filters.level) {
      const visibleTeacher = [];
      for (const obj of teachers) {
        if (obj.languages.includes(filters.language)) {
          visibleTeacher.push(obj);
        }
      }
      const visibleArr = [];
      for (const obj of visibleTeacher) {
        if (obj.levels.includes(filters.level)) {
          visibleArr.push(obj);
        }
      }
      return visibleArr;
    }

    if (filters.language && filters.price) {
      let visibleTeacher = [];
      for (const obj of teachers) {
        if (obj.languages.includes(filters.language)) {
          visibleTeacher.push(obj);
        }
      }
      const maxPrice = Number(filters.price) + 10;
      visibleTeacher = visibleTeacher.filter(
        (item) =>
          item.price_per_hour >= Number(filters.price) &&
          item.price_per_hour < maxPrice
      );
      return visibleTeacher;
    }

    if (filters.level && filters.price) {
      let visibleArr = [];
      for (const obj of teachers) {
        if (obj.levels.includes(filters.level)) {
          visibleArr.push(obj);
        }
      }
      const maxPrice = Number(filters.price) + 10;
      visibleArr = visibleArr.filter(
        (item) =>
          item.price_per_hour >= Number(filters.price) &&
          item.price_per_hour < maxPrice
      );
      return visibleArr;
    }

    if (filters.language) {
      const visibleTeacher = [];
      for (const obj of teachers) {
        if (obj.languages.includes(filters.language)) {
          visibleTeacher.push(obj);
        }
      }
      return visibleTeacher;
    }
    if (filters.level) {
      const visibleTeacher = [];
      for (const obj of teachers) {
        if (obj.levels.includes(filters.level)) {
          visibleTeacher.push(obj);
        }
      }
      return visibleTeacher;
    }
    if (filters.price) {
      const maxPrice = Number(filters.price) + 10;
      const visibleTeacher = teachers.filter(
        (item) =>
          item.price_per_hour >= Number(filters.price) &&
          item.price_per_hour < maxPrice
      );
      return visibleTeacher;
    }
  }
);
