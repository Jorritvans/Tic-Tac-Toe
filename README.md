# TIC TAC TOE

TIC TAC TOE is enjoyed by millions worldwide and is easy to play this is why i have created this game for you all to enjoy!!
It offers a challenge against a competitive computer, but you can also play against a friend on the same device.

Users will experience a smooth running game with good instructions assigned above.

link to the website : [Tic Tac Toe Website](https://jorritvans.github.io/Tic-Tac-Toe.MP2/)


![am i responsive tic-tac-toe](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/2d3e0825-6bb9-44bc-9900-deb1580e3722)

## Wireframes

- __Desktop__

![tic-tac-toe desktop](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/1091fddd-573e-4924-a391-4fb9cc8bfbf9)


- __Tablet__

![tic-tac-toe tablet](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/54c6bf2a-337c-4872-abed-602e45124167)


- __Phone__

![tic-tac-toe mobile](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/5bd52660-cb65-452d-a8de-94fe10cb1dfe)


## Features

- __INFORMATION__

- The information button is a dropdown button that when clicked shows a text explaining all the important details about the game giving clear and good indications on how to play the game and what to do.

![tic-tac-toe info button](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/33d733b5-19e7-4b69-b4cc-7bac931ad2a7)
![tic-tac-toe info button opened](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/92359797-3d1c-42f1-9db6-d3e8926be22f)




- __GAMEMODE SELECTOR__

- The gamemode selector button was created so the player can choose between playing against a computer or against a friend that is on the same device.

![tic-tac-toe gamemode button](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/6d231ef2-9a35-4f4a-a6c0-7ae9ac250628)
![tic-tac-toe gamemode button opened](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/cdf3c51b-ae88-44d7-b2f4-f206ce1dcdef)





- __RESTART BUTTON__

- The restart button can be used at any time during the game if you want to clear the board this can be done by clicking on the button itself or hitting the enter key on your keyboard.

![tic-tac-toe restart button](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/c35a5a07-1e56-4b5c-897f-48a6a1a4af8c)





- __GAMEBOARD__

- The gameboard has been designed like any other tic tac toe using a 3x3 grid and a nice looking X and O.

![tic-tac-toe gameboard](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/4137c613-edcc-4b43-a73b-23a33b364198)




- __Footer__

- Footer contains some text in it as it just looks more appealing having something at the bottom.

![tic-tac-toe footer](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/33b3e0ad-26e0-4aa0-bc6b-59e7de360c13)




- __ENDGAME-TEXT__

- This is a message containing the result of the game if a winning combination is met you will see a win message if there is not a single one met and the board is full the draw message will appear.

![tic-tac-toe X won](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/c6f457bd-6540-4343-aa5c-0bc36fa552b7)
![tic-tac-toe O won](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/65942901-f657-4245-9b28-48ab7ad116f2)
![tic-tac-toe draw](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/481f2fd6-1f55-439f-abbb-f640465c54b0)


## Testing
| button        | expected behaviour          | Result  |
| ------------- |:-------------:| -----:|
| link to website     | Website opens and computer makes the first move.      | Website opens and computer makes the first move. |
| Information button   | When clicked it opens up the text and when clicked again it closes the text back up.    | When clicked it opens up the text and when clicked again it closes the text back up. |
| Gamemode selector    | When clicked it should show 2 options being play against a friend or against the computer.   | When clicked it shows 2 options being play against a friend or against the computer. |
| Restart button     | When clicked it should clear the gameboard or reset the gamemode if a different one is selected.    | When clicked it clears the gameboard or resets the gamemode if a different one is selected. |
| Gameboard      | When a cell is clicked an X or O should appear depending on what gamemode is played.     | When a cell is clicked an X or O appears depending on what gamemode is played. |
| Computer/BOT   | Should make the first move being an O and wait for a move to be played by X before making a new one.   | Makes the first move being an O and waits for a move to be played by X before making a new one. |
| Blocking moves BOT    | BOT should detect a winning move by player X and should go for a block if it can't meet a winning combination itself.   | Bot does detect a winning move and will prioritize blocking if it cannot win. |
| Winning move BOT   | BOT should go for the win if it detects a possible winning combination.   | BOT does detect a winning move and will make it when it is possible. |
| Result message    | This message should appear when a winning combination is met or a draw is detected.    | This message does show up when a winning combination is met and also when a draw is detected. |
| BOT waiting time    | BOT should always have a little bit of time inbetween turns to make it look like it is thinking.   | The bot does have a little pause inbetween moves . |


## Manual Testing

- Have tested the website on all devices, all browsers and got multiple people testing it on their devices to make sure every single thing works and loads on the website.
- Tested on desktop, tablet and multiple phones.

## Validator testing

- __HTML__
- No errors were returned when having tested all the html files in the official W3C validator.

![tic-tac-toe W3 HTML](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/fe524c3c-3233-4b76-8e0b-cbcee6de606d)

- __CSS__

 - No errors were found when checking the CSS passing it through the official (Jigsaw) validator.

![tic-tac-toe css ](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/e700caee-ad53-4e29-acd3-75499949fef0)


- __JAVASCRIPT__

- No errors were found when checking the Javascript passing it through JSHint validator.

![tic-tac-toe js](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/fff9ad46-41d8-4c01-8b66-d63c0dde0a87)

  
- __Accessibility__

- I can confirm that the colors and fonts of the website are easily readable and accessible by doing a lighthouse test through devtools.

- __LIGHTHOUSE TESTS__

- __Desktop__

 ![tic tac toe test desktop](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/6fe4c218-ecdd-4e5d-a941-28115c7f5416)

- __Mobile__

![tic tac toe test mobile](https://github.com/Jorritvans/Tic-Tac-Toe.MP2/assets/146831899/401b76d3-f7b5-4547-bac8-d84a8797e7aa)


## Unfixed Bugs

No unfixed bugs.

## Deployment

- __The site was deployed to GitHub pages. The steps are:__
  - In the GitHub repository go to the settings.
  - From the source menu choose Master Branch
  - Once that has been done the page provided me with the completed website.
  - link to the website : [Tic Tac Toe Website](https://jorritvans.github.io/Tic-Tac-Toe.MP2/)

## Local Deployment

- __git clone https://github.com/Jorritvans/Tic-Tac-Toe.MP2.git__
   - Open cmd prompt (Windows) or terminal (Linux or Mac)
   - Clone: git clone https://github.com/Jorritvans/Tic-Tac-Toe.MP2.git
   - cd Tic-Tac-Toe.MP2
   - double click index.html to run website locally

## Credits

- __Code__
- Used https://stackoverflow.com/ to get ideas on how to create the game and design the gameboard and the x's and o's on css and also used this video https://www.youtube.com/watch?v=B3pmT7Cpi24
- Used these videos for reference and better understanding about the logic of how to create the game. https://www.youtube.com/watch?v=al_AgC2NSCo&list=LL&index=17 | https://www.youtube.com/watch?v=AnmwHjpEhtA&list=LL&index=46&t=644s | 
- Used this video to learn more on how to set up a computer https://www.youtube.com/watch?v=ovr2sTYhb1I
- Used the https://codeinstitute.net/ videos to look back at previous work and codes.
- When code was used from somewhere i have put it in my commit messages as i had to learn a few new things in css.
- __Media__
Got my favicon logo from bing image creator which is an AI tool.
## Advice and experience

- __Struggles__

- This project was actually not my first option, my first idea was making a brick breaker game which eliminated tiles/bricks if they were being touched, sadly i saw i was not able to finish this project on time due to a lack of experience in coding and having to research too much work, i decided it was a better option going for this project as i did not want to copy code just so i can finish the other project, with that in mind i started this project thinking it would be very easy to make as i watched a lot of tutorials online on youtube and thought it would be done in 2 weeks... well i can tell you i have underestimated the work and it took me nearly a month to create this game which i am very proud of, this project was for sure not effortless it took me a lot of time in researching firstly for the design and afterwards for making that BOT (which i hate and love at the same time) to work the way i wanted it too, I struggled a lot with the BOT creation because everytime when i tried adding something new there would always be another thing going wrong and maybe you can say i tried too hard to make this bot very competitive but the end result is something i am very proud of as it makes no mistakes and is doing everything i wanted it to do.
- I also had a few struggles organizing my JAVASCRIPT code as i sometimes did not know where my code should go and you can probably see that in the commits i have made.
