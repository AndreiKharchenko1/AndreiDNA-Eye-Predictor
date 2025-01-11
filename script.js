let hairblack = 50; let hairblond = 60; let hairred = 19; let hairbrown = 50;

let pale = 1;
let black = 1;
let intermediate = 1;
 
 let blue = 1; 
 let blue_amber = 1;
 let green = 1;
 let hazel = 1;
 let l_brown = 1;
 let d_brown = 1;
 let userName_a = "";
 
 let NOSHACOTblue = 1;
 let NOSHACOTblue_amber = 1;
 let NOSHACOTgreen = 1;
 let NOSHACOThazel = 1;
 let NOSHACOTbrown = 1;
 let NOSHACOTd_brown = 1;
let snp;
let blue_amber_url = "https://i.imgur.com/R56arxa.png";
let blue_url = "https://i.imgur.com/PYD7XKl.png";
let blue_green_url = "https://i.imgur.com/p5RhMxm.png";
let black_url ="https://i.imgur.com/yxhHL6O.png";
let yellow_green_url = "https://i.imgur.com/bejBZJD.png";
let green_url = "https://i.imgur.com/RU8Qaf3.png";
let grey_url = "https://i.imgur.com/Ib5jzTz.png";
let hazel_url = "https://i.imgur.com/KXxTMAp.png";
let light_brown_url ="https://i.imgur.com/yoekhOM.png";
let medium_brown_url = "https://i.imgur.com/L9gxPMR.png";
let light_hazel_url = "https://i.imgur.com/liJHqj7.png";
let sage_green_url = "https://i.imgur.com/hKfKNS7.png";

let blue_w_grey_url = "https://i.imgur.com/iPSx2re.png";
let light_green_url = "https://i.imgur.com/S10vtUZ.png";
let Green_yellow_url = "https://i.imgur.com/Msn3BKv.png";
function generateClosest(urls, colors, result) {
    let var_1 = Infinity;  // Set to Infinity for initial comparison
    let var_2 = Infinity;
    let var_3 = Infinity;
  
    let closestcolor = "";
    let secondclosestcolor = "";
    let thirdclosestcolor = "";
  
    for (let color = 0; color < colors.length; color++) {
      let euclidean_distance = 0;
  
      // Calculate the Euclidean distance between result and the current color
      for (let i = 0; i < 6; i++) {
        euclidean_distance += (colors[color][i] - result[i]) * (colors[color][i] - result[i]);
      }
  
      // Check if the current color is the closest, second closest, or third closest
      if (euclidean_distance < var_1) {
        var_3 = var_2;
        thirdclosestcolor = secondclosestcolor;
        
        var_2 = var_1;
        secondclosestcolor = closestcolor;
        
        var_1 = euclidean_distance;
        closestcolor = urls[color];
      } else if (euclidean_distance < var_2) {
        var_3 = var_2;
        thirdclosestcolor = secondclosestcolor;
  
        var_2 = euclidean_distance;
        secondclosestcolor = urls[color];
      } else if (euclidean_distance < var_3) {
        var_3 = euclidean_distance;
        thirdclosestcolor = urls[color];
      }
    }
    var_1 = Math.sqrt(var_1)/10;
    var_2 = Math.sqrt(var_2)/10;
    var_3 = Math.sqrt(var_3)/10;
    updateColorImages(closestcolor, secondclosestcolor, thirdclosestcolor, var_1, var_2, var_3);
    console.log(closestcolor, var_1, secondclosestcolor, var_2, thirdclosestcolor, var_3);

    let doub1 = Infinity;
    let doub2 = Infinity;
    let doub3 = Infinity;
    let src_1 = "";
    let src_2 = "";
    let src_3 = "";
    let src_1_1 = "";
    let src_2_1 = "";
    let src_3_1 = "";
   for( let color = 0; color < colors.length; color++) {
    for(let i = 0; i < colors.length; i++){
        let doub = [];
        for(j = 0; j<6; j++){
           doub[j] = 0.5*colors[color][j] + 0.5*colors[i][j];
        }
        let euclidean_distance = 0;
        for(let j = 0; j<6; j++){
            euclidean_distance += (doub[j] - result[j])*(doub[j] - result[j]);
        }
        if(euclidean_distance < doub1){
            doub1 = euclidean_distance;
            src_1 = urls[color];
            src_1_1 = urls[i];
        } else if(euclidean_distance < doub2){
            doub2 = euclidean_distance;
            src_2 = urls[color];
            src_2_1 = urls[i];
        } else if(euclidean_distance < doub3){
            doub3 = euclidean_distance;
            src_3 = urls[color];
            src_3_1 = urls[i];
        }
    }
  }
  let checkedPairs = new Set(); // To track processed combinations

  for( let color = 0; color < colors.length; color++) {
    for(let i = 0; i < colors.length; i++){
        let doub = [];
        for(j = 0; j<6; j++){
           doub[j] = 0.5*colors[color][j] + 0.5*colors[i][j];
        }
        let euclidean_distance = 0;
        for(let j = 0; j<6; j++){
            euclidean_distance += (doub[j] - result[j])*(doub[j] - result[j]);
        }
        if(euclidean_distance <= doub1){
            doub1 = euclidean_distance;
            src_1 = urls[color];
            src_1_1 = urls[i];
        } else if(euclidean_distance <= doub2){
            doub2 = euclidean_distance;
            src_2 = urls[color];
            src_2_1 = urls[i];
        } else if(euclidean_distance <= doub3){
            doub3 = euclidean_distance;
            src_3 = urls[color];
            src_3_1 = urls[i];
        }
    }
  }
  for( let color = colors.length - 1; color =0; color--) {
    for(let i = colors.length-1; i =0; i--){
        let doub = [];
        for(j = 0; j<6; j++){
           doub[j] = 0.5*colors[color][j] + 0.5*colors[i][j];
        }
        let euclidean_distance = 0;
        for(let j = 0; j<6; j++){
            euclidean_distance += (doub[j] - result[j])*(doub[j] - result[j]);
        }
        if(euclidean_distance <= doub1){
            doub1 = euclidean_distance;
            src_1 = urls[color];
            src_1_1 = urls[i];
        } else if(euclidean_distance <= doub2){
            doub2 = euclidean_distance;
            src_2 = urls[color];
            src_2_1 = urls[i];
        } else if(euclidean_distance <= doub3){
            doub3 = euclidean_distance;
            src_3 = urls[color];
            src_3_1 = urls[i];
        }
    }
  }
  update2Way(src_1, src_1_1, src_2, src_2_1, src_3, src_3_1, var_1, var_2, var_3);
}
  function updateColorImages(closestColorUrl, secondClosestColorUrl, thirdClosestColorUrl, D1, D2, D3) {
    // Update the src attributes of the image elements
    document.getElementById("closestColor").src = closestColorUrl;
    document.getElementById("secondClosestColor").src = secondClosestColorUrl;
    document.getElementById("thirdClosestColor").src = thirdClosestColorUrl;
    document.getElementById("D1").textContent = D1;
  document.getElementById("D2").textContent = D2;
  document.getElementById("D3").textContent = D3;
  }
function update2Way(URL1_1, URL1_2, URL2_1, URL2_2, URL3_1, URL3_2, D1, D2, D3) {
    document.getElementById("closestColor1_1").src = URL1_1;
    document.getElementById("closestColor1_2").src = URL1_2;
  
  
    // Update the distance values
    document.getElementById("D1_TWO").textContent = D1.toFixed(3);
    
    console.log(URL1_1, URL1_2, D1);

  }
