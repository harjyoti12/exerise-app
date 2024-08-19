import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useExerciseContext } from '../../Context/ExerciseContext'; // Assuming you have a context for exercises
import { youtubeOptions } from '../../utils/FetchData';

const Detail = () => {
  const { id } = useParams();
  const { exercises } = useExerciseContext();
  const [exercise, setExercise] = useState(null);
  const [videos, setVideos] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState(6); // State to track number of visible videos

  useEffect(() => {
    const selectedExercise = exercises.find((exercise) => exercise.id === id);
    setExercise(selectedExercise);

    if (selectedExercise) {
      fetch(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${selectedExercise.name}`,
        youtubeOptions
      )
        .then((response) => response.json())
        .then((data) => setVideos(data.contents || []))
        .catch((error) => console.error('Error fetching videos:', error));
    }
  }, [id, exercises]);

  const loadMoreVideos = () => {
    setVisibleVideos((prev) => prev + 6); // Load 6 more videos when button is clicked
  };

  if (!exercise) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden h-[100vh]">
        <div className="w-full h-[10vh] flex justify-start items-start mt-4">
          <Link
            to="/"
            className="bg-blue-400 p-6 text-white py-4 px-4 rounded-xl mt-4 ml-5"
          >
            Back To Home
          </Link>
        </div>
        <div className="container px-5 py-24 mx-auto mt-[-10vh]">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className=" border p-4   lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-white text-[2rem] font-[head3] mb-4">
                {exercise.name}
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-red-500 border-b-2 border-red-500 py-2 text-lg px-1">
                  Instructions
                </a>
              </div>
              <div className="overflow-auto hide h-[60vh]">
                {exercise.instructions && exercise.instructions.map((instruction, index) => (
                  <li key={index} className="leading-relaxed mb-4 text-white font-[head3] text-[1.4rem]">
                    {instruction}
                  </li>
                ))}
              </div>
            </div>
            <img
              alt={exercise.name}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={exercise.gifUrl}
            />
          </div>
        </div>
      </section>
      <div className="bg-[#0C0C0C] py-10">
        <h1 className="text-[3rem] font-[head3] text-white text-center">Related Videos</h1>
        <div className="flex flex-wrap justify-center gap-8 mt-10 p-4">
          {videos.slice(0, visibleVideos).map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg h-[50vh] w-[30vw] p-4">
              <a href={`https://www.youtube.com/watch?v=${video.video.videoId}`} target="_blank" rel="noopener noreferrer">
                <img
                  src={video.video.thumbnails[0].url}
                  alt={video.video.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-gray-800 text-xl font-semibold">
                  {video.video.title}
                </h2>

                <button className='bg-blue-600 py-2 px-4 rounded-full text-white mt-10'>Watch Now</button>
              </a>
            </div>
          ))}
        </div>
        {visibleVideos < videos.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMoreVideos}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
