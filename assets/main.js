var t = document.getElementById("firebase");


firebase.database().ref('resultsite').on('child_added', function(snap){
    k =  "      <h2 class=\"mbr-section-title pb-3 align-center mbr-fonts-style display-2\">"+snap.key+"</h2><hr class=\"line\" style=\"height: 1px;border: none;background-color: black;width: 50%\" >";

    k = k + "       <div class=\"media-container-row container pt-5 mt-2\">";

    

    for(var key in snap.val()){
        k = k + "<div class=\"col-12 col-md-6 mb-4 col-lg-5 text-center\">    <h3>"+ key + " </h3>   <p class=\"mbr-text mbr-fonts-style display-7\">"+ snap.val()[key] + "       </p></div>";
    }
    


    k = k + "</div><hr class=\"line\" style=\"height: 1px;border: none;background-color: black;width: 50%\" >";
    t.innerHTML = t.innerHTML+ k;


}).on("complete",function(t){
    document.getElementById("loading").style.display = "none";

});
