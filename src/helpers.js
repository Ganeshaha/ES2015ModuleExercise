import React from "react";

function choice(itemArray){
    //choice(items): returns a randomly selected item from array of items
    let pos = Math.floor(Math.random()*(itemArray.length));
    console.log(pos);
    return itemArray[pos]
    
    }
    
function remove(itemArray,item){
    //remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
    console.log(itemArray);
    if(itemArray.indexOf(item)!== -1){
        itemArray.splice(itemArray.indexOf(item), 1);
        
        return itemArray
    }
    else return undefined
    
    }

export {choice, remove}