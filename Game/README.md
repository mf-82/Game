# **Game of Houses**

## Game discription

Its a game where players drow lines around a block to capture it

### How to play
		
- Players take turns drowing a line between two adjasent dots.
![Screenshot of the initial screen](https://git.generalassemb.ly/m82/Projects/blob/branch-to--test-creating-bord-automatically/Game/TotorialImages/InitialScreen.png)
![Screenshot of the first play](https://git.generalassemb.ly/m82/Projects/blob/branch-to--test-creating-bord-automatically/Game/TotorialImages/FirstPlay.png)
![Screenshot of the second play](https://git.generalassemb.ly/m82/Projects/blob/branch-to--test-creating-bord-automatically/Game/TotorialImages/SecondPlay.png)
- When all 4 lines around a block are drown then its catured by the player who made the last line, and that player plays again
![Screenshot of a captured block](https://git.generalassemb.ly/m82/Projects/blob/branch-to--test-creating-bord-automatically/Game/TotorialImages/CapturedBlock.png)

### Win condition

- When all blocks are captured , the player with most blocks wins
![Screenshot of Win condition](https://git.generalassemb.ly/m82/Projects/blob/branch-to--test-creating-bord-automatically/Game/TotorialImages/WinScreen.png)
	
## Technologies used
- HTML
- CSS
	- Variables
	- KeyFrame Animations
	- Media resposive on smaller screens
- JavaScript

## Approach taken

- First day
	- Did basic design using wire frames
		- Full screen
		![basic design](https://git.generalassemb.ly/m82/Projects/blob/branch-to--test-creating-bord-automatically/Game/design%202.png)
		- small screen
		![small screen design](https://git.generalassemb.ly/m82/Projects/blob/branch-to--test-creating-bord-automatically/Game/small%20screen%20design.png)
	- Built basic desig in HTML 
	- Did basic logic on paper
	![basic logic image](https://git.generalassemb.ly/m82/Projects/blob/branch-to--test-creating-bord-automatically/Game/logic2.png)
	- Implemented logic in JavaScript
- Second day
	- Added auto generate for columns and rows
	- Created buttons for clearing and generating the board
- Third day
	- Added responsive design
- Forth day
	- Added images to backgrounds
	- Added animations
	- Added sounds
- Fifth day
	- Created Readme.md
	- Added wins and ties and a button to clear them

## Issues faced
- Figuring out how borders adjaset to diffrent div count as belonging to that column or row
- Auto generating logic to add data attributes for colums and rows
- Finding images and sounds to use (more time consuming than expected/0

## Unsolved problems
- Sun sunCycle and celebration divs do not scale all the way down when hight is long

## Features to add
- Add a smaller limit of columns for smaller screens
- Option to make player 2 a Computer player
- More animations (flying birds in the background and maybe another cloud)
- change the win confetty animation with fireworks as it goes better with the theme and add sound for that