let url_hashmap = [blue_amber_url,blue_url,blue_green_url,black_url,yellow_green_url,green_url,grey_url,hazel_url,light_brown_url,medium_brown_url,light_hazel_url,sage_green_url, blue_w_grey_url, light_green_url,Green_yellow_url]; 
//Blue - Blueamber - Green - Hazel - Light Brown - Dark Brown
let hashMAP_colors = [
    [25,40,20,10,5,0],
    [45,25,25,5,0,0],
    [30,40,20,10,0,0],
    [0,0,0,5,40,55],
    [10,20,30,35,5,0],
    [20,20,40,15,5,0],
    [60,10,30,0,0,0],
    [5,15,15,50,15,0],
    [5,10,10,30,30,15],
    [0,10,5,30,45,10],
    [5,25,20,45,5,0],
    [15,10,50,20,5,0],
    [35,25,30,10,0,0],
    [20,40,30,10,0,0],
    [15,30,35,20,0,0]


]
 document.getElementById("file-input").addEventListener("change", handleFileUpload);
 // Define images and opacities globally
 // Handle file upload
 function handleFileUpload(event) {
    hairblack = 50; let hairblond = 60; let hairred = 19; let hairbrown = 50;
 pale = 1;
 black = 1;
 intermediate = 1;
 snp = 0;
  blue = 1; 
  blue_amber = 1;
  green = 1;
  hazel = 1;
  l_brown = 1;
  d_brown = 1;
  userName_a = "";
 
  NOSHACOTblue = 1;
  NOSHACOTblue_amber = 1;
  NOSHACOTgreen = 1;
  NOSHACOThazel = 1;
  NOSHACOTbrown = 1;
  NOSHACOTd_brown = 1;
   const file = event.target.files[0];
 
   if (!file) {
     alert("No file selected!");
     return;
   }
 
   const reader = new FileReader();
   reader.onload = function (e) {
     const content = e.target.result;
     const rsCount = countRSInstances(content);
 
     determineGenotype(content);
 
     // Calculate results and update UI
     total = (blue + blue_amber + green + hazel + l_brown + d_brown) / 100;
     BLUE = blue / total;
     BLUE_AMB = blue_amber / total;
     GREEN = green / total;
     HAZEL = hazel / total;
     L_BROWN = l_brown / total;
     D_BROWN = d_brown / total;
 
     totalmerge = (BLUE + BLUE_AMB + GREEN + HAZEL + L_BROWN + D_BROWN) / 100;
 
     resultBLUE = BLUE / totalmerge;
     resultBLUE_AMB = BLUE_AMB / totalmerge;
     resultGREEN = GREEN / totalmerge;
     resultHAZEL = HAZEL / totalmerge;
     resultL_BROWN = L_BROWN / totalmerge;
     resultD_BROWN = D_BROWN / totalmerge;
 
     let opacities = [
       resultBLUE,
       resultBLUE_AMB,
       resultGREEN,
       resultHAZEL,
       resultL_BROWN,
       resultD_BROWN,
     ];
 
     // Update the displayed results
     document.getElementById("count").textContent = rsCount;
     document.getElementById("result").classList.remove("hidden");
     document.getElementById("blue").textContent = resultBLUE.toFixed(3);
     document.getElementById("BluewAmber").textContent = resultBLUE_AMB.toFixed(3);
     document.getElementById("green").textContent = resultGREEN.toFixed(3);
     document.getElementById("Hazel").textContent = resultHAZEL.toFixed(3);
     document.getElementById("Brown").textContent = resultL_BROWN.toFixed(3);
     document.getElementById("darkbrown").textContent = resultD_BROWN.toFixed(3);
     generateClosest(url_hashmap, hashMAP_colors, [resultBLUE, resultBLUE_AMB, resultGREEN, resultHAZEL, resultL_BROWN, resultD_BROWN]);
   };
   
   reader.readAsText(file);
 }
 
 // Load images and initialize sliders
 
