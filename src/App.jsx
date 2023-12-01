import React from "react"
import { FilmDetails } from "./components/FilmDetails/FilmDetails"

// export const App = () =>
// {
//   return React.createElement('div', {
//     children: [
//       React.createElement('span', { children: 'Hello' }),
//       React.createElement('span', { children: 'Students' }),
//     ]
//   });
// }

const filmDetails = {
  id: 'asdjnwjenf2342njna',
  title: 'The Simpsons',
  seasonsCount: 33,
  genre: 'Comedy',
  similar: [
    {
      id: 'sa87f68as6f8as68',
      title: 'South Park',
    }
  ],
  reviews: [
    {
      id: 'xc754vcx5',
      author: 'SP',
      text: 'Самый лучший мультфильм',
      rating: '10',
    }
  ]
};

export const App = () =>
{
  return (
    <div>
      <header />
      <FilmDetails
        title={filmDetails.title}
        seasonsCount={filmDetails.seasonsCount}
        genre={filmDetails.genre}
      />
      {/* <Reviews />
      <Recommendations /> */}
      <footer />
    </div>
  )
}