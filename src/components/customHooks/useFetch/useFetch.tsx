import React, { useState, useEffect } from "react";

// export interface spacex {
//   details: string;
//   flight_number: number;
//   is_tentative: false;
//   launch_date_local: string;
//   launch_date_unit: number;
//   launch_site: {
//     site_id: string;
//     site_name: string;
//     site_name_long: string;
//   };
//   launch_success: boolean;
//   launch_window: number;
//   launch_year: string;
//   links: {
//     flickr_images: [];
//     mission_patch: string;
//     mission_patch_small: string;
//     reddit_campaign: string;
//     youtube_id: string;
//     wikipedia: string;
//     video_link: string;
//     reddit_recovery: string;
//     reddit_media: string;
//     reddit_launch: string;
//     presskit: string;
//   };
//   mission_id: [];
//   mission_name: string;
//   rocket: {};
// }

export function useFetch() {
  const [data, setData] = useState(null);

  const setSpacexData = (newData: any) => setData(newData);

  const getData = () => {
    fetch("https://api.spacexdata.com/v3/launches/latest")
      .then(res => res.json())
      .then(data => {
        let tempArray: any = [];
        data.links["flickr_images"].map((ele: string, index: number) => {
          tempArray.push(ele);
        });
        setSpacexData(tempArray);
        return tempArray; // needed for testing...
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
}
