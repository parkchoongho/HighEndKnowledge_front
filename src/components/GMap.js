import React from "react";
// import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import { GMapKey } from "../common/GMapConfig";

export default function GMap(quiz) {
  const styles = {
    map: {
      width: "100%",
      height: "400px",
      backgroundColor: "grey"
    }
  };

  const quizInfo = quiz.quiz;

  //   if (quizInfo[0]) {
  //     quizInfo.map((quiz, index) => {
  //       console.log(`${index}: ${quiz.lat.toFixed(4)}`);
  //       console.log(quiz);
  //     });
  //   }

  const MapWithAMarker = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: 37.5012, lng: 127.0395 }} // 37.501249, 127.039569
      >
        <Marker position={{ lat: 37.5012, lng: 127.0395 }} />

        {/* {quizInfo &&
          quizInfo.map(quiz => (
            <Marker
              position={{ lat: quiz.lat.toFixed(4), lng: quiz.lon.toFixed(4) }}
            />
          ))} */}
      </GoogleMap>
    ))
  );
  return (
    <>
      {/* <MapWithAMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GMapKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      /> */}
      <h2>지도자리</h2>
    </>
  );
}
