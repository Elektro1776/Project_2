$(document).ready(function() {

console.log(' DOC IS READY!');
// $('#gitlab').click(function(e) {
//   console.log(' CLIKKKKKED');
//   e.preventDefault();
//   post('/gitlab/login', {title: 'fuck apisss'}).then((response) => {
//     console.log(' WHAT IS THE RESPONSE', response);
//     if(response.status === 200) {
//        return response.json();
//
//     } else {
//       // this would be a good place to show a modal to let the user know something
//       // went wrong
//     }
//   })
//    .then((response) => {
//      console.log(' WHAT IS OUR RESPONSE', response);
//     //  updateIncompleteTodos(response);
//   }).catch((err) => {
//     console.log(' ERRRRR', err);
//   })
// })
function post (path, data) {

   return window.fetch(path, {
     method: 'GET',
    //  headers: {
    //    'Accept': 'application/json',
    //    'Content-Type': 'application/json'
    //  },
    //  body: JSON.stringify(data)
   })
 }

})
