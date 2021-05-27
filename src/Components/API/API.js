export default class API {
  constructor() {
    this.url = 'http://localhost:7070';
  }

  async get() {
    try {
      this.response = await fetch(`${this.url}/notes`);
      this.result = await this.response.json();
      console.log('Данные обновлены');
      return this.result;
    } catch (error) {
      console.log(error);
    }
  }

  async post(data) {
    try {
      this.response = await fetch(`${this.url}/notes`, {
        method: 'POST',
        body: JSON.stringify(data)
      });
      console.log('Заметка добавлена');
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      this.response = await fetch(`${this.url}/notes/${id}`, {
        method: 'DELETE',
      });
      console.log('Заметка удалена');
    } catch (error) {
      console.log(error);
    }
  }
}
