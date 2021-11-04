import React from "react";

export default function ImageComponent ({url}){
  return(
    <>
      <img src={url} height="100px" width="150px"/>
    </>
  )
}