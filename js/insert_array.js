// function insertElement(){

// let data =[60,30,10,67,40];
// let newEl= -1;
// let position=2;
// // console.warn(data)

// for(let i=data.length-1;i>0;i--){
//     // console.warn(data[i])
//     if(i>=position)
//     {

//         data[i+1]=data[i];
//         data[i] = newEl
//         // if(i==position)
//         // {
//         //     data[i]=newEl;
//         // }
//     }
// }
// console.warn(data)
// }
// data.splice(replace indexe,delete item, new item)

function insertEl() {
    let data = [60, 30, 10, 67, 40];
    let newEl = document.getElementById('newEl').value;
    newEl = parseInt(newEl)
    let position = document.getElementById('position').value
    console.warn(data);

    for (let i = data.length - 1; i >= 0; i--) {
      // console.warn(data[i])
      if (i >= position) {
        data[i + 1] = data[i];
        if (i == position) {
          data[i] = newEl;
        }
      }
    }
    console.warn(data)
  }
// console.log("APP:", insertEl());

// console.log("res:",insertElement());