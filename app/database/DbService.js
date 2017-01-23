import loki from 'lokijs';
import LokiIndexedAdapter from 'lokijs/src/loki-indexed-adapter';

const DATE_INTERVAL = 5;
const idxAdapter = new LokiIndexedAdapter();

const DbService = function() {
  var self = this;

  var loadHandler = function() {
    var books = self.db.getCollection('books');
    if (books === null) {
      self.books = self.db.addCollection('books', { indices: ['title', 'author']});
    } else {
      self.books = books;
    }

    var transactions = self.db.getCollection('transactions');
    if (transactions === null) {
      self.transactions = self.db.addCollection('transactions');
    } else {
      self.transactions = transactions;
    }
  }

  this.db = new loki('rental.json',  {
        autoload: true,
        autoloadCallback : loadHandler,
        autosave: true,
        autosaveInterval: 10000, // 10 seconds
        adapter: idxAdapter
      });
}

DbService.prototype.insertBook = function(data) {
  this.books.insert({
    title: data.title,
    author: data.author,
    qty: data.qty || 0
  });
}

DbService.prototype.insertTransaction = function(data) {
  const today = new Date();
  this.transaction.insert({
    date: today,
    renterName: data.name,
    dueDate: today.getTime() + (DATE_INTERVAL * 86400000),
    books: data.book,
    isReturned: false
  });
}

export default DbService;
