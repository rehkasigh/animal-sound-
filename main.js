function startClassfication(){
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/d6Epwv0lu/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
if(error){
    console.error(error);
}
}


else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
    
    img=document.getElementById('cat')
        
    img1=document.getElementById('dog')
        
    img2=document.getElementById('lion')


    if(results[0].label=="background noise"){

img1.src='happy-dance-dance.png';
img2.src='source.png';
img3.src='lion.png';
    }
    else if (results[0].label=="meowing"){
        
        img.src='happy-dance-dance.gif';
        img1.src='source.png';
        img2.src='lion.png';
            }

            else if (results[0].label=="barking"){
                
                img.src='happy-dance-dance.png';
                img1.src='source.gif';
                img2.src='lion.png';
                    }

                    else {
                        img.src='cat.png';
                        img1.src='dog.png';
                        img2.src='lion.gif';
                        
                            }
                        }  