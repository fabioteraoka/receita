import React from "react";
import { PrismicRichText, PrismicText } from "@prismicio/react";

import EmbedContainer from "react-oembed-container";

import YoutubeEmbed from "../../components/YoutubeEmbed";

const Video = ({ slice }) => (
  <section className="py-5">
    <span>
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </span>
    {slice.primary.description ? (
      <PrismicRichText field={slice.primary.description} />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
    <article className="video">
      <YoutubeEmbed embedId={slice.primary.youtube} />
    </article>

    <style jsx>{`
      section {
        max-width: 800px;
        margin: 0;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
      .video {
        height: 100%;
        width: 100%;
        text-align: center;
        align-items: center;
      }
    `}</style>
  </section>
);

export default Video;
