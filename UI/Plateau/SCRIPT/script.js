
        // This function will be called once the page loads completely
        function pageLoaded(){
            // capture l'objet canvas
            var canvas = document.getElementById("testcanvas");
            //recupere le context 2d pour l'objet canvas
            var context = canvas.getContext("2d");
            //recupere l'image
            //var image = new Image();
                //image.src = "background.jpg";
           //image.onload = function(){
               //cxt = document.getElementById("canvas");
               //context.drawImage(image,180,125,580,95);
               //context.rotate(Math.PI / 3);
               //context.drawImage(image,180,220,350,229);
               //context.drawImage(image, 0, 0, 60, 50, 180, 125, 580, 375);375

           // };
            //dessine l'image
            //dessine un rectangle solide
            //context.fillRect(200, 10, 100, 100);
            // dessine un cercle 
           
            // dessine un cercle de (500, 50) avec un radian de 30 de 0 à 360 dégrés, le sens inverse d'une montre
            // 2*PI radians = 360 dégrés
            //1
            context.fillStyle = "yellow";

            //context.clear();
            context.beginPath();
            context.arc(700, 55, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("paiement", 669, 55);
            context.closePath();
          
            //2
            context.fillStyle = "green";
            context.beginPath();
            context.arc(590, 55, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("opportunité", 555, 55);
            context.closePath();
            //3
            context.fillStyle = "deepskyblue";
            context.beginPath();
            context.arc(480, 55, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("charité", 455, 55);
            context.closePath();
            //4
            context.fillStyle = "green";
            context.beginPath();
            context.arc(370, 55, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("opportunité", 335, 55);
            context.closePath();
            //5
            context.fillStyle = "gray";
            context.beginPath();
            context.arc(260, 55, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("dettes", 240, 55);
            context.closePath();
            //6
            context.fillStyle = "green";
            context.beginPath();
            context.arc(155, 55, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("opportunité", 120, 55);
            context.closePath();
            //7
            context.fillStyle = "gray";
            context.beginPath();
            context.arc(60, 100, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("dettes", 40, 100);
            context.closePath();
            //8
            context.fillStyle = "green";
            context.beginPath();
            context.arc(55, 205, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("opportunité", 20, 205);
            context.closePath();
            //9
            context.fillStyle = "blue";
            context.beginPath();
            context.arc(100, 300, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("offre", 85, 300);
            context.closePath();
            //10
            context.fillStyle = "green";
            context.beginPath();
            context.arc(145, 395, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("opportunité", 110, 395);
            context.closePath();
            //11
            context.fillStyle = "yellow";
            context.beginPath();
            context.arc(190, 490, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("paiement", 160, 490);
            context.closePath();
            //12
            context.fillStyle = "green";
            context.beginPath();
            context.arc(265, 565, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("opportunité", 230, 565);
            context.closePath();
            //13
            context.fillStyle = "gray";
            context.beginPath();
            context.arc(369, 565, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("dettes", 349, 565);
            context.closePath();
            //14
            context.fillStyle = "green";
            context.beginPath();
            context.arc(473, 565, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("opportunité", 438, 565);
            context.closePath();
            //15
            context.fillStyle = "red"
            context.beginPath();
            context.arc(577, 565, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("perte", 560, 565);
            context.closePath();
            //16
            context.fillStyle = "green";
            context.beginPath();
            context.arc(650, 490, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.fillStyle = "green";
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("opportunité", 615, 490);
            context.closePath();
            //17
            context.fillStyle="orange";
            context.beginPath();
            context.arc(710, 405, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("enfant", 690, 405);
            context.closePath();
            //18
            context.fillStyle = "green";
            context.beginPath();
            context.arc(770, 320, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("opportunité", 735, 320);
            context.closePath();
            //19
            context.fillStyle = "blue";
            context.beginPath();
            context.arc(830, 238, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("offre", 815, 238);
            context.closePath();
            //20
            context.fillStyle = "green";
            context.beginPath();
            context.arc(835, 130, 50, 0, 2 * Math.PI, true);
            context.fill();
            context.font = "12pt Arial";
            context.fillStyle = "white";
            context.fillText("opportunité", 800, 130);
            context.closePath();
            //dessine la ligne de depart
            context.beginPath();
            context.moveTo(800, 20); // Start drawing at 140, 160
            context.lineTo(710, 125);
            context.closePath();
            context.stroke();
            context.beginPath();
            context.moveTo(860, 20); // Start drawing at 140, 160
            context.lineTo(760, 138);
            context.closePath();
            context.stroke();
            //dessine la ligne horizontale interne haute
            context.beginPath();
            context.moveTo(710, 125);
            context.lineTo(180, 125);
            context.closePath();
            context.stroke();

            //desine la ligne verticale interne gauche
            context.beginPath();
            context.moveTo(180, 125);
            context.lineTo(180, 220);
            context.closePath();
            context.stroke();
            //dessine la ligne oblique interne gauche
            context.beginPath();
            context.moveTo(180, 220);
            context.lineTo(290, 450);
            context.closePath();
            context.stroke();
            //dessine la sous ligne interne oblique gauche
            context.beginPath();
            context.moveTo(290, 450);
            context.lineTo(380, 500);
            context.closePath();
            context.stroke();
            //dessine la ligne horizantale interne basse
            context.beginPath();
            context.moveTo(380, 500);
            context.lineTo(480, 500);
            context.closePath();
            context.stroke();
            //dessine la sous ligne oblique droite
            context.beginPath();
            context.moveTo(480, 500);
            context.lineTo(580, 450);
            context.closePath();
            context.stroke();
            //dessine la ligne oblique droite
            context.beginPath();
            context.moveTo(580, 450);
            context.lineTo(760, 210);
            context.closePath();
            context.stroke();
            //dessine la ligne verticale interne droite
            context.beginPath();
            context.moveTo(760, 210);
            context.lineTo(760, 138);
            context.closePath();
            context.stroke();   
            


            
        }
