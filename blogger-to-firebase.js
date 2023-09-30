import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB-2HfYoeQ31W4XnRn4wluANizYKzl9Vl8",
  authDomain: "coin-master-free-spins-9aeaa.firebaseapp.com",
  databaseURL: "https://coin-master-free-spins-9aeaa-default-rtdb.firebaseio.com",
  projectId: "coin-master-free-spins-9aeaa",
  storageBucket: "coin-master-free-spins-9aeaa.appspot.com",
  messagingSenderId: "184532349515",
  appId: "1:184532349515:web:07053a1281d0d6257f93ce",
  measurementId: "G-HZ41QNKZ6K"
};

firebase.initializeApp(firebaseConfig);

// Fetch Blog Posts Using the Blogger API
function fetchBlogPostsFromBlogger() {
  const apiKey = 'AIzaSyB5aguueQvUD9CqM2cAVZsVdkbxTrCUiZ0';
  const blogId = '7264341626886107950'; // Your Blogger blog's ID

  // Construct the URL for fetching blog posts
  const apiUrl = `https://www.googleapis.com/blogger/v3/blogs/${7264341626886107950}/posts?key=${AIzaSyB5aguueQvUD9CqM2cAVZsVdkbxTrCUiZ0}`;

  // Make a GET request to the Blogger API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process and save the blog posts to Firebase
      const posts = data.items;
      posts.forEach(post => {
        const title = post.title;
        const content = post.content;
        saveBlogPostToFirebase(title, content);
      });
    })
    .catch(error => console.error('Error fetching blog posts:', error));
}

// Function to save a blog post to Firebase (as shown in Step 4.4)
function saveBlogPostToFirebase(title, content) {
  const database = firebase.database();
  const blogPostsRef = database.ref('blogPosts');

  // Push a new post to the database
  const newBlogPostRef = blogPostsRef.push();
  newBlogPostRef.set({
    title: title,
    content: content,
  });
}

// Call the function to fetch and save blog posts
fetchBlogPostsFromBlogger();
