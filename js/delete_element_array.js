function deletePosition(){
    let arr = [10,20,30,40,50]
    let position = document.getElementById('position').value
    position = parseInt(position)
    for(let i=position; i<=arr.length-1; i++){
        // console.log(arr[i+1]);
        arr[i] = arr[i+1]

    }
    arr.length = arr.length - 1
    console.log(arr);
    // return arr
}
// console.log("res=",deletePosition());