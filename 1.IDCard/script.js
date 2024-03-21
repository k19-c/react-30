function generateCard() {
    // Get value of Student name from form input 
    const nameVal=document.getElementById("name").value;
    console.log("VAL", nameVal);

    // Assign the value of student name to generated card
    const cardNameEle=document.getElementById("cardName");
    cardNameEle.innerHTML=nameVal;

    // Get value of college name from form input 
    const collegeNameVal=document.getElementById("collegeName").value;
    // Assign the value of college name to generated card
    document.getElementById("cardCollegeName").innerHTML=collegeNameVal;

    // Get value of location name from form input 
    const locationVal=document.getElementById("location").value;
    // Assign the value of location name to generated card
    document.getElementById("cardLocation").innerHTML=locationVal;

    // Display final generated card to user     
    document.getElementById("collegeCard").style.display="block";
}