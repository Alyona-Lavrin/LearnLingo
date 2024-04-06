import axios from "axios";

const baseUrl =
  "https://learnlingo-df2cc-default-rtdb.europe-west1.firebasedatabase.app/";


export const requestTeachers = async (lastTeacherId, pageSize) => {
  const { data } = await axios.get(
    `${baseUrl}.json?&orderBy="id"&startAt=${lastTeacherId}&limitToFirst=${pageSize}`
  );
  return data;
};

export const requestAllTeachers = async () => {
  const { data } = await axios.get(`${baseUrl}.json`);
  return data;
};
