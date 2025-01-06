# To-Do List using React.

### Overview

This was first coding project for an extended period, so I wanted to keep it simple and build something basic using html, css and react.

### Brief

To design a simple to do list app using React, that allows the user to make a list of taks that needs to be completed, and to order those taks in priority order.

The user must be able to add and delete taks, and also chnage the order of priority of tasks, but moving them up or down the list.

### Technologies Used.

VS Code, HTML, CSS, Javacript, React

### Deployment Link.

TBC

### functionality

I wanted to use React 'Use State' to be able to take a uder input and add new items to the list. I also wanted to be able to delete items from the list. I started by creating a new component , importing react use state and setting up the react functionality I needed.

![alt text](/assets/TDL-photo-3.png)

I then built the fucntions that would allow the user to add and remove new list items. I used to the trim method to ensure there was a valid user input.

![alt text](/assets/TDL-photo-4.png)

I also wanted to inform the user that The uitem had been added or removed with a line of text. I was planning to use useEffect for this but VSCode suggested the UseRef hook. I researched this hook and decided to use this hook instead.

So in both the add and delete item function i added a line of code to my udpateRef variable using the .current property. After an item is added we can see in picture below the user is imformed of this.

![alt text](/assets/TDL-photo-1.png)

I then built the Move up and move down function to allow the user to change the priorities in their list. I did this by creating a new variable called updatedItems, and swapped the array indexes of the two items i wanted to swap. I then assigned the SetItem function to this variable to update the state of our Item state hook. The move up and move down fucntions are the same function except in reverse with a different message assigned to the UseRef.current property.

![alt text](/assets/TDL-photo-5.png).

I then built the return statement with basic JSX to create the structure for the page. This included adding the buttons needed and linking the required functions that I had already written.

![alt text](/assets/TDL-photo-6.png)

![alt text](/assets/TDL-photo-7.png).

Finally I added some basic CSS to make the page visually more appealing. I decided that I didnt want this to turn into a long CSS project. My priority is to move onto more complex react projects and hopefully learn to use tailwind for CSS. I just wanted something quick and basic for my starter project. Ised flexxbox to structure the divs in the page and some colouring and Emoji's for the buttons.

With more time I could have improved the layout but CSS styling is not my priority at the moment.

### Bugs and challenges.

I was very rusty comign into this project so the main challenge was the amount of time it was taking me to perform more basic taks, and how much external help (google) I required to learn the correct syntax.

I found the CSS styling really buggy with flexbox. Just alot of trial and error.

### Futrue improvements.

I think I may come back to this project to perhaps add some more complex funtionality and also to improve the styling with Tailwind.
