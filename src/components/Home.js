import React, { useState, useEffect } from "react";
import Main from "./Main";
import { baseURL } from "../common/config";
import Authaxios from "../common/authAxios";

export default function App() {
  const [quizs, setQuizs] = useState([]);
  const [page, setPage] = useState(1);

  const getQuizs = async (p = 1) => {
    const url = `${baseURL}/api/quiz?page=${p}`;
    const { data } = await Authaxios().get(url);
    console.log(data);
    setQuizs(data.allQuizzes);
  };
  const getNextPage = async () => {
    await getQuizs(page + 1);
    setPage(page + 1);
  };
  const getAll = async () => {
    await getQuizs();
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <Main quizs={quizs} getNextPage={getNextPage} />
    </>
  );
}
