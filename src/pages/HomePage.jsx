import React from 'react';
import Hero from '../components/Hero';
import SignatureStory from '../components/SignatureStory';
import VideoSlider from '../components/VideoSlider';
import StageGallery from '../components/StageGallery';
import BookShowcase from '../components/BookShowcase';
import PodcastSection from '../components/PodcastSection';

export default function HomePage({ onOpenBooking, onPlayVideo }) {
  return (
    <>
      {/* 00 / Bold Summit Hero with Stage Video Viewport */}
      <Hero
        onOpenBooking={() => onOpenBooking()}
        onPlayVideo={onPlayVideo}
      />

      {/* 01 / Headliner Dossier: From Rochester Projects to Urban CEO */}
      <SignatureStory onOpenBooking={onOpenBooking} />

      {/* 02 / Cinematic Video Slider (Middle of Page) */}
      <VideoSlider onPlayVideo={onPlayVideo} />

      {/* 03 / Live Stage Reel & Gallery Slider */}
      <StageGallery onPlayVideo={onPlayVideo} />

      {/* 04 / Published Library: 6 Published Works */}
      <BookShowcase />

      {/* 05 / The Official Broadcast: From the Gutter to Greatness Podcast */}
      <PodcastSection onPlayVideo={onPlayVideo} />
    </>
  );
}


