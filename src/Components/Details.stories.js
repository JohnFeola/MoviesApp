import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Details from '../Components/Details';

export default {
  title: 'Example/Details',
  component: Details,
  argTypes: {
    title: {control:'text'},
    summary: {control: 'text'},
  }
} 

const Template = (args) => <Details {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'LOTR ROTK',
  src: 'https://image.tmdb.org/t/p/original/dNsEaafO4huvqzVrlPuSQWIHOy0.jpg',
  videoId: 'r5X-hFf6Bwo',
  summary: 'This is a summary of the movie. Frodo and stuff Suaron loses etc, directed by Peter Jackson',
  revenue: '$123,456,992',
  year: '2008',
};
