import React from "react";
import styled from "styled-components";

// Assets
import EpisodesImage from "../assets/EPISODES.png";

// Utils
import { blue, pink, backgroundColor } from "../utils/colors";
import { episodesData } from "../utils/episodesData";

// Render
const getEpisodeMarkdown = (data, number) => {
  return (
    <div className={`episode episode-${number}`}>
      <a
        href="https://www.netflix.com/vn/title/81040344"
        target="_blank"
        className="image"
        rel="noreferrer"
      >
        <img src={data.episodeImage} alt="" />
      </a>
      <h3>{data.episodeName}</h3>
      <p>{data.episodeInfo}</p>
    </div>
  );
};

const Episodes = () => {
  return (
    <Section id="episodes" className="defaultMargin">
      <div className="title">
        <img src={EpisodesImage} alt="Episodes " />
        <div className="circle"></div>
      </div>

      <div className="episodes">
        <div className="episodes__grid">
          {getEpisodeMarkdown(episodesData[0], 1)}
          {getEpisodeMarkdown(episodesData[1], 2)}
          {getEpisodeMarkdown(episodesData[2], 3)}
        </div>

        <div className="episodes__grid">
          <div className="square"></div>
          {getEpisodeMarkdown(episodesData[3], 4)}
          {getEpisodeMarkdown(episodesData[4], 5)}
        </div>

        <div className="episodes__grid">
          {getEpisodeMarkdown(episodesData[5], 6)}
          {getEpisodeMarkdown(episodesData[6], 7)}
          <div className="square"></div>
        </div>

        <div className="episodes__grid">
          {getEpisodeMarkdown(episodesData[7], 8)}
          <div></div>
          {getEpisodeMarkdown(episodesData[8], 9)}
        </div>
      </div>
    </Section>
  );
};

// Styled
const Section = styled.section`
  margin: 0vw 5vw;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10vh;
    position: relative;

    .circle {
      height: 8rem;
      width: 8rem;
      border: 10px solid #f72585;
      border-radius: 10rem;
      position: absolute;
      right: 10%;
    }
  }

  .episodes {
    display: flex;
    flex-direction: column;
    gap: 8rem;

    &__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5rem;
      color: white;

      .square {
        height: 8rem;
        width: 8em;
        border: 10px solid ${blue};
        margin-left: 3rem;
        margin-top: 10rem;
      }

      .episode {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 2em;

        h3 {
          letter-spacing: 0.1rem;
        }

        p {
          color: #c0c0c0;
          font-weight: 300;
          letter-spacing: 0.05rem;
          text-align: justify;
        }

        .image {
          max-height: 15rem;
          overflow: hidden;

          img {
            height: 15rem;
            transition: 0.5s ease-in-out;
            &:hover {
              transform: scale(1.2);
            }
          }
        }

        &-2,
        &-4,
        &-6 {
          .image {
            max-height: 25rem;
            max-width: 25rem;
            overflow: hidden;

            img {
              height: 25rem;
              width: 25rem;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0 5vw;

    .title {
      width: 100%;
      margin: 0 0 7vh 0;

      img {
        width: 100%;
      }
    }
    .episodes {
      gap: 2vh;

      &__grid {
        display: block;

        .episode {
          margin-bottom: 3vh;
          gap: 3vh;

          .image {
            img {
              width: 100% !important;
              height: 100% !important;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
`;

export default Episodes;
