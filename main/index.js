

/***********************************************************
 * Title: Main script
 * Author: Phumzile Mahlangu
 * Date: 11 August 2022
 * 
 */


// Build arguements 

const names = process.argv.slice(2);
if (names.length != 2){
    console.log("The number of named given is invalid!")
    console.log("Use: good-match <name1> <name2>" )
    console.log("Example: good-match jack jill")
    process.exit()
}
name1 = names[0].trim()
name2 = names[1].trim()
// check for alphabets 
function onlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
}
if(onlyLetters(name1) != true){
    console.log("Name 1 is invalid.")
    console.log("Names should only contain letters, no other symbol is allowed!")
    process.exit()
}
if(onlyLetters(name2) != true){
    console.log("Name 2 is invalid.")
    console.log("Names should only contain letters, no other symbol is allowed!")
    process.exit()
}

//main string
main_string = name1+'matches'+name2
count_strings =[]
while(main_string.length >0){
    current_letter = main_string[0]
    count_strings.push((main_string.match(new RegExp(current_letter,"g")) || []).length)
    main_string = main_string.replaceAll(current_letter,'') 
}

exit = true

function sum_algo(array){
    temp_list = []
    while(array.length>0){
    if(array.length == 1){
            temp_list.push(array[0]);
        array.pop();
    }else{
        first = array[0]
        last = array[array.length-1]
        temp_list.push(first+last)
        array.shift();
        array.pop();
    }
}
    return temp_list
}
while(count_strings.length >2){
    count_strings = sum_algo(count_strings)
    if(count_strings.length==2){
        temp=[]
        first = count_strings[0].toString();

        last = count_strings[1].toString();
        count_strings = first+last
        count_strings=count_strings.split("")
        for(i = 0;i<count_strings.length;i++){
        temp.push(parseInt(count_strings[i]))
        }
        count_strings = temp
    }
}
final = parseInt(count_strings[0].toString()+count_strings[1].toString())
if(final > 80){
    console.log(name1+' matches '+name2+' '+ final.toString()+'% Good Match')
}else{
    console.log(name1+' matches '+name2+' '+final.toString()+'% Not a good Match')
}


//namescsv
 var namescsv =`Males,Females,
 Billy,Billy,
 Jason,Kimberly,
 Tommy,Trini,
 Zack,`
 
 var arrobj = [];
 var lines = namescsv.split('n');
 var headers =lines[0].split(',');

 for (var i = 1 ; i < lines.length; i++)
{
    var rowData = lines[i].split(',');
    arrobj[i] = {};

for (var j =0 ; j < rowData.length; j++)
{
    console.log(`${headers[j]} : ${rowData[j]}`);
}
}