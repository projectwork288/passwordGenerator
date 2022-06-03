Readme for Password Generater project
Arthur Green
jamie.green@gmail.com 


NU-VIRT-FSF-PT-03-2022-U-LOL-TTH


Intially I created the arrays for the 4 character types. There were a total of 80.

Next I created a prompt to get the user to input a number between 8 and 128. I follow up with informing the user to input between 8 and 128 if they have entered cancel. Next I added alerts if they input less than 8 or more than 128. Finally, I ask the user if they want to include each of the 4 possible character types.  There is a confirmation that they select at least one character type.

I gather all character types into an all inclusive array called allChar. I randomize the array 4 times to get a good mix.  I noticed that if I popped the array it was likely that no numbers would make it into the password.  Likewise I needed to pad the total array with numbers since they made up only 10/80th of the total. Next I perform a push or pop depending on the number of the characters originally selected.

Finally you'll find the randomizing function at the bottom of the page.