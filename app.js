const http = new easyHTTP;

// Get posts
http.get('https://jsonplaceholder.typicode.com/posts', (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

// Get single posts
http.get('https://jsonplaceholder.typicode.com/posts/1', (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post',
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// })

http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});


http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});