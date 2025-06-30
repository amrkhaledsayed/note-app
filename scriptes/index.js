<<<<<<< HEAD
import {
  containerNormalCards,
  containerCardsPinned,
  notesDetelesSection,
  buttonSectionNotes,
  mediaQuery,
  tittleNote,
  Note,
  authorNote,
  errorTittle,
  errorAuthor,
  errorNote,
} from "./element.js";
import { addButtonNote, addButtonNotePinned, render } from "./render-notes.js";
import { addMore, deleteNote, disolayNoteDetails } from "./utils.js";
import {
  addCardEventListeners,
  addMoreNotes,
  checkSearchContainer,
  handleScreenChange,
  layoutEvents,
} from "./viewHandlers.js";

document.addEventListener("DOMContentLoaded", () => {
  render("pinned notes", containerCardsPinned);
  render("notes", containerNormalCards);

  addButtonNote();
  addButtonNotePinned();

  disolayNoteDetails();

  deleteNote();

  layoutEvents();
  handleScreenChange();
  checkSearchContainer();
  mediaQuery.addEventListener("change", handleScreenChange);
  mediaQuery.addEventListener("change", checkSearchContainer);
  buttonSectionNotes.addEventListener("click", () => {
    if (mediaQuery.matches) notesDetelesSection.classList.add("dis-mo");
  });
  // buttonContainNotes.addEventListener("click", () => {
  //   if (mediaQuery.matches) {
  //     containerNotes.classList.remove("dis-mo");
  //   }
  // });
  addCardEventListeners();
  const valueMobile = document.querySelector(".input_search-mo");
  const valueDesktop = document.querySelector(".input_search");

  const handleResize = () => {
    if (mediaQuery.matches) {
      if (valueDesktop) valueDesktop.value = "";
    } else {
      if (valueMobile) valueMobile.value = "";
    }
  };

  mediaQuery.addEventListener("change", handleResize);

  addMoreNotes();
  addMore();
});
document.addEventListener("click", (e) => {
  const headerMo = document.querySelector(".header-mo");
  const searchIcon = document.querySelector(".glass_header");
  const closeIconHeader = document.querySelector(".close_header");
  const searchSection = document.querySelector(".search-mo");
  const containerNotes = document.querySelector(".container_notes");
  const inputMo = document.querySelector(".input_search-mo");

  const isInsideSearch =
    e.target.closest(".input_search-mo") ||
    e.target.closest(".glass_header") ||
    e.target.closest(".close_header") ||
    e.target.closest(".search-mo");

  if (!isInsideSearch) {
    if (searchIcon) searchIcon.classList.remove("none");
    if (closeIconHeader) closeIconHeader.classList.add("none");
    if (headerMo) headerMo.classList.remove("header-mo_acvtive");
    if (searchSection) searchSection.classList.remove("opacity_active");
    if (containerNotes) containerNotes.classList.remove("pad");
    if (inputMo) inputMo.value = ""; //
  }
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let hasError = false;

    const title = tittleNote.value.trim();
    const author = authorNote.value.trim();
    const noteContent = Note.value.trim();

    if (!title) {
      tittleNote.classList.add("border_filed");
      if (errorTittle) errorTittle.classList.remove("none");
      hasError = true;
    } else {
      tittleNote.classList.remove("border_filed");
      if (errorTittle) errorTittle.classList.add("none");
    }

    if (!noteContent) {
      Note.classList.add("border_filed");
      if (errorNote) errorNote.classList.remove("none");
      hasError = true;
    } else {
      Note.classList.remove("border_filed");
      if (errorNote) errorNote.classList.add("none");
    }

    if (!author) {
      authorNote.classList.add("border_filed");
      if (errorAuthor) errorAuthor.classList.remove("none");
      hasError = true;
    } else {
      authorNote.classList.remove("border_filed");
      if (errorAuthor) errorAuthor.classList.add("none");
    }

    if (hasError) return;

    const note = {
      tittle: title,
      author: author || "Unknown",
      note: noteContent,
      date: new Date().toISOString(),
    };
  });

  [tittleNote, Note, authorNote].forEach((field) => {
    field.addEventListener("input", () => {
      if (field.value.trim()) {
        const errorMessage =
          field.parentElement.querySelector(".error-message");
        if (errorMessage) {
          errorMessage.remove();
        }
        field.classList.remove("border_filed");
      }
    });
  });
});
=======
import {
  containerNormalCards,
  containerCardsPinned,
  notesDetelesSection,
  buttonSectionNotes,
  mediaQuery,
} from "./element.js";
import { addButtonNote, addButtonNotePinned, render } from "./render-notes.js";
import { addMore, deleteNote, disolayNoteDetails } from "./utils.js";
import {
  addCardEventListeners,
  addMoreNotes,
  checkSearchContainer,
  handleScreenChange,
  layoutEvents,
} from "./viewHandlers.js";

document.addEventListener("DOMContentLoaded", () => {
  render("pinned notes", containerCardsPinned);
  render("notes", containerNormalCards);

  addButtonNote();
  addButtonNotePinned();

  disolayNoteDetails();

  deleteNote();

  layoutEvents();
  handleScreenChange();
  checkSearchContainer();
  mediaQuery.addEventListener("change", handleScreenChange);
  mediaQuery.addEventListener("change", checkSearchContainer);
  buttonSectionNotes.addEventListener("click", () => {
    if (mediaQuery.matches) notesDetelesSection.classList.add("dis-mo");
  });
  // buttonContainNotes.addEventListener("click", () => {
  //   if (mediaQuery.matches) {
  //     containerNotes.classList.remove("dis-mo");
  //   }
  // });
  addCardEventListeners();
  const valueMobile = document.querySelector(".input_search-mo");
  const valueDesktop = document.querySelector(".input_search");

  const handleResize = () => {
    if (mediaQuery.matches) {
      if (valueDesktop) valueDesktop.value = "";
    } else {
      if (valueMobile) valueMobile.value = "";
    }
  };

  mediaQuery.addEventListener("change", handleResize);

  addMoreNotes();
  addMore();
});
document.addEventListener("click", (e) => {
  const headerMo = document.querySelector(".header-mo");
  const searchIcon = document.querySelector(".glass_header");
  const closeIconHeader = document.querySelector(".close_header");
  const searchSection = document.querySelector(".search-mo");
  const containerNotes = document.querySelector(".container_notes");
  const inputMo = document.querySelector(".input_search-mo");

  const isInsideSearch =
    e.target.closest(".input_search-mo") ||
    e.target.closest(".glass_header") ||
    e.target.closest(".close_header") ||
    e.target.closest(".search-mo");

  if (!isInsideSearch) {
    if (searchIcon) searchIcon.classList.remove("none");
    if (closeIconHeader) closeIconHeader.classList.add("none");
    if (headerMo) headerMo.classList.remove("header-mo_acvtive");
    if (searchSection) searchSection.classList.remove("opacity_active");
    if (containerNotes) containerNotes.classList.remove("pad");
    if (inputMo) inputMo.value = ""; //
  }
});
>>>>>>> origin/main
