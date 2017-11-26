/**
 * Created by cristiansavin on 07.11.17.
 */
var version  = 6;
var name = "\"EcmaScript\"";
var copy = "\u00A9";

document.write("We learn" + " " + name + " " + copy + " " + version + ".0");

/* LESSONS 4 */

var my_name = prompt("Enter a word");
var my_array  = my_name.split('').reverse().join('');
console.log(my_array);
