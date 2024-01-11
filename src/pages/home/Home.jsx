import React, { useEffect } from "react";
import { useData } from "../../context/DataProvider";
import { Card, Loader, SecondaryBtn } from "../../components";
import { ColorRing } from "react-loader-spinner";

const Home = () => {
  const { state, limit, setLimit, dispatch } = useData();

  const loadMoreMovies = () => {
    dispatch({ type: "LOADING", payload: true });
    setTimeout(() => {
      setLimit((prev) => prev + 10);
      dispatch({ type: "LOADING", payload: false });
    }, 1500);
  };

  useEffect(() => {
    dispatch({ type: "LOAD_DATA", payload: limit });
  }, [limit]);

  return (
    <div className="p-5 px-10 pt-20 bg-bodyBg">
      <ul className="flex flex-wrap gap-7 justify-center">
        {state?.scrollData?.map((movie) => (
          <li key={movie.id}>
            <Card movie={movie} />
          </li>
        ))}
      </ul>
      {state.scrollData.length < state.totalLength && (
        <div className="flex justify-center items-center p-5">
          {state.loading ? (
            <div className="w-40">
              <SecondaryBtn>
                Loading movies
                <Loader />
              </SecondaryBtn>
            </div>
          ) : (
            <div className="w-40">
              <SecondaryBtn
                clickHandler={() => loadMoreMovies()}
                style="py-[10px]"
              >
                Load more movies
              </SecondaryBtn>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
