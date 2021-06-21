import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ICarouselContainerProps } from './Carousel.model';
import './carousel.scss';
import CarouselContainer from './CarouselContainer';

/**
 * Rendering template components in Storybook requires some creativity, as template components
 * are higher-order components that require children. For the carousel, we're just creating a
 * few differently-colored divs so that we can see the transition.
 */
const Template: Story<React.PropsWithChildren<ICarouselContainerProps>> = (
  args
) => (
  <CarouselContainer {...args}>
    <div style={{ backgroundColor: '#f66700' }} />
    <div style={{ backgroundColor: '#00b67d' }} />
    <div style={{ backgroundColor: '#f7bc50' }} />
  </CarouselContainer>
);

/**
 * This decorator wraps the Carousel story in a dark blue background to improve visibility
 */
export const Basic = Template.bind({});
Basic.decorators = [
  (story) => (
    <div
      style={{
        backgroundColor: '#40537f',
        minHeight: window.innerHeight - 40,
        padding: '20px',
      }}
    >
      {story()}
    </div>
  ),
];

/**
 * In this story we're rendering the same components but we're going to be hiding the
 * controls to keep the display looking clean.
 */
export const HideScrollButtons = Template.bind({});
HideScrollButtons.args = {
  hideArrows: true,
  hideCircles: true,
  secondsToChange: 2,
};
HideScrollButtons.decorators = [
  (story) => (
    <div
      style={{
        backgroundColor: '#40537f',
        minHeight: window.innerHeight,
      }}
    >
      {story()}
    </div>
  ),
];

export default {
  title: 'Components/Atomic/Carousel',
  component: CarouselContainer,
  parameters: { layout: 'fullscreen' },
} as Meta;
