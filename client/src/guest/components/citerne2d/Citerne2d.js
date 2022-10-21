import React, { useRef, useEffect } from 'react';
import { Stage } from 'react-konva';
import { getAltitude } from "./../../../service/StationS"
import { useParams } from 'react-router-dom';
import { useState } from "react";
import './style.css'

function Citerne2d() {
  const { latitude, longitude } = useParams();
  const [altitude, setAltitude] = useState();
  const canvas = useRef();
  let ctx = null;


  // initialize the canvas context
  useEffect(() => {
    //prendre altitude 

    const hamdleGetData = async () => {
      const x = await getAltitude(latitude, longitude);
      setAltitude(x.data)
    }
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    // get context of the canvas
    ctx = canvasEle.getContext("2d");


    //plateau
    const context = canvas.current.getContext("2d");
    const plateau = new Image();
    plateau.src =
      require("../../assets/imagesClient/plateau.png");
    plateau.onload = () => {
      context.drawImage(plateau, 500, 50, 500, 500);
    };

    //localisation
    const image2 = new Image();
    image2.src =
      require("../../assets/imagesClient/localisation.png");
    image2.onload = () => {
      context.drawImage(image2, 580, 100, 100, 100);
    };

    //reservoir.png
    const reservoir = new Image();
    reservoir.src =
      require("../../assets/imagesClient/reservoir.png");
    reservoir.onload = () => {
      context.drawImage(reservoir, 600, 190, 60, 130);
    };
    //text altitude 
    const unite = 50
    //let pied = altitude.data.results[0].elevation
    let pied = 50
    console.log("pied")
    console.log(pied);
    ctx.font = '40px serif';
    ctx.fillText(`Altitude : ${pied} ft ou ${pied * 0, 3048} m`, 10, 50);

    //triangle
    ctx.beginPath();
    ctx.moveTo(485, 180);
    ctx.lineTo(450, 250);
    ctx.lineTo(520, 250);
    ctx.fill();

    // the fill color
    context.fillStyle = "rgb(232, 73, 73)";
    context.fill();


  }, []);

  useEffect(() => {

    //altitude
    const r3Info = { x: 480, y: 250, w: 10, h: 300 };
    drawFillRect(r3Info, { backgroundColor: 'rgb(232, 73, 73)' });
    //pointille altitude
    const pointille = { x: 485, y: 180, w: 125, h: 5 };
    drawFillRect(pointille, { backgroundColor: 'black' });

    //mer
    const lamer = { x: 450, y: 500, w: 600, h: 50 };
    drawFillRect(lamer, { backgroundColor: 'rgb(99, 128, 191)' });

  }, []);

  // draw rectangle with background
  const drawFillRect = (info, style = {}) => {
    const { x, y, w, h } = info;
    const { backgroundColor = 'black' } = style;
    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(x, y, w, h);
  }

  return (
    <div className="App">
      <canvas ref={canvas}></canvas>
    </div>
  );
}

export default Citerne2d;