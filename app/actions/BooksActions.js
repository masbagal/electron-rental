import DbService from '../database/DbService';

const Db = new DbService();

export const TYPE = {
  SAVE_NEW_BOOK: 'SAVE_NEW_BOOK',
  FINISH_SAVE_NEW_BOOK: 'FINISH_SAVE_NEW_BOOK',
};

export function saveNewBook(data) {
  Db.insertBook(data);
  return {
    type: TYPE.SAVE_NEW_BOOK,
    data: data,
  }
}
