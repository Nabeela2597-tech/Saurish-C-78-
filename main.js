var images =
["https://static9.depositphotos.com/1497380/1190/v/950/depositphotos_11907565-stock-illustration-happy-family.jpg",
"https://us.123rf.com/450wm/ylivdesign/ylivdesign1605/ylivdesign160500244/56085314-dad-icon-in-cartoon-style-on-a-white-background.jpg?ver=6",
"https://www.nicepng.com/png/detail/89-892939_mom-cartoon-clipart-mom-animated.png",
"https://www.clipartmax.com/png/middle/221-2216870_brothers-and-sisters-cartoon.png",
"https://i.pinimg.com/originals/61/2c/b7/612cb73d4284b091530ef6dda0993021.jpg"];
var names =
["Family","Father","Mother","Sister","Me"];
var i=0;
function update()
            {
                i++;
                var numbers_of_family_member_in_array = 5
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }



