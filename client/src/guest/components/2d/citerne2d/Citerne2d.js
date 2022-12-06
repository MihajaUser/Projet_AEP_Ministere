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
    // equateur
    const equateur = { x: 400, y: 660, w: 650, h: 14 };
    drawFillRect(equateur, { backgroundColor: 'rgb(99, 128, 191)' });
    // greenwich
    const greenwich = { x: 1045, y: 55, w: 14, h: 619 };
    drawFillRect(greenwich, { backgroundColor: 'rgb(99, 128, 191)' });
    ctx.beginPath();
    //triangle altitude
    ctx.moveTo(485, 308);
    ctx.lineTo(465, 358);
    ctx.lineTo(505, 358);
    ctx.fill();
    //trifangle verticale
    ctx.moveTo(1052, 310);
    ctx.lineTo(1030, 360);
    ctx.lineTo(1075, 360);
    ctx.fill();
    //triangle horizontal
    ctx.moveTo(630, 145);
    ctx.lineTo(680, 120);
    ctx.lineTo(680, 170);
    ctx.fill();
    // the fill color
    context.fillStyle = "rgb(232, 73, 73)";
    context.fill();
    //bar altitude
    const altitude = { x: 480, y: 318, w: 10, h: 300 };
    drawFillRect(altitude, { backgroundColor: 'rgb(232, 73, 73)' });
    //bar verticale
    const barAltitude = { x: 1047, y: 360, w: 10, h: 300 };
    drawFillRect(barAltitude, { backgroundColor: 'rgb(232, 73, 73)' });
    //bar horizontal
    const barHorizontal = { x: 680, y: 140, w: 370, h: 10 };
    drawFillRect(barHorizontal, { backgroundColor: 'rgb(232, 73, 73)' });
    //pointille horizontal
    const pointille = { x: 485, y: 305, w: 570, h: 5 };
    drawFillRect(pointille, { backgroundColor: 'rgb(11, 238, 113)' });
    //pointille verticale
    const pointilleV = { x: 627, y: 145, w: 5, h: 110 };
    drawFillRect(pointilleV, { backgroundColor: 'rgb(11, 238, 113)' });
    //mer
    const lamer = { x: 450, y: 610, w: 595, h: 50 };
    drawFillRect(lamer, { backgroundColor: 'rgb(88, 229, 241)' });
    getAltitude(latitude, longitude).then(rep => {
      //text gauche
      setShow(false)
      console.log(rep.data.results[0].elevation);
      setAltitude(rep.data.results[0].elevation);
      const unite = 50
      let pied = rep.data.results[0].elevation;
      ctx.font = '25px serif';
      context.fillStyle = "rgb(11, 15, 88)";
      ctx.fillText(`Infrastructure : ${monImage.text}`, 100, 70);
      ctx.fillText(`longitude : ${latitude} °`, 100, 110);
      ctx.fillText(`latitude : ${longitude} °`, 100, 150);
      ctx.fillText(`Région : ${region}`, 100, 190);
      ctx.fillText(`Altitude : ${pied} m `, 100, 230);
      //text dessin
      context.fillStyle = "rgb(232, 73, 73)";
      ctx.fillText(`${pied} m`, 410, 470);
      ctx.fillText(`${latitude} °`, 730, 130);
      ctx.fillText(`${longitude} °`, 1070, 530);
      context.fillStyle = "rgb(99, 128, 191)";
      //triangle equateur
      ctx.moveTo(350, 665);
      ctx.lineTo(400, 615);
      ctx.lineTo(400, 715);
      ctx.fill();
      //triangle grenwich
      ctx.moveTo(1052, 45);
      ctx.lineTo(1002, 100);
      ctx.lineTo(1102, 100);
      ctx.fill();
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
    if (infra_eau === "reservoir") { return { "type": "reservoir", "text": "Reservoir", "x": 600, "y": 300, "largeur": 60, "hauteur": 130 } }
    if (infra_eau === "aepp") { return { "type": "station", "text": "Adduction d’Eau Potable par Pompage(AEPP)", "x": 500, "y": 190, "largeur": 250, "hauteur": 300 } }
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