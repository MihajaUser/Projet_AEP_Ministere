import React, { useRef, useEffect } from 'react';
import { getAltitude } from "../../../../service/StationS"
import { useParams } from 'react-router-dom';
import { useState } from "react";
import './Citerne2d.css'
import Navigation from './Navigation'
import Loading from '../../../../laoding/Loading';

function Citerne2d() {
  const { latitude, longitude, region, point_eau, infra_eau } = useParams();
  const [altitude, setAltitude] = useState(0);
  const [show, setShow] = useState(true);
  const canvas = useRef();
  let ctx = null;
  useEffect(() => {
    drawPicture();
    appearLoading();
  }, [show]);
  const drawPicture = () => {  // initialize the canvas context
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;
    // get context of the canvas
    ctx = canvasEle.getContext("2d");
    const context = canvas.current.getContext("2d");
    //plateau
    const plateau = new Image();
    plateau.src =
      require("../../../assets/imagesClient/plateau.png");
    plateau.onload = () => {
      context.drawImage(plateau, 500, 50, 500, 500);
    };
    //localisation
    const image2 = new Image();
    image2.src =
      require("../../../assets/imagesClient/localisation.png");
    image2.onload = () => {
      context.drawImage(image2, 580, 100, 100, 100);
    };
    //reservoir.png
    let monImage = imageValue();
    const reservoir = new Image();
    reservoir.src =
      require("../../../assets/imagesClient/" + monImage.type + ".png");
    reservoir.onload = () => {
      context.drawImage(reservoir, monImage.x, monImage.y, monImage.largeur, monImage.hauteur);
    };
    //triangle
    ctx.beginPath();
    ctx.moveTo(485, 300);
    ctx.lineTo(450, 350);
    ctx.lineTo(520, 350);
    ctx.fill();
    // the fill color
    context.fillStyle = "rgb(232, 73, 73)";
    context.fill();
    //altitude
    const r3Info = { x: 480, y: 310, w: 10, h: 200 };
    drawFillRect(r3Info, { backgroundColor: 'rgb(232, 73, 73)' });
    //pointille altitude
    const pointille = { x: 487, y: 300, w: 135, h: 5 };
    drawFillRect(pointille, { backgroundColor: 'rgb(11, 238, 113)' });
    //mer
    const lamer = { x: 450, y: 500, w: 600, h: 50 };
    drawFillRect(lamer, { backgroundColor: 'rgb(99, 128, 191)' });
    getAltitude(latitude, longitude).then(rep => {
      //text altitude
      setShow(false)
      console.log(rep.data.results[0].elevation);
      setAltitude(rep.data.results[0].elevation);
      const unite = 50
      let pied = rep.data.results[0].elevation;
      ctx.font = '30px serif';
      context.fillStyle = "rgb(11, 15, 88)";
      ctx.fillText(`Région : ${region}`, 10, 50);
      ctx.fillText(`Altitude : ${pied} m   `, 10, 90);
      ctx.fillText(`Point eau  : ${point_eau}`, 10, 130);
      ctx.fillText(`Infrastructure : ${infra_eau}`, 10, 170);

    }).catch((err) => {
      console.log("mon error " + err);
    });
  }
  const drawFillRect = (info, style = {}) => {
    const { x, y, w, h } = info;
    const { backgroundColor = 'black' } = style;
    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(x, y, w, h);
  }

  function linkValue() {
    if (infra_eau === "reservoir") { return "/citerne3d" }
    if (infra_eau === "aepp") { return "/station3d" }
  }

  function imageValue() {
    if (infra_eau === "reservoir") { return { "type": "reservoir", "x": 190, "y": 300, "largeur": 60, "hauteur": 130 } }
    if (infra_eau === "aepp") { return { "type": "station", "x": 500, "y": 80, "largeur": 250, "hauteur": 300 } }
  }
  function appearLoading() {
    if (show) {
      return <Loading />
    }
  }
  return (
    <div className="App">
      <canvas className="MyCanvas" ref={canvas}></canvas>
      <Navigation linkValue={linkValue()} />
      {appearLoading()}
    </div>
  );
}
export default Citerne2d;