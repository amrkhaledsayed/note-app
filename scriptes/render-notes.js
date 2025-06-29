import {
  addNote,
  addNotePinned,
  authorNote,
  containerCardsPinned,
  containerNormalCards,
  lodding,
  messageSuccessfully,
  Note,
  notesDetelesSection,
  tittleNote,
} from "./element.js";
import { deleteNote, fetchData, saveToDB } from "./utils.js";
import { noteButtonState } from "./viewHandlers.js";

export const renderEmptyState = (containerCards) => {
  let note = "There are no notes here.";
  if (containerCards === notesDetelesSection)
    note = "Welcome to Almdrasa Notes — select a note to view its";
  const empty = `
    <div class="empty_state ${
      containerCards === notesDetelesSection && "sticky top-46"
    }
    ">
      <img src="./assest/folder.png" alt="empty icon" class="empty_img_cards">
      <p class="note text-[#898989] text-[11px]">${note}</p>
    </div>
  `;
  containerCards.innerHTML = empty;
};

export const render = (key, containerCards) => {
  const notes = fetchData(key);
  if (!notes.length) {
    renderEmptyState(containerCards);
  } else {
    renderNote(notes, containerCards);
  }

  if (!notesDetelesSection.length) {
    renderEmptyState(notesDetelesSection);
  }
};

export const renderNote = (notes, containerCards) => {
  const sanitize = (str) => {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };

  let result = "";
  notes.forEach((note, index) => {
    const tittle = sanitize(note.tittle);
    const notede = sanitize(note.note);

    const date = new Date(note.date);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    result += `
  <div class="card w-[266px] h-[106px]" data-index="${index}">
  <h4 class="header_note text-[16px] text-[#303030]">${tittle}</h4>
      <p class="note text-[#898989] text-[13px] line-clamp-3 overflow-hidden">${notede}</p>
      <div class="note-footer flex justify-between items-baseline">
        <p class="date text-[#898989]">${formattedDate}</p>
        <button class="text-[#D82700] text-[13px] leading-[20px] btn-delete-note">
          Delete
          </button>
          </div>
          </div>
          `;
  });
  containerCards.innerHTML = " ";
  containerCards.insertAdjacentHTML("beforeend", result);
};
export const addNotes = (key, containerCards) => {
  const note = {
    tittle: tittleNote.value.trim(),
    author: authorNote?.value.trim() || "Unknown",
    note: Note.value.trim(),
    date: new Date().toISOString(),
  };

  if (!note.tittle || !note.note || !note.author) {
    alert("Please fill all fields");
    return;
  }

  const notes = fetchData(key) || [];
  notes.push(note);
  saveToDB(key, notes);
  render(key, containerCards);

  tittleNote.value = "";
  authorNote.value = "";
  Note.value = "";
};
export const addButtonNote = () => {
  addNotePinned.addEventListener("click", (e) => {
    e.preventDefault();
    addNotes("pinned notes", containerCardsPinned);
    noteButtonState();
    lodding.classList.remove("none");
    setTimeout(() => {
      lodding.classList.add("none");
      messageSuccessfully.classList.remove("none");
      setTimeout(() => {
        messageSuccessfully.classList.add("active_message");
        setTimeout(() => {
          messageSuccessfully.classList.add("none");
          messageSuccessfully.classList.remove("active_message");
        }, 6000);
      }, 10);
    }, 500);
  });
};
export const addButtonNotePinned = () => {
  addNote.addEventListener("click", (e) => {
    e.preventDefault();
    addNotes("notes", containerNormalCards);
    noteButtonState();
    lodding.classList.remove("none");
    setTimeout(() => {
      lodding.classList.add("none");
      messageSuccessfully.classList.remove("none");
      setTimeout(() => {
        messageSuccessfully.classList.add("active_message");
        setTimeout(() => {
          messageSuccessfully.classList.add("none");
          messageSuccessfully.classList.remove("active_message");
        }, 6000);
      }, 10);
    }, 500);
  });
};