function determineGenotype(genomeData) {
  opacities = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
  const lines = genomeData.split('\n');
  for (const line of lines) { 
    if (line.includes("rs1126809") && (line.includes('rs1126809"') || line.includes("rs1126809,") || line.includes("rs1126809	"))) {
      if (line.includes("AA") || line.includes("A	A")) {
          NOSHACOTblue_amber = NOSHACOTblue_amber * 0.21; NOSHACOTblue = NOSHACOTblue * 0.29; NOSHACOTbrown = NOSHACOTbrown * 0.18;
          NOSHACOTd_brown = NOSHACOTd_brown * 0.09; NOSHACOThazel = NOSHACOThazel * 0.21; NOSHACOTgreen = NOSHACOTgreen * 0.17;
      } else if (line.includes("AG") || line.includes("A	G") || line.includes("GA") || line.includes("G	A")) {
          NOSHACOTblue_amber = NOSHACOTblue_amber * 0.29; NOSHACOTblue = NOSHACOTblue * 0.58; NOSHACOTbrown = NOSHACOTbrown * 0.36;
          NOSHACOTd_brown = NOSHACOTd_brown * 0.18; NOSHACOThazel = NOSHACOThazel * 0.33; NOSHACOTgreen = NOSHACOTgreen * 0.33;
      } else if (line.includes("GG") || line.includes("G	G")) {
          NOSHACOTblue_amber = NOSHACOTblue_amber * 0.79; NOSHACOTblue = NOSHACOTblue * 0.71; NOSHACOTbrown = NOSHACOTbrown * 0.82;
          NOSHACOTd_brown = NOSHACOTd_brown * 0.91; NOSHACOThazel = NOSHACOThazel * 0.79; NOSHACOTgreen = NOSHACOTgreen * 0.83;

      }
  }
  if (line.includes("rs8003333") && (line.includes('rs8003333"') || line.includes("rs8003333,") || line.includes("rs8003333	"))) {
    if (line.includes("AA") || line.includes("A	A")) {
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.77; NOSHACOTblue = NOSHACOTblue * 0.88; NOSHACOTbrown = NOSHACOTbrown * 0.81;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.81; NOSHACOThazel = NOSHACOThazel * 0.79; NOSHACOTgreen = NOSHACOTgreen * 0.82;
        
    } else if (line.includes("AG") || line.includes("A	G") || line.includes("GA") || line.includes("G	A")) {
       
    } else if (line.includes("GG") || line.includes("G	G")) {
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.23; NOSHACOTblue = NOSHACOTblue * 0.12; NOSHACOTbrown = NOSHACOTbrown * 0.19;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.19; NOSHACOThazel = NOSHACOThazel * 0.21; NOSHACOTgreen = NOSHACOTgreen * 0.18;
    }
}
if (line.includes("rs2671422") && (line.includes('rs2671422"') || line.includes("rs2671422,") || line.includes("rs2671422	"))) {
  if (line.includes("AA") || line.includes("A	A")) {
      NOSHACOTblue_amber = NOSHACOTblue_amber * 0.14; NOSHACOTblue = NOSHACOTblue * 0.14; NOSHACOTbrown = NOSHACOTbrown * 0.16;
      NOSHACOTd_brown = NOSHACOTd_brown * 0.27; NOSHACOThazel = NOSHACOThazel * 0.16; NOSHACOTgreen = NOSHACOTgreen * 0.12;
      
  } else if (line.includes("AG") || line.includes("A	G") || line.includes("GA") || line.includes("G	A")) {
     
  } else if (line.includes("GG") || line.includes("G	G")) {
      NOSHACOTblue_amber = NOSHACOTblue_amber * 0.86; NOSHACOTblue = NOSHACOTblue * 0.86; NOSHACOTbrown = NOSHACOTbrown * 0.84;
      NOSHACOTd_brown = NOSHACOTd_brown * 0.73; NOSHACOThazel = NOSHACOThazel * 0.84; NOSHACOTgreen = NOSHACOTgreen * 0.88;
  }
}
if (line.includes("rs1408794") && (line.includes('rs1408794"') || line.includes("rs1408794,") || line.includes("rs1408794	"))) {
  if (line.includes("AA") || line.includes("A	A")) {
      NOSHACOTblue_amber = NOSHACOTblue_amber * 0.28; NOSHACOTblue = NOSHACOTblue * 0.28; NOSHACOTbrown = NOSHACOTbrown * 0.54;
      NOSHACOTd_brown = NOSHACOTd_brown * 0.6; NOSHACOThazel = NOSHACOThazel * 0.36; NOSHACOTgreen = NOSHACOTgreen * 0.42;
      
  } else if (line.includes("AG") || line.includes("A	G") || line.includes("GA") || line.includes("G	A")) {
     
  } else if (line.includes("GG") || line.includes("G	G")) {
      NOSHACOTblue_amber = NOSHACOTblue_amber * 0.72; NOSHACOTblue = NOSHACOTblue * 0.72; NOSHACOTbrown = NOSHACOTbrown * 0.46;
      NOSHACOTd_brown = NOSHACOTd_brown * 0.4; NOSHACOThazel = NOSHACOThazel * 0.64; NOSHACOTgreen = NOSHACOTgreen * 0.58;
  }
} 
if (line.includes("rs4778138") && (line.includes('rs4778138"') || line.includes("rs4778138,") || line.includes("rs4778138	"))) {
if (line.includes("AA") || line.includes("A	A") || line.includes("AA") || line.includes("A	A")) {
    blue_amber = blue_amber * 0.94; blue = blue * 0.96; l_brown = l_brown * 0.66;
d_brown = d_brown * 0.51; hazel = hazel * 0.85; green = green * 0.92;

} else if (line.includes("AG") || line.includes("A	G") || line.includes("GA") || line.includes("G	A")) {
    
} else if (line.includes("GG") || line.includes("G	G")) {
    blue_amber = blue_amber * 0.06; blue = blue * 0.04; l_brown = l_brown * 0.34;
d_brown = d_brown * 0.49; hazel = hazel * 0.15; green = green * 0.08;
}
} ///rs12913832 //rs4778199
if (line.includes("rs12913832") && (line.includes('rs12913832"') || line.includes("rs12913832,") || line.includes("rs12913832	"))) {
if (line.includes("AA") || line.includes("A	A") || line.includes("AA") || line.includes("A	A")) {
    blue_amber = blue_amber * 0.13; blue = blue * 0.01; l_brown = l_brown * 0.68;
d_brown = d_brown * 0.85; hazel = hazel * 0.35; green = green * 0.1;
hairblond = hairblond * 0.03; hairblack = hairblack * 0.82; hairred = hairred * 0.18; hairbrown = hairbrown * 0.55;

} else if (line.includes("AG") || line.includes("A	G") || line.includes("GA") || line.includes("G	A") ) {
    blue_amber = blue_amber * 0.24; blue = blue * 0.02; l_brown = l_brown * 0.61;
d_brown = d_brown * 0.29; hazel = hazel * 0.56; green = green * 0.21;
hairblond = hairblond * 0.03; hairblack = hairblack * 0.18; hairred = hairred * 0.18; hairbrown = hairbrown * 0.45;
} else if (line.includes("GG") || line.includes("G	G")) {
    hairblond = hairblond * 0.97; hairblack = hairblack * 0.18; hairred = hairred * 0.82;
    hairbrown = hairbrown * 0.45;
    blue_amber = blue_amber * 0.87; blue = blue * 0.99; l_brown = l_brown * 0.32;
d_brown = d_brown * 0.15; hazel = hazel * 0.65; green = green * 0.9;
}
}
if (line.includes("rs4778199") && (line.includes('rs4778199"') || line.includes("rs4778199,") || line.includes("rs4778199	"))) {
if (line.includes("AA") || line.includes("A	A") || line.includes("AA") || line.includes("A	A")) {
      blue_amber = blue_amber * 0.74; blue = blue * 0.74; l_brown = l_brown * 0.61;
d_brown = d_brown * 0.5; hazel = hazel * 0.71; green = green * 0.71;
} else if (line.includes("AG") || line.includes("A	G") || line.includes("GA") || line.includes("G	A")) {
    
} else if (line.includes("GG") || line.includes("G	G")) {
    blue_amber = blue_amber * 0.26; blue = blue * 0.26; l_brown = l_brown * 0.39;
d_brown = d_brown * 0.5; hazel = hazel * 0.29; green = green * 0.29;
}
}
if (line.includes("rs16891982") && (line.includes('rs16891982"') || line.includes("rs16891982,") || line.includes("rs16891982	"))) {
if (line.includes("CC") || line.includes("C	C")) {
    black = black * 0.930067; pale = pale * 0.039601; intermediate = intermediate * 0.25;
    hairblond = hairblond * 0.04; hairred = hairred * 0.03; hairbrown = hairbrown * 0.07; hairblack = hairblack * 0.71;
NOSHACOTblue_amber = NOSHACOTblue_amber * 0.06; NOSHACOTblue = NOSHACOTblue * 0.01; NOSHACOTbrown = NOSHACOTbrown * 0.24;
NOSHACOTd_brown = NOSHACOTd_brown * 0.31; NOSHACOThazel = NOSHACOThazel * 0.11; NOSHACOTgreen = NOSHACOTgreen * 0.05;
} else if (line.includes("GC") || line.includes("G	C") || line.includes("CG") || line.includes("C	G")) {
    black = black * 0.0686653; pale = pale * 0.318798;
    intermediate = intermediate * 0.5;
} else if (line.includes("GG") || line.includes("G	G")) {

    black = black * 0.00126736;pale = pale * 0.641601;intermediate = intermediate * 0.25;
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.94; NOSHACOTblue = NOSHACOTblue * 0.99; NOSHACOTbrown = NOSHACOTbrown * 0.76;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.61; NOSHACOThazel = NOSHACOThazel * 0.89; NOSHACOTgreen = NOSHACOTgreen * 0.95;
hairblond = hairblond * 0.96; hairred = hairred * 0.97; hairbrown = hairbrown * 0.93; hairblack = hairblack * 0.29;
}
}
if (line.includes("rs28117") && (line.includes('rs28117"') || line.includes("rs28117,") || line.includes("rs28117	"))) {
if (line.includes("AA") || line.includes("A	A")) {
    pale = pale * 0.933834; black = black *  0.236196;intermediate = intermediate * 0.25;
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.97; NOSHACOTblue = NOSHACOTblue * 0.98; NOSHACOTbrown = NOSHACOTbrown * 0.85;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.75; NOSHACOThazel = NOSHACOThazel * 0.93; NOSHACOTgreen = NOSHACOTgreen * 0.92;
} else if (line.includes("AG") || line.includes("A	G") || line.includes("GA") || line.includes("G	A")) {
    pale = pale * 0.0650335; black = black *  0.499608;
    intermediate = intermediate * 0.5;

} else if (line.includes("GG") || line.includes("G	G")) {
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.03; NOSHACOTblue = NOSHACOTblue * 0.02; NOSHACOTbrown = NOSHACOTbrown * 0.15;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.25; NOSHACOThazel = NOSHACOThazel * 0.07; NOSHACOTgreen = NOSHACOTgreen * 0.08;
    pale = pale * 0.00113226;black = black *  0.264196;intermediate = intermediate * 0.25;
}
}
if (line.includes("rs7773324") && (line.includes('rs7773324"') || line.includes("rs7773324,") || line.includes("rs7773324	"))) {
if (line.includes("AA") || line.includes("A	A")) {
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.61; NOSHACOTblue = NOSHACOTblue * 0.66; NOSHACOTbrown = NOSHACOTbrown * 0.5;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.45; NOSHACOThazel = NOSHACOThazel * 0.5; NOSHACOTgreen = NOSHACOTgreen * 0.4;
    
} else if (line.includes("AG") || line.includes("A	G") || line.includes("GA") || line.includes("G	A")) {
    
    
} else if (line.includes("GG") || line.includes("G	G")) {
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.39; NOSHACOTblue = NOSHACOTblue * 0.34; NOSHACOTbrown = NOSHACOTbrown * 0.5;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.55; NOSHACOThazel = NOSHACOThazel * 0.5; NOSHACOTgreen = NOSHACOTgreen * 0.6;
    
}
} //rs3778607
if (line.includes("rs3778607") && (line.includes('rs3778607"') || line.includes("rs3778607,") || line.includes("rs3778607	"))) {
if (line.includes("AA") || line.includes("A	A")) {
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.57; NOSHACOTblue = NOSHACOTblue * 0.5; NOSHACOTbrown = NOSHACOTbrown * 0.5;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.62; NOSHACOThazel = NOSHACOThazel * 0.53; NOSHACOTgreen = NOSHACOTgreen * 0.5;
    
} else if (line.includes("AG") || line.includes("A	G") || line.includes("GA") || line.includes("G	A")) {
    
    
} else if (line.includes("GG") || line.includes("G	G")) {
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.43; NOSHACOTblue = NOSHACOTblue * 0.5; NOSHACOTbrown = NOSHACOTbrown * 0.5;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.38; NOSHACOThazel = NOSHACOThazel * 0.47; NOSHACOTgreen = NOSHACOTgreen * 0.5;
    
}
} 
if (line.includes("rs8006358") && (line.includes('rs8006358"') || line.includes("rs8006358,") || line.includes("rs8006358	"))) {
if (line.includes("AA") || line.includes("A	A")) {
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.22; NOSHACOTblue = NOSHACOTblue * 0.19; NOSHACOTbrown = NOSHACOTbrown * 0.23;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.27; NOSHACOThazel = NOSHACOThazel * 0.18; NOSHACOTgreen = NOSHACOTgreen * 0.22;

} else if (line.includes("AG") || line.includes("A	G") || line.includes("GA") || line.includes("G	A")) {

    
} else if (line.includes("GG") || line.includes("G	G")) {
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.78; NOSHACOTblue = NOSHACOTblue * 0.81; NOSHACOTbrown = NOSHACOTbrown * 0.77;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.73; NOSHACOThazel = NOSHACOThazel * 0.82; NOSHACOTgreen = NOSHACOTgreen * 0.78;
}
}
if (line.includes("rs35401") && (line.includes('rs35401"') || line.includes("rs35401,") || line.includes("rs35401	"))) {
if (line.includes("TT") || line.includes("T	T")) {
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.65; NOSHACOTblue = NOSHACOTblue * 0.7; NOSHACOTgreen = NOSHACOTgreen * 0.6; NOSHACOThazel = NOSHACOThazel * 0.65; NOSHACOTbrown = NOSHACOTbrown * 0.6; NOSHACOTd_brown = NOSHACOTd_brown * 0.55;
    
} else if (line.includes("TG") || line.includes("T	G") || line.includes("GT") || line.includes("G	T")) {
   
} else if (line.includes("GG") || line.includes("G	G")) {
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.35; NOSHACOTblue = NOSHACOTblue * 0.3; NOSHACOTgreen = NOSHACOTgreen * 0.4; NOSHACOThazel = NOSHACOThazel * 0.35; NOSHACOTbrown = NOSHACOTbrown * 0.4; NOSHACOTd_brown = NOSHACOTd_brown * 0.45;
}
} 
if (line.includes("rs7748534") && (line.includes('rs7748534"') || line.includes("rs7748534,") || line.includes("rs7748534	"))) {
if (line.includes("TT") || line.includes("T	T")) {
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.79; NOSHACOTblue = NOSHACOTblue * 0.66; NOSHACOTbrown = NOSHACOTbrown * 0.61;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.67; NOSHACOThazel = NOSHACOThazel * 0.66; NOSHACOTgreen = NOSHACOTgreen * 0.72;
} else if (line.includes("TG") || line.includes("T	G") || line.includes("GT") || line.includes("G	T")) {
   
} else if (line.includes("GG") || line.includes("G	G")) {
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.21; NOSHACOTblue = NOSHACOTblue * 0.34; NOSHACOTbrown = NOSHACOTbrown * 0.39;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.33; NOSHACOThazel = NOSHACOThazel * 0.34; NOSHACOTgreen = NOSHACOTgreen * 0.28;
}
}
if (line.includes("rs4904868")&& (line.includes('rs4904868"') || line.includes("rs4904868,") || line.includes("rs4904868	"))) {
if (line.includes("TT") || line.includes("T	T")) {
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.5; NOSHACOTblue = NOSHACOTblue * 0.38; NOSHACOTbrown = NOSHACOTbrown * 0.59;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.59; NOSHACOThazel = NOSHACOThazel * 0.48; NOSHACOTgreen = NOSHACOTgreen * 0.48;
} else if (line.includes("TC") || line.includes("T	C") || line.includes("CT") || line.includes("C	T") ) {
  
} else if (line.includes("CC") || line.includes("C	C")) {
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.5; NOSHACOTblue = NOSHACOTblue * 0.62; NOSHACOTbrown = NOSHACOTbrown * 0.41;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.41; NOSHACOThazel = NOSHACOThazel * 0.52; NOSHACOTgreen = NOSHACOTgreen * 0.52;
}
} 
if (line.includes("rs3930739")&& (line.includes('rs3930739"') || line.includes("rs3930739,") || line.includes("rs3930739	"))) {
if (line.includes("TT") || line.includes("T	T")) {
    blue_amber = blue_amber * 0.54; blue = blue * 0.5; l_brown = l_brown * 0.46;
d_brown = d_brown * 0.46; hazel = hazel * 0.48; green = green * 0.5;
} else if (line.includes("TC") || line.includes("T	C") || line.includes("CT") || line.includes("C	T") ) {
    
} else if (line.includes("CC") || line.includes("C	C")) {
    blue_amber = blue_amber * 0.46; blue = blue * 0.5; l_brown = l_brown * 0.54;
d_brown = d_brown * 0.54; hazel = hazel * 0.52; green = green * 0.5;
}

}
if (line.includes("rs16929340")&& (line.includes('rs16929340"') || line.includes("rs16929340,") || line.includes("rs16929340	"))) {
    if (line.includes("TT") || line.includes("T	T")) {
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.72; NOSHACOTblue = NOSHACOTblue * 0.73; NOSHACOTbrown = NOSHACOTbrown * 0.52;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.42; NOSHACOThazel = NOSHACOThazel * 0.65; NOSHACOTgreen = NOSHACOTgreen * 0.68;
    } else if (line.includes("TC") || line.includes("T	C") || line.includes("CT") || line.includes("C	T") ) {
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.48; NOSHACOTblue = NOSHACOTblue * 0.42; NOSHACOTbrown = NOSHACOTbrown * 0.52;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.44; NOSHACOThazel = NOSHACOThazel * 0.5; NOSHACOTgreen = NOSHACOTgreen * 0.5;
    } else if (line.includes("CC") || line.includes("C	C")) {
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.28; NOSHACOTblue = NOSHACOTblue * 0.27; NOSHACOTbrown = NOSHACOTbrown * 0.48;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.58; NOSHACOThazel = NOSHACOThazel * 0.35; NOSHACOTgreen = NOSHACOTgreen * 0.32;
    }
    
    }
if (line.includes("rs1667394")&& (line.includes('rs1667394"') || line.includes("rs1667394,") || line.includes("rs1667394	"))) {
if (line.includes("TT") || line.includes("T	T")) {
    blue_amber = blue_amber * 0.94; blue = blue * 0.99; l_brown = l_brown * 0.54; 
d_brown = d_brown * 0.39; hazel = hazel * 0.73; green = green * 0.93;
 
} else if (line.includes("TC") || line.includes("T	C") || line.includes("CT") || line.includes("C	T") ) {
  
} else if (line.includes("CC") || line.includes("C	C")) {
    blue_amber = blue_amber * 0.06; blue = blue * 0.01; l_brown = l_brown * 0.46; 
d_brown = d_brown * 0.61; hazel = hazel * 0.27; green = green * 0.07;
   
}

} //rs1129038
if (line.includes("rs1129038")&& (line.includes('rs1129038"') || line.includes("rs1129038,") || line.includes("rs1129038	"))) {

if (line.includes("TT") || line.includes("T	T")) {
    hairblond = hairblond * 0.96; hairred = hairred * 0.72; hairbrown = hairbrown *0.45; hairblack = hairblack * 0.25;

    blue_amber = blue_amber * 0.87; blue = blue * 0.99; l_brown = l_brown * 0.32;
d_brown = d_brown * 0.15; hazel = hazel * 0.65; green = green * 0.9;
   
} else if (line.includes("TC") || line.includes("T	C") || line.includes("CT") || line.includes("C	T") ) {
    blue_amber = blue_amber * 0.24; blue = blue * 0.02; l_brown = l_brown * 0.61;
d_brown = d_brown * 0.29; hazel = hazel * 0.56; green = green * 0.21;
hairblond = hairblond * 0.04; hairred = hairred * 0.28; hairbrown = hairbrown *0.45; hairblack = hairblack * 0.25;

 
} else if (line.includes("CC") || line.includes("C	C")) {
    blue_amber = blue_amber * 0.13; blue = blue * 0.01; l_brown = l_brown * 0.68;
d_brown = d_brown * 0.85; hazel = hazel * 0.35; green = green * 0.1;
hairblond = hairblond * 0.04; hairred = hairred * 0.28; hairbrown = hairbrown *0.55; hairblack = hairblack * 0.75;

  
}

} //rs11636232
if (line.includes("rs11636232")&& (line.includes('rs11636232"') || line.includes("rs11636232,") || line.includes("rs11636232	"))) {
if (line.includes("TT") || line.includes("T	T")) {
    blue_amber = blue_amber * 0.44; blue = blue * 0.48; l_brown = l_brown * 0.13;
d_brown = d_brown * 0.03; hazel = hazel * 0.3; green = green * 0.46;
  
} else if (line.includes("TC") || line.includes("T	C") || line.includes("CT") || line.includes("C	T") ) {
    blue_amber = blue_amber * 0.61; blue = blue * 0.45; l_brown = l_brown * 0.24;
d_brown = d_brown * 0.06; hazel = hazel * 0.48; green = green * 0.56;
   
} else if (line.includes("CC") || line.includes("C	C")) {
    blue_amber = blue_amber * 0.56; blue = blue * 0.52; l_brown = l_brown * 0.87;
d_brown = d_brown * 0.97; hazel = hazel * 0.7; green = green * 0.54;
  
}

} //rs1800407
if (line.includes("rs1800407")&& (line.includes('rs1800407"') || line.includes("rs1800407,") || line.includes("rs1800407	"))) {
if (line.includes("TT") || line.includes("T	T")) {
   
    blue_amber = blue_amber * 0.06; blue = blue * 0.05; l_brown = l_brown * 0.06;
d_brown = d_brown * 0.03; hazel = hazel * 0.1; green = green * 0.07;
} else if (line.includes("TC") || line.includes("T	C") || line.includes("CT") || line.includes("C	T") ) {
  
} else if (line.includes("CC") || line.includes("C	C")) {
    
    blue_amber = blue_amber * 0.94; blue = blue * 0.95; l_brown = l_brown * 0.94;
d_brown = d_brown * 0.97; hazel = hazel * 0.9; green = green * 0.93;
}

} 
if (line.includes("rs977589")&& (line.includes('rs977589"') || line.includes("rs977589,") || line.includes("rs977589	"))) {
if (line.includes("TT") || line.includes("T	T")) {
    blue_amber = blue_amber * 0.48; blue = blue * 0.48; l_brown = l_brown * 0.33;
d_brown = d_brown * 0.22; hazel = hazel * 0.42; green = green * 0.44;
} else if (line.includes("TC") || line.includes("T	C") || line.includes("CT") || line.includes("C	T") ) {
    
} else if (line.includes("CC") || line.includes("C	C")) {
    blue_amber = blue_amber * 0.52; blue = blue * 0.52; l_brown = l_brown * 0.67;
d_brown = d_brown * 0.78; hazel = hazel * 0.58; green = green * 0.56;
}

} //rs2703960
if (line.includes("rs2703960")&& (line.includes('rs2703960"') || line.includes("rs2703960,") || line.includes("rs2703960	"))) {
if (line.includes("TT") || line.includes("T	T")) {
    blue_amber = blue_amber * 0.43; blue = blue * 0.4; l_brown = l_brown * 0.34;
d_brown = d_brown * 0.34; hazel = hazel * 0.43; green = green * 0.37;
} else if (line.includes("TC") || line.includes("T	C") || line.includes("CT") || line.includes("C	T") ) {
    
} else if (line.includes("CC") || line.includes("C	C")) {
    blue_amber = blue_amber * 0.57; blue = blue * 0.6; l_brown = l_brown * 0.66;
d_brown = d_brown * 0.66; hazel = hazel * 0.67; green = green * 0.63;
}

}
if (line.includes("rs4049255") && (line.includes('rs4049255"') || line.includes("rs4049255,") || line.includes("rs4049255	"))) {
if (line.includes("TT") || line.includes("T	T")){ snp++;
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.62; NOSHACOTblue = NOSHACOTblue * 0.67; NOSHACOTbrown = NOSHACOTbrown * 0.56;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.4; NOSHACOThazel = NOSHACOThazel * 0.65; NOSHACOTgreen = NOSHACOTgreen * 0.62;
}
else if (line.includes("TC") || line.includes("T	C") || line.includes("CT") || line.includes("C	T")){ snp++;
}
else if (line.includes("CC") || line.includes("C	C")){ snp++;
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.38; NOSHACOTblue = NOSHACOTblue * 0.33; NOSHACOTbrown = NOSHACOTbrown * 0.44;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.6; NOSHACOThazel = NOSHACOThazel * 0.35; NOSHACOTgreen = NOSHACOTgreen * 0.38;

} }
if (line.includes("rs1426654") && (line.includes('rs1426654"') || line.includes("rs1426654,") || line.includes("rs1426654	"))) {
if (line.includes("AA") || line.includes("A	A")){ snp++;
    
    pale = pale *  0.962361; black = black * 0.0502477;intermediate = intermediate * 0.25;
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.99; NOSHACOTblue = NOSHACOTblue * 0.99; NOSHACOTbrown = NOSHACOTbrown * 0.9;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.7; NOSHACOThazel = NOSHACOThazel * 0.96; NOSHACOTgreen = NOSHACOTgreen * 0.99;
}
else if (line.includes("AG") || line.includes("A	G") || line.includes("GA") || line.includes("G	A")){ snp++;
    intermediate = intermediate * 0.5;
    
 pale = pale *  0.037278; black = black * 0.347825; 
}
else if (line.includes("GG") || line.includes("G	G")){ snp++;
    
    pale = pale * 0.000361;black = black *  0.601928; intermediate = intermediate * 0.25;
    NOSHACOTblue_amber = NOSHACOTblue_amber * 0.01; NOSHACOTblue = NOSHACOTblue * 0.01; NOSHACOTbrown = NOSHACOTbrown * 0.1;
    NOSHACOTd_brown = NOSHACOTd_brown * 0.3; NOSHACOThazel = NOSHACOThazel * 0.04; NOSHACOTgreen = NOSHACOTgreen * 0.01;

} }

if (line.includes("rs288139") && (line.includes('rs288139"') || line.includes("rs288139,") || line.includes("rs288139	"))) {
  if (line.includes("GG") || line.includes("G	G")){ snp++;
      NOSHACOTblue_amber = NOSHACOTblue_amber * 0.81; NOSHACOTblue = NOSHACOTblue * 0.74; NOSHACOTbrown = NOSHACOTbrown * 0.82;
      NOSHACOTd_brown = NOSHACOTd_brown * 0.79; NOSHACOThazel = NOSHACOThazel * 0.79; NOSHACOTgreen = NOSHACOTgreen * 0.77;
  }
  else if (line.includes("GA") || line.includes("G	A") || line.includes("AG") || line.includes("A	G")){ snp++;
  }
  else if (line.includes("AA") || line.includes("A	A")){ snp++;
      NOSHACOTblue_amber = NOSHACOTblue_amber * 0.19; NOSHACOTblue = NOSHACOTblue * 0.26; NOSHACOTbrown = NOSHACOTbrown * 0.18;
      NOSHACOTd_brown = NOSHACOTd_brown * 0.21; NOSHACOThazel = NOSHACOThazel * 0.21; NOSHACOTgreen = NOSHACOTgreen * 0.23;
  
  } }
   
  if (line.includes("rs12203592") && (line.includes('rs12203592"') || line.includes("rs12203592,") || line.includes("rs12203592	"))) {
    if (line.includes("CC") || line.includes("C	C")){ snp++;
        pale = pale * 0.625681; black = black * 1;intermediate = intermediate * 1;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.86; NOSHACOTblue = NOSHACOTblue * 0.86; NOSHACOTbrown = NOSHACOTbrown * 0.89;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.96; NOSHACOThazel = NOSHACOThazel * 0.84; NOSHACOTgreen = NOSHACOTgreen * 0.87;
         hairred = hairred * 0.61; hairblond = hairblond * 0.88; hairbrown = hairbrown * 0.83; hairblack = hairblack * 0.9;
    
  }
    else if (line.includes("CT") || line.includes("C	T") || line.includes("TC") || line.includes("T	C")){ snp++;
       pale = pale * 0.330638; black = black *  0.007968;
        hairred = hairred * 0.39; hairblond = hairblond * 0.12; hairbrown = hairbrown * 0.17; hairblack = hairblack * 0.1;
        intermediate = intermediate * 0.2;
    
  }
    else if (line.includes("TT") || line.includes("T	T")){ snp++;
       pale = pale * 0.043681; black = black *  .000016;intermediate = intermediate * 0.01;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.14; NOSHACOTblue = NOSHACOTblue * 0.14; NOSHACOTbrown = NOSHACOTbrown * 0.11;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.04; NOSHACOThazel = NOSHACOThazel * 0.16; NOSHACOTgreen = NOSHACOTgreen * 0.13;
        hairred = hairred * 0.39; hairblond = hairblond * 0.12; hairbrown = hairbrown * 0.17; hairblack = hairblack * 0.1;
    
  } }
    
    if (line.includes("rs1408799") && (line.includes('rs1408799"') || line.includes("rs1408799,") || line.includes("rs1408799	"))) {
    if (line.includes("TT") || line.includes("T	T")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.28; NOSHACOTblue = NOSHACOTblue * 0.27; NOSHACOTbrown = NOSHACOTbrown * 0.48;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.58; NOSHACOThazel = NOSHACOThazel * 0.35; NOSHACOTgreen = NOSHACOTgreen * 0.32;
     hairblond = hairblond * 0.22; hairbrown = hairbrown * 0.38; hairblack = hairblack * 0.69; hairred = hairred * 0.36;
   }
    else if (line.includes("TC") || line.includes("T	C") || line.includes("CT") || line.includes("C	T")){ snp++;
        hairblond = hairblond * 0.22; hairbrown = hairbrown * 0.38;hairblack = hairblack * 0.31; hairred = hairred * 0.36;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.48; NOSHACOTblue = NOSHACOTblue * 0.42; NOSHACOTbrown = NOSHACOTbrown * 0.52;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.44; NOSHACOThazel = NOSHACOThazel * 0.5; NOSHACOTgreen = NOSHACOTgreen * 0.5;
    
    }
    else if (line.includes("CC") || line.includes("C	C")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.72; NOSHACOTblue = NOSHACOTblue * 0.73; NOSHACOTbrown = NOSHACOTbrown * 0.52;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.42; NOSHACOThazel = NOSHACOThazel * 0.65; NOSHACOTgreen = NOSHACOTgreen * 0.68;
        hairblond = hairblond * 0.78; hairbrown = hairbrown * 0.62; hairblack = hairblack * 0.31; hairred = hairred * 0.64;
    
    } }
    if (line.includes("rs683") && (line.includes('rs683"') || line.includes("rs683,") || line.includes("rs683 "))) {
    if (line.includes("CC") || line.includes("C	C")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.38; NOSHACOTblue = NOSHACOTblue * 0.27; NOSHACOTbrown = NOSHACOTbrown * 0.5;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.74; NOSHACOThazel = NOSHACOThazel * 0.38; NOSHACOTgreen = NOSHACOTgreen * 0.33;
         hairblond = hairblond * 0.24; hairbrown = hairbrown * 0.42; hairblack = hairblack * 0.69; hairred = hairred * 0.33;
    
   }
    else if (line.includes("CA") || line.includes("C	A") || line.includes("AC") || line.includes("A	C")){ snp++;
   }
    else if (line.includes("AA") || line.includes("A	A")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.62; NOSHACOTblue = NOSHACOTblue * 0.73; NOSHACOTbrown = NOSHACOTbrown * 0.5;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.36; NOSHACOThazel = NOSHACOThazel * 0.62; NOSHACOTgreen = NOSHACOTgreen * 0.67;
        hairblond = hairblond * 0.76; hairbrown = hairbrown * 0.58; hairblack = hairblack * 0.31; hairred = hairred * 0.67;
    
    
   } }
    
    if (line.includes("rs1393350") && (line.includes('rs1393350"') || line.includes("rs1393350,") || line.includes("rs1393350	"))) {
    if (line.includes("GG") || line.includes("G	G")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.76; NOSHACOTblue = NOSHACOTblue * 0.72; NOSHACOTbrown = NOSHACOTbrown * 0.75;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.77; NOSHACOThazel = NOSHACOThazel * 0.75; NOSHACOTgreen = NOSHACOTgreen * 0.84;
    }
    else if (line.includes("GA") || line.includes("G	A") || line.includes("AG") || line.includes("A	G")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.38; NOSHACOTblue = NOSHACOTblue * 0.46; NOSHACOTbrown = NOSHACOTbrown * 0.37;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.27; NOSHACOThazel = NOSHACOThazel * 0.3; NOSHACOTgreen = NOSHACOTgreen * 0.28;
   }
    else if (line.includes("AA") || line.includes("A	A")){ snp++;
        NOSHACOTblue_amber =  NOSHACOTblue_amber * 0.24;  NOSHACOTblue =  NOSHACOTblue * 0.28;  NOSHACOTbrown =  NOSHACOTbrown * 0.25;
        NOSHACOTd_brown =  NOSHACOTd_brown * 0.23;  NOSHACOThazel =  NOSHACOThazel * 0.25;  NOSHACOTgreen =  NOSHACOTgreen * 0.16;
  } }
    
  if (line.includes("rs10765198") && (line.includes('rs10765198"') || line.includes("rs10765198,") || line.includes("rs10765198	"))) {
    if (line.includes("TT") || line.includes("T	T")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.68; NOSHACOTblue = NOSHACOTblue * 0.69; NOSHACOTbrown = NOSHACOTbrown * 0.73;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.69; NOSHACOThazel = NOSHACOThazel * 0.71; NOSHACOTgreen = NOSHACOTgreen * 0.84;
    
    }
    else if (line.includes("TC") || line.includes("T	C") || line.includes("CT") || line.includes("C	T")){ snp++;
   }
    else if (line.includes("CC") || line.includes("C	C")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.32; NOSHACOTblue = NOSHACOTblue * 0.31; NOSHACOTbrown = NOSHACOTbrown * 0.27;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.31; NOSHACOThazel = NOSHACOThazel * 0.29; NOSHACOTgreen = NOSHACOTgreen * 0.16;
      
    } }
    if (line.includes("rs642742") && (line.includes('rs642742"') || line.includes("rs642742,") || line.includes("rs642742	"))) {
    if (line.includes("CC") || line.includes("C	C")){ snp++;
        pale = pale * 0.672267; black = black * 0.015376;intermediate = intermediate * 0.25;
    
         NOSHACOTblue_amber = NOSHACOTblue_amber * 0.83; NOSHACOTblue = NOSHACOTblue * 0.83; NOSHACOTbrown = NOSHACOTbrown * 0.76;
         NOSHACOTd_brown = NOSHACOTd_brown * 0.8; NOSHACOThazel = NOSHACOThazel * 0.77; NOSHACOTgreen = NOSHACOTgreen * 0.81;
    }
    else if (line.includes("CT") || line.includes("C	T") || line.includes("TC") || line.includes("T	C")){ snp++;
        black = black * 0.217248;
        pale = pale *  0.295304;                intermediate = intermediate * 0.5;
    
   }
    else if (line.includes("TT") || line.includes("T	T")){ snp++;
        black = black * 0.767376;
        pale = pale *  0.0324292;intermediate = intermediate * 0.25;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.17; NOSHACOTblue = NOSHACOTblue * 0.17; NOSHACOTbrown = NOSHACOTbrown * 0.24;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.2; NOSHACOThazel = NOSHACOThazel * 0.23; NOSHACOTgreen = NOSHACOTgreen * 0.19;
   } }
    if (line.includes("rs114873") && (line.includes('rs114873"') || line.includes("rs114873,") || line.includes("rs114873	"))) {
    if (line.includes("GG") || line.includes("G	G")){ snp++;
        pale = pale * 0.717578; black = black *0.322624; intermediate = intermediate * 0.45;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.83; NOSHACOTblue = NOSHACOTblue * 0.79; NOSHACOTbrown = NOSHACOTbrown * 0.72;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.72; NOSHACOThazel = NOSHACOThazel * 0.81; NOSHACOTgreen = NOSHACOTgreen * 0.72;
    }
    else if (line.includes("GA") || line.includes("G	A") || line.includes("AG") || line.includes("A	G")){ snp++;
        black = black * 0.490752; 
        pale = pale *  0.259043;                intermediate = intermediate * 0.3;
    
    }
    else if (line.includes("AA") || line.includes("A	A")){ snp++;
        black = black *  0.186624; 
        pale = pale *  0.0233784;intermediate = intermediate * 0.10;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.17; NOSHACOTblue = NOSHACOTblue * 0.21; NOSHACOTbrown = NOSHACOTbrown * 0.28;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.28; NOSHACOThazel = NOSHACOThazel * 0.19; NOSHACOTgreen = NOSHACOTgreen * 0.28;
   } }
    if (line.includes("rs12896399") && (line.includes('rs12896399"') || line.includes("rs12896399,") || line.includes("rs12896399	"))) {
    if (line.includes("GG") || line.includes("G	G")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.69; NOSHACOTblue = NOSHACOTblue * 0.47; NOSHACOTbrown = NOSHACOTbrown * 0.64;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.63; NOSHACOThazel = NOSHACOThazel * 0.62; NOSHACOTgreen = NOSHACOTgreen * 0.61;
    
    }
    else if (line.includes("GT") || line.includes("G	T") || line.includes("TG") || line.includes("T	G")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.46; NOSHACOTblue = NOSHACOTblue * 0.52; NOSHACOTbrown = NOSHACOTbrown * 0.4;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.47; NOSHACOThazel = NOSHACOThazel * 0.39; NOSHACOTgreen = NOSHACOTgreen * 0.46;
    
   }
    else if (line.includes("TT") || line.includes("T	T")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.31; NOSHACOTblue = NOSHACOTblue * 0.53; NOSHACOTbrown = NOSHACOTbrown * 0.36;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.37; NOSHACOThazel = NOSHACOThazel * 0.38; NOSHACOTgreen = NOSHACOTgreen * 0.39;
    
   } }
    if (line.includes("rs2402130") && (line.includes('rs2402130"') || line.includes("rs2402130,") || line.includes("rs2402130	"))) {
    if (line.includes("GG") || line.includes("G	G")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.31; NOSHACOTblue = NOSHACOTblue * 0.19; NOSHACOTbrown = NOSHACOTbrown * 0.19;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.18; NOSHACOThazel = NOSHACOThazel * 0.23; NOSHACOTgreen = NOSHACOTgreen * 0.24;
    
    }
    else if (line.includes("GA") || line.includes("G	A") || line.includes("AG") || line.includes("A	G")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.43; NOSHACOTblue = NOSHACOTblue * 0.25; NOSHACOTbrown = NOSHACOTbrown * 0.29;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.24; NOSHACOThazel = NOSHACOThazel * 0.31; NOSHACOTgreen = NOSHACOTgreen * 0.4;
    
   }
    else if (line.includes("AA") || line.includes("A	A")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.69; NOSHACOTblue = NOSHACOTblue * 0.81; NOSHACOTbrown = NOSHACOTbrown * 0.81;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.82; NOSHACOThazel = NOSHACOThazel * 0.77; NOSHACOTgreen = NOSHACOTgreen * 0.76;
    
   } }
    if (line.includes("rs977588") && (line.includes('rs977588"') || line.includes("rs977588,") || line.includes("rs977588	"))) {
    if (line.includes("CC") || line.includes("C	C")){ snp++;
    blue_amber = blue_amber * 0.3; blue = blue * 0.32; l_brown = l_brown * 0.53;
    d_brown = d_brown * 0.69; hazel = hazel * 0.46; green = green * 0.39;
    
    }
    else if (line.includes("CA") || line.includes("C	A") || line.includes("AC") || line.includes("A	C")){ snp++;
    }
    else if (line.includes("AA") || line.includes("A	A")){ snp++;
    blue_amber = blue_amber * 0.7; blue = blue * 0.68; l_brown = l_brown * 0.47;
    d_brown = d_brown * 0.31; hazel = hazel * 0.54; green = green * 0.61;
    
   } }
    if (line.includes("rs2871772") && (line.includes('rs2871772"') || line.includes("rs2871772,") || line.includes("rs2871772	"))) {
    if (line.includes("CC") || line.includes("C	C")){ snp++;
    blue_amber = blue_amber * 0.7; blue = blue * 0.86; l_brown = l_brown * 0.86;
    d_brown = d_brown * 0.79; hazel = hazel * 0.76; green = green * 0.76;
    
    }
    else if (line.includes("CT") || line.includes("C	T") || line.includes("TC") || line.includes("T	C")){ snp++;
    }
    else if (line.includes("TT") || line.includes("T	T")){ snp++;
    blue_amber = blue_amber * 0.3; blue = blue * 0.24; l_brown = l_brown * 0.24;
    d_brown = d_brown * 0.21; hazel = hazel * 0.24; green = green * 0.24;
    
    } }
    if (line.includes("rs11852452") && (line.includes('rs11852452"') || line.includes("rs11852452,") || line.includes("rs11852452	"))) {
    if (line.includes("TT") || line.includes("T	T")){ snp++;
    blue_amber = blue_amber * 0.4; blue = blue * 0.49; l_brown = l_brown * 0.31;
    d_brown = d_brown * 0.27; hazel = hazel * 0.43; green = green * 0.43;
    
    }
    else if (line.includes("TC") || line.includes("T	C") || line.includes("CT") || line.includes("C	T")){ snp++;
    
    
    }
    else if (line.includes("CC") || line.includes("C	C")){ snp++;
    blue_amber = blue_amber * 0.6; blue = blue * 0.51; l_brown = l_brown * 0.69;
    d_brown = d_brown * 0.73; hazel = hazel * 0.57; green = green * 0.57;
    
   } }
    if (line.includes("rs8034072") && (line.includes('rs8034072"') || line.includes("rs8034072,") || line.includes("rs8034072	"))) {
    if (line.includes("CC") || line.includes("C	C")){ snp++;
    blue_amber = blue_amber * 0.85; blue = blue * 0.92; l_brown = l_brown * 0.73;
    d_brown = d_brown * 0.66; hazel = hazel * 0.76; green = green * 0.88;
   }
    else if (line.includes("CT") || line.includes("C	T") || line.includes("TC") || line.includes("T	C")){ snp++;
    
    }
    else if (line.includes("TT") || line.includes("T	T")){ snp++;
    blue_amber = blue_amber * 0.15; blue = blue * 0.08; l_brown = l_brown * 0.27;
    d_brown = d_brown * 0.34; hazel = hazel * 0.24; green = green * 0.12;
    } }
    if (line.includes("rs7178315") && (line.includes('rs7178315"') || line.includes("rs7178315,") || line.includes("rs7178315	"))) {
    if (line.includes("TT") || line.includes("T	T")){ snp++;
    blue_amber = blue_amber * 0.19; blue = blue * 0.17; l_brown = l_brown * 0.39;
    d_brown = d_brown * 0.5; hazel = hazel * 0.31; green = green * 0.22;
    }
    else if (line.includes("TC") || line.includes("T	C") || line.includes("CT") || line.includes("C	T")){ snp++;
    
    }
    else if (line.includes("CC") || line.includes("C	C")){ snp++;
    blue_amber = blue_amber * 0.94; blue = blue * 0.96; l_brown = l_brown * 0.66;
    d_brown = d_brown * 0.51; hazel = hazel * 0.85; green = green * 0.92;
    
    } }
    if (line.includes("rs1015362") && (line.includes('rs1015362"') || line.includes("rs1015362,") || line.includes("rs1015362	"))) {
    if (line.includes("CC") || line.includes("C	C")){ snp++;
    
        pale = pale * 0.517906; black = black * 0.021904;intermediate = intermediate * 0.25;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.82; NOSHACOTblue = NOSHACOTblue * 0.76; NOSHACOTbrown = NOSHACOTbrown * 0.7;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.69; NOSHACOThazel = NOSHACOThazel * 0.7; NOSHACOTgreen = NOSHACOTgreen * 0.84;
    
    }
    else if (line.includes("CT") || line.includes("C	T") || line.includes("TC") || line.includes("T	C")){ snp++;
    
         pale = pale * 0.403502;black = black *0.252192;                intermediate = intermediate * 0.5;
    
   }
    else if (line.includes("TT") || line.includes("T	T")){ snp++;
        intermediate = intermediate * 0.25;
    
        pale = pale * 0.0785922;black = black *0.725904;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.18; NOSHACOTblue = NOSHACOTblue * 0.24; NOSHACOTbrown = NOSHACOTbrown * 0.3;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.31; NOSHACOThazel = NOSHACOThazel * 0.3; NOSHACOTgreen = NOSHACOTgreen * 0.16;
    
   } }
    if (line.includes("rs4911414") && (line.includes('rs4911414"') || line.includes("rs4911414,") || line.includes("rs4911414	"))) {
    if (line.includes("TT") || line.includes("T	T")){ snp++;
    
        pale = pale * 0.09; black = black * 0.01;intermediate = intermediate * 0.05;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.31; NOSHACOTblue = NOSHACOTblue * 0.3; NOSHACOTgreen = NOSHACOTgreen * 0.26; NOSHACOThazel = NOSHACOThazel * 0.35; NOSHACOTbrown = NOSHACOTbrown * 0.29; NOSHACOTd_brown = NOSHACOTd_brown * 0.19;
    
   }
    else if (line.includes("TG") || line.includes("T	G") || line.includes("GT") || line.includes("G	T")){ snp++;
        pale = pale * 0.43; black = black * 0.21;                intermediate = intermediate * 0.4;
    
   }
    else if (line.includes("GG") || line.includes("G	G")){ snp++;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.69; NOSHACOTblue = NOSHACOTblue * 0.7; NOSHACOTgreen = NOSHACOTgreen * 0.74; NOSHACOThazel = NOSHACOThazel * 0.65; NOSHACOTbrown = NOSHACOTbrown * 0.71; NOSHACOTd_brown = NOSHACOTd_brown * 0.81;
        pale = pale * 0.46; black = black * 0.77;intermediate = intermediate * 0.55;
    } }
    if (line.includes("rs6142129") && (line.includes('rs6142129"') || line.includes("rs6142129,") || line.includes("rs6142129	"))) {
    if (line.includes("AA") || line.includes("A	A")){ snp++;
        pale = pale * 0.48; black  = black * 0.73;intermediate = intermediate * 0.25;
    
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.74; NOSHACOTblue = NOSHACOTblue * 0.73; NOSHACOTbrown = NOSHACOTbrown * 0.74;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.73; NOSHACOThazel = NOSHACOThazel * 0.69; NOSHACOTgreen = NOSHACOTgreen * 0.73;
    }
    else if (line.includes("AG") || line.includes("A	G") || line.includes("GA") || line.includes("G	A")){ snp++;
     pale = pale * 0.43; black = black * 0.24;                intermediate = intermediate * 0.3;
    
    
   }
    else if (line.includes("GG") || line.includes("G	G")){ snp++;
    
      pale = pale * 0.09; black = black * 0.02;intermediate = intermediate * 0.05;
        NOSHACOTblue_amber = NOSHACOTblue_amber * 0.26; NOSHACOTblue = NOSHACOTblue * 0.27; NOSHACOTbrown = NOSHACOTbrown * 0.26;
        NOSHACOTd_brown = NOSHACOTd_brown * 0.27; NOSHACOThazel = NOSHACOThazel * 0.31; NOSHACOTgreen = NOSHACOTgreen * 0.27;
    } }
    if (line.includes("rs35264875") && (line.includes('rs35264875"') || line.includes("rs35264875,") || line.includes("rs35264875	"))) {
    if (line.includes("AA") || line.includes("A	A")){ snp++;
        hairblond = hairblond * 0.79; hairred = hairred * 0.9; hairbrown = hairbrown *0.61; hairblack = hairblack * 0.79;
    
   }
    else if (line.includes("AT") || line.includes("A	T") || line.includes("TA") || line.includes("T	A")){ snp++;
    }
    else if (line.includes("TT") || line.includes("T	T")){ snp++;
        hairblond = hairblond * 0.21; hairred = hairred * 0.1; hairbrown = hairbrown *0.39; hairblack = hairblack * 0.21;
    
   } }


    
  }
  document.getElementById("snpcount").textContent = snp;

}
function countRSInstances(text) {
  const rsPattern = /\brs\d+/g; // Matches "rs" followed by digits
  const matches = text.match(rsPattern);
  return matches ? matches.length : 0;
  
}

