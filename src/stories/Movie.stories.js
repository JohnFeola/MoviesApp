import React from "react";
import { MemoryRouter } from "react-router-dom";
import Movie from "../Components/Movie";

export default {
  title: 'Components/Movie',
  component: Movie,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>], // Necessary if your component uses Link or Route from 'react-router-dom'
};

const Template = (args) => <Movie {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
  name: 'Lord of the Rings: ROTK',
  src: 'https://image.tmdb.org/t/p/original/dNsEaafO4huvqzVrlPuSQWIHOy0.jpg',
  year: '2022',
};

export const AnotherMovie = Template.bind({});
AnotherMovie.args = {
  id: '2',
  name: 'Cloud Atlas',
  src: 'https://sf-fan.de/wp-content/uploads/2012/10/cloud_atlas_ver2_xxlg.jpg',
  year: '2023',
};

