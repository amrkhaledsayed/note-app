import {
  addMoreValue,
  containerCardsPinned,
  containerNormalCards,
  mediaQuery,
  messageSuccessfully,
  notesDetelesSection,
  sectionMoreNote,
  sectionNotes,
} from "./element.js";
import { render, renderEmptyState } from "./render-notes.js";
import { search } from "./search.js";

export const fetchData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const saveToDB = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const disolayNoteDetails = () => {
  sectionNotes.addEventListener("click", (e) => {
    if (e.target.closest(".btn-delete-note") || e.target.closest(".delete")) {
      return;
    }

    const card = e.target.closest(".card");
    if (!card) return;
    const index = parseInt(card.dataset.index);
    const key = card.closest(".cards_pinned") ? "pinned notes" : "notes";
    const notes = fetchData(key);
    const note = notes[index];

    if (!note) {
      return renderEmptyState(notesDetelesSection);
    }

    const header = note.tittle;
    const dateString = note.date;
    const noteDetalis = note.note;
    const author = note.author;
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    notesDetelesSection.innerHTML = `
      <div class="card-de sticky top-46" data-key="${key}" data-index="${index}">
        <h4 class="header_note-de text-[26px] text-[#303030]">${header}</h4>
        <p class="date text-[#898989]">${formattedDate} / By ${author}</p>
        <p class="note-de text-[#898989] text-[13px]">${noteDetalis}</p>
        <i class="fa-solid fa-plus icon-add-note shadow-2xl"></i>
      </div>
    `;

    search();
  });
};

const deleteState = (key, index, containerCards) => {
  const notes = fetchData(key);
  notes.splice(index, 1);
  saveToDB(key, notes);
  render(key, containerCards);
};

export const deleteNote = () => {
  sectionNotes.addEventListener("click", (e) => {
    const buttonDelete = e.target.closest(".btn-delete-note");
    if (!buttonDelete) return;

    const card = buttonDelete.closest(".card");
    const key = card.closest(".normal_cards") ? "notes" : "pinned notes";
    const index = parseInt(card.dataset.index);
    const containerCards =
      key === "notes" ? containerNormalCards : containerCardsPinned;
    const confirmDelete = confirm("Do you want to delete this note?");
    if (!confirmDelete) return;
    messageSuccessfully.querySelector(".message").innerText =
      "Note deleted successfully";
    setTimeout(() => {
      messageSuccessfully.classList.remove("none");
      setTimeout(() => {
        messageSuccessfully.classList.add("active_message");
        setTimeout(() => {
          messageSuccessfully.classList.add("none");
          messageSuccessfully.classList.remove("active_message");
        }, 6000);
      }, 10);
    }, 100);

    deleteState(key, index, containerCards);
    search();
  });
};

export const addMore = () => {
  sectionMoreNote.addEventListener("click", (e) => {
    e.preventDefault();
    const btn = e.target.closest(".add_more_btn");
    if (!btn) return;

    if (btn) {
      const cardOraginal = notesDetelesSection.querySelector(".card-de");
      const noteOraginal = notesDetelesSection.querySelector(".note-de");

      const index = cardOraginal.dataset.index;
      const keyFetch = cardOraginal.dataset.key;
      const newNote = addMoreValue.value;
      const containerCards =
        keyFetch === "notes" ? containerNormalCards : containerCardsPinned;

      if (newNote.trim()) {
        const notes = fetchData(keyFetch);
        notes[index].note += " " + newNote;
        noteOraginal.textContent += newNote;
        disolayNoteDetails(containerCards);
        saveToDB(keyFetch, notes);
        render(keyFetch, containerCards);
        addMoreValue.value = " ";
        sectionMoreNote.classList.remove("transition_scale");
        document.querySelector(".overlay").classList.add("none");
        setTimeout(() => {
          sectionMoreNote.classList.add("none");
        }, 10);
        if (mediaQuery.matches) {
          const notes = document.querySelector(".container_notes");
          notes.classList.remove("none");
          notesDetelesSection.classList.add("dis-mo");
          notesDetelesSection.classList.add("none");
          notes.classList.remove("dis-mo");
        }
        messageSuccessfully.querySelector(".message").innerText =
          "Note updated successfully";
        setTimeout(() => {
          messageSuccessfully.classList.remove("none");
          setTimeout(() => {
            messageSuccessfully.classList.add("active_message");
            setTimeout(() => {
              messageSuccessfully.classList.add("none");
              messageSuccessfully.classList.remove("active_message");
            }, 6000);
          }, 10);
        }, 500);
      } else {
        alert("please enter containe your note ");
      }
    }
  });
};
