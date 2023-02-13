# DATA

## DATA LAYER

- Todo item
  - id (number)
  - name (string)
  - isDone (boolean)

## DATA MODIFICATIONS

- Add todos to Todo List
- Delete todo
- Update todo
- Create a todo

# COMPONENTS

## TODOSLICE

- Contains the function to add todos to list
- Contains the function to update a todo
- Contains the function to delete a todo
- Contains the function to create a todo
-

## TODO LIST

- Receives the list of Todos
- Sends info to Todo Component

## TODO

- Receives the todo info
- Contains delete button
- Contains add button
- Contains data of each todo (name, id, isDone)

## FORM

- Receives the data from the user for a new todo
- Receives the function to add a new todo

## BUTTONS

### ADD

- Sends the signal to add input data to todo

### DELETE

- Sends the signal to delete a todo
