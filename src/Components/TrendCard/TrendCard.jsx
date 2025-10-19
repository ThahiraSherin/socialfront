import React from 'react';
import { TrendData } from '../Data/TrendData';
import { PostsData } from '../Data/PostsData';
import './TrendCard.css';

const TrendCard = () => {
  return (
    <div className="TrendCard card">
      <h3>Trending for you</h3>

      <div className="trendsList">
        {TrendData.map((trend, index) => {
          // pick an image from PostsData by index (alternate)
          const thumb = PostsData[index % PostsData.length]?.image;
          return (
            <div className="trend" key={index}>
              <div className="trendRow">
                {thumb && <img src={thumb} alt={trend.name} className="trendThumb" />}
                <div className="trendText">
                  <span className="trendName">#{trend.name}</span>
                  <span className="trendMeta">{trend.shares}k Shares</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendCard;
