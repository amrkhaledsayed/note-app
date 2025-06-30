import {
  cards,
  notesDetelesSection,
  containerCardsPinned,
  containerNormalCards,
  notes,
  mediaQuery,
  sectionNotes,
} from "./element.js";
import { renderEmptyState } from "./render-notes.js";
import { fetchData } from "./utils.js";
import { addCardEventListeners } from "./viewHandlers.js";

export const search = () => {
  const isMobile = mediaQuery.matches;

  let searchValue = "";

  if (isMobile) {
    const inputMobile = document.querySelector(".input_search-mo");
    if (inputMobile) {
      searchValue = inputMobile.value.trim().toLowerCase();
    }
  } else {
    const inputDesktop = document.querySelector(".input_search");
    if (inputDesktop) {
      searchValue = inputDesktop.value.trim().toLowerCase();
    }
  }

  const oldSearchContainer = document.querySelector(".container_search");
  if (oldSearchContainer) {
    oldSearchContainer.remove();
  }

  if (!searchValue) {
    notes.classList.remove("none");
    return;
  }

  let cardsPinned = "";
  let cardsNormal = "";

  cards().forEach((card) => {
    const cardNoteKey = card.closest(".cards_pinned")
      ? "pinned notes"
      : "notes";
    const index = parseInt(card.dataset.index);
    const notesData = fetchData(cardNoteKey);

    const titleCard = notesData[index].tittle;
    const noteCard = notesData[index].note;
    const dateCard = notesData[index].date;
    const dateObj = new Date(dateCard);

    const formattedDate = dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const classNameP =
      cardNoteKey === "pinned notes"
        ? containerCardsPinned
        : containerNormalCards;

    if (
      titleCard.toLowerCase().includes(searchValue) ||
      noteCard.toLowerCase().includes(searchValue)
    ) {
      const regex = new RegExp(`(${searchValue})`, "gi");

      const highlightedTitle = titleCard.replace(
        regex,
        `<span style="background-color: antiquewhite;">$1</span>`
      );

      const highlightedNote = noteCard.replace(
        regex,
        `<span style="background-color: antiquewhite;">$1</span>`
      );

      const cardHTML = `
        <div class="card w-[266px] h-[106px]" data-index="${index}" data-key="${cardNoteKey}">
          <h4 class="header_note text-[16px] text-[#303030]">${highlightedTitle}</h4>
          <p class="note text-[#898989] text-[13px] line-clamp-3 overflow-hidden">${highlightedNote}</p>
          <div class="note-footer flex justify-between items-baseline">
            <p class="date text-[#898989]">${formattedDate}</p>
            <button class="delete text-[#D82700] text-[13px] leading-[20px] btn-delete-note">Delete</button>
          </div>
        </div>
      `;

      if (classNameP === containerCardsPinned) {
        cardsPinned += cardHTML;
      } else {
        cardsNormal += cardHTML;
      }
    }
  });

  if (cardsPinned || cardsNormal) {
    notes.classList.add("none");
    sectionNotes.insertAdjacentHTML(
      "beforeend",
      `<div class="container_search"></div>`
    );

    const containerSearch = document.querySelector(".container_search");

    if (cardsPinned) {
      containerSearch.insertAdjacentHTML(
        "beforeend",
        `<div class="cards cards_pinned relative">${cardsPinned}</div>`
      );
    }

    if (cardsNormal) {
      containerSearch.insertAdjacentHTML(
        "beforeend",
        `<div class="cards normal_cards">${cardsNormal}</div>`
      );
    }
  } else {
    notes.classList.add("none");
    sectionNotes.insertAdjacentHTML(
      "beforeend",
      `<div class="container_search flex items-center"><img src ="/assest/no-results.png" class="empty_search self-center"/><p class="text-gray-500 self-center">Can't find any result</p></div>`
    );
    renderEmptyState(notesDetelesSection);
  }
  addCardEventListeners();
};
