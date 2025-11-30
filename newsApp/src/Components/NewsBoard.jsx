import React from "react";
import NewsItems from "./NewsItems";

function NewsBoard() {
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge text-bg-danger">News</span>
      </h2>
      <NewsItems
        description="The tropical storm Cyclone Ditwah is approaching the Tamil Nadu and Puducherry coastline, prompting large-scale"
        title="Cyclone Ditwah nears Tamil Nadu–Puducherry coast"
      />
      <NewsItems
        description="A roundup of major developments for Dec 1, 2025 — from public-health and safety (cyclone warnings, air-quality alerts) to national-level policy and events."
        title="Today’s School Assembly Headlines"
      />
      <NewsItems
        description="Delhi’s AQI crossed 400 today, causing health alerts and urging people to limit outdoor activities."
        title="Delhi Air Quality Worsens"
      />
      <NewsItems
        description="Despite global uncertainty, stock markets continued to rise, led by gains in major tech companies."
        title="Global Markets Stay Strong"
      />
        <NewsItems
        description="A roundup of major developments for Dec 1, 2025 — from public-health and safety (cyclone warnings, air-quality alerts) to national-level policy and events."
        title="Today’s School Assembly Headlines"
      />
      <NewsItems
        description="Despite global uncertainty, stock markets continued to rise, led by gains in major tech companies."
        title="Global Markets Stay Strong"
      />
      <NewsItems
        description="Strong winds and heavy rain warnings issued as Cyclone Ditwah moves toward the Tamil Nadu shoreline."
        title="Cyclone Approaches TN Coast"
      />
      <NewsItems
        description="Strong winds and heavy rain warnings issued as Cyclone Ditwah moves toward the Tamil Nadu shoreline."
        title="Cyclone Approaches TN Coast"
      />
      <NewsItems
        description="Despite global uncertainty, stock markets continued to rise, led by gains in major tech companies."
        title="Global Markets Stay Strong"
      />
      <NewsItems
        description="Strong winds and heavy rain warnings issued as Cyclone Ditwah moves toward the Tamil Nadu shoreline."
        title="Cyclone Approaches TN Coast"
      />
      <NewsItems
        description="Despite global uncertainty, stock markets continued to rise, led by gains in major tech companies."
        title="Global Markets Stay Strong"
      />
    </div>
  );
}

export default NewsBoard;
