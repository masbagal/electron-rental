import lf from 'lovefield';

var DbService = function() {
  this._db = null;
  window.db = this;
}

/**
* Connect and initialize
**/
DbService.prototype.buildSchema = function() {
  var schemaBuilder = lf.schema.create('rental', 1);
  schemaBuilder.createTable('Books')
    .addColumn('id', lf.type.INTEGER)
    .addColumn('title', lf.type.STRING)
    .addColumn('author', lf.type.STRING)
    .addColumn('qty', lf.type.INTEGER)
    .addPrimaryKey(['id']);

  schemaBuilder.createTable('Transactions')
    .addColumn('id', lf.type.INTEGER)
    .addColumn('date', lf.type.DATE_TIME)
    .addColumn('renter', lf.type.STRING)
    .addColumn('dueDate', lf.type.DATE_TIME)
    .addColumn('isReturned', lf.type.BOOLEAN)
    .addPrimaryKey(['id']);

  schemaBuilder.createTable('TransactionDetails')
    .addColumn('transactionId', lf.type.INTEGER)
    .addColumn('bookId', lf.type.INTEGER)
    .addIndex('transaction_idx', ['transactionId'])
    .addIndex('book_idx', ['bookId']);

  return schemaBuilder;
}

DbService.prototype.getConnection = function() {
  if (this.db != null) return this.db;
  var self = this;
  return this.buildSchema().connect().then(
    function(db) {
      self.db = db;
      self.onConnected();
      return db;
    }
  )
}

DbService.prototype.onConnected = function() {
  this.books = this.db.getSchema().table('Books');
  this.transactions = this.db.getSchema().table('Transactions');
  this.transactionDetails = this.db.getSchema().table('TransactionDetails');
}

/**
* Operational
**/
DbService.prototype.determineTable(tableName) {
  switch (tableName) {
    case 'Books':
      return this.books;
    case 'Transactions':
      return this.transactions;
    case 'TransactionDetails':
      return this.transactionDetails;
    default:
      return {};
  }
}

DbService.prototype.selectAll = function(tableName) {
  const table = this.determineTable(tableName);
  return this.db.select().from(table).exec();
}

DbService.prototype.upsertData = function(data, tableName) {
  const table = this.determineTable(tableName);
  const addedRow = table.createRow(data);

  return this.db.insertOrReplace().into(table).values([addedRow]).exec();
}

export default DbService;
