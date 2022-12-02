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
      context.drawImage(plateau, 500, 160, 500, 500);
    };
    //localisation
    const image2 = new Image();
    image2.src =
      require("../../../assets/imagesClient/localisation.png");
    image2.onload = () => {
      context.drawImage(image2, 580, 210, 100, 100);
    };
    //reservoir.png
    let monImage = imageValue();
    const reservoir = new Image();
    reservoir.src =
      require("../../../assets/imagesClient/" + monImage.type + ".png");
    reservoir.onload = () => {
      context.drawImage(reservoir, monImage.x, monImage.y, monImage.largeur, monImage.hauteur);
    };
    //trifangle verticale
    ctx.beginPath();
    ctx.moveTo(1045, 310);
    ctx.lineTo(1010, 360);
    ctx.lineTo(1080, 360);
    ctx.fill();
    //triangle horizontal
    ctx.moveTo(630, 135);
    ctx.lineTo(680, 90);
    ctx.lineTo(680, 180);
    ctx.fill();
    // the fill color
    context.fillStyle = "rgb(232, 73, 73)";
    context.fill();
    //bar verticale
    const barAltitude = { x: 1040, y: 360, w: 10, h: 250 };
    drawFillRect(barAltitude, { backgroundColor: 'rgb(232, 73, 73)' });
    //bar horizontal
    const barHorizontal = { x: 680, y: 130, w: 370, h: 10 };
    drawFillRect(barHorizontal, { backgroundColor: 'rgb(232, 73, 73)' });
    //pointille horizontal
    const pointille = { x: 637, y: 305, w: 410, h: 5 };
    drawFillRect(pointille, { backgroundColor: 'rgb(11, 238, 113)' });
    //pointille verticale
    const pointilleV = { x: 627, y: 135, w: 5, h: 120 };
    drawFillRect(pointilleV, { backgroundColor: 'rgb(11, 238, 113)' });
    //pointille noir verticale
    // const pointillevN = { x: 1040, y: 135, w: 10, h: 175 };
    // drawFillRect(pointillevN, { backgroundColor: 'rgb(1, 1, 3)' });
    //pointille noir horizontal
    //mer
    const lamer = { x: 450, y: 610, w: 600, h: 50 };
    drawFillRect(lamer, { backgroundColor: 'rgb(99, 128, 191)' });
    getAltitude(latitude, longitude).then(rep => {
      //text gauche
      setShow(false)
      console.log(rep.data.results[0].elevation);
      setAltitude(rep.data.results[0].elevation);
      const unite = 50
      let pied = rep.data.results[0].elevation;
      ctx.font = '30px serif';
      context.fillStyle = "rgb(11, 15, 88)";
      ctx.fillText(`Région : ${region}`, 100, 110);
      ctx.fillText(`Point eau  : ${point_eau}`, 100, 150);
      ctx.fillText(`Infrastructure : ${infra_eau}`, 100, 190);
      ctx.fillText(`Altitude : ${pied} m `, 100, 230);
      ctx.fillText(`latitude : ${latitude}`, 100, 270);
      ctx.fillText(`longitude : ${longitude}`, 100, 310);
      //text dessin
      context.fillStyle = "rgb(232, 73, 73)";
      ctx.fillText(`${latitude}`, 730, 120);
      ctx.fillText(`${longitude}`, 1070, 530);
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
    if (infra_eau === "fpmh") { return "/citerne3d" }
    if (infra_eau === "aepg") { return "/station3d" }
  }

  function imageValue() {
    if (infra_eau === "fpmh") { return { "type": "reservoir", "x": 600, "y": 300, "largeur": 60, "hauteur": 130 } }
    if (infra_eau === "aepg") { return { "type": "station", "x": 500, "y": 190, "largeur": 250, "hauteur": 300 } }
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