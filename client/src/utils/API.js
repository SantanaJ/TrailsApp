import axios from "axios";

const API = {
  // Gets all books
  getTrails: function() {
    return axios.get("/api/trail");
  },
  // Gets the book with the given id
  getTrail: function(id) {
    return axios.get("/api/trail/" + id);
  },
  // Deletes the book with the given id
//   deleteTrail: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};

export default API;