export function convertDate() {
  let date = new Date();
  return (
    String(date.getDate()).padStart(2, '0') +
    '/' +
    String(date.getMonth() + 1).padStart(2, '0') +
    '/' +
    date.getFullYear()
  );
}

export function onSubmitForm(obj, noteId) {
  obj.id = Date.now();
  obj.time = convertDate();
  obj.noteId = noteId;
  return obj;
}
