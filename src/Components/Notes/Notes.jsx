import './Notes.scss';
import { Component } from 'react'
import NotesTitle from '../NotesTitle/NotesTitle';
import NotesContainer from '../NotesContainer/NotesContainer';
import NoteInput from '../NoteInput/NoteInput';
import API from '../API/API';

export default class Notes extends Component {
  constructor(props) {
    super(props);
    this.api = new API();
    this.state = {
      notes: []
    }
  }

  async componentDidMount() {
    await this.updateState();
  }

  async updateState() {
    const notes = await this.api.get()
    this.setState((prev) => ({
      notes,
    }))
  }

  async addNote(data, func) {
    if (data.content === '') return;
    await this.api.post(data);
    func()
    await this.updateState();
  }

  async deleteNote(id) {
    await this.api.delete(id);
    await this.updateState();
  }

  render() {
    return (
      <div className="notes">
        <NotesTitle updateState={this.updateState.bind(this)} />
        <NotesContainer deleteNote={this.deleteNote.bind(this)} notes={this.state.notes} />
        <NoteInput addNote={this.addNote.bind(this)} />
      </div>
    )
  }
}
