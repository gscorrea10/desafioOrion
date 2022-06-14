import {  CircleF, DrawingManagerF, GoogleMap, MarkerF, PolygonF, PolylineF, RectangleF, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

//map options
const containerStyle = {
  width: '100%',
  height: '705px',
  position: 'absolute',
  bottom: '0px',
  right: '0px'
};

const center = {
  lat: 44.5452,
  lng: -78.5389
};

// ----------------------------------//

const libraries = ['drawing'];

const Map = () => {
  const [appointments, setAppointments] = React.useState(() =>{
    const storagedAppointments = localStorage.getItem('appointments');

    if (storagedAppointments){
      return JSON.parse(storagedAppointments);
    }
    return{};
  });

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    libraries,
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  }); 


  

  function handleSaveRectangle(rectangle){
    const newRectangle = rectangle.getBounds();
    const rectangles = 'rectangles' in appointments
    ? [...appointments.rectangles, newRectangle]
    : [newRectangle];
    
    const updatedAppointments = {
      ...appointments,
      rectangles
    };

    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  }

  function handleSaveCircle(circle){
    const newCircle = {
      center: circle.getCenter(),
      radius: circle.getRadius()
    };
    const circles = 'circles' in appointments
    ?[...appointments.circles, newCircle]
    :[newCircle];

    const updatedAppointments = {
      ...appointments,
      circles
    };

    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  }

  function handleSaveMarker(marker) {
    const newMarker = marker.getPosition();
    const markers = 'markers' in appointments
    ?[...appointments.markers, newMarker]
    :[newMarker];

    const updatedAppointments = {
      ...appointments,
      markers
    };

    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));


  }

  function handleSavePolyline(polyline){
    const newPolyline = polyline.getPath().Qd;

    const polylines = 'polylines' in appointments
    ?[...appointments.polylines, newPolyline]
    :[newPolyline];

    const updatedAppointments = {
      ...appointments,
      polylines
    };
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

  }

  function handleSavePolygon(polygon){
    const newPolygon = polygon.getPaths().Qd.map(data => data.Qd).reduce((_, cur) => cur, {})
    const polygons = 'polygons' in appointments
    ?[...appointments.polygons, newPolygon]
    :[newPolygon];

    const updatedAppointments = {
      ...appointments,
      polygons
    };

    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

  }
    

  if (loadError) {
    return <div>Cannot loading your map</div>;
  }

  return isLoaded ? (
    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        options={{
          //streetViewControl: false,
        }}
      >
        <DrawingManagerF 
        onRectangleComplete ={handleSaveRectangle}
        onCircleComplete={handleSaveCircle}
        onMarkerComplete={handleSaveMarker}
        onPolylineComplete={handleSavePolyline}
        onPolygonComplete={handleSavePolygon}
        /> 
 {appointments?.rectangles?.map((bounds, index) => <RectangleF key={index} bounds={bounds} />)}
 {appointments?.circles?.map((circle, index) => <CircleF key={index} center={circle.center} radius={circle.radius} />)}
 {appointments?.markers?.map((position, index) => <MarkerF key={index} position={position} />)}
 {appointments?.polylines?.map((path, index) => <PolylineF key={index} path={path} />)}
 {appointments?.polygons?.map((path, index) => <PolygonF key={index} path={path} />)}
 
      </GoogleMap>
      
      
  ) : <></>
      }
  export default Map;