import {
  addButton,
  arrow,
  cards,
  closeIcon,
  notes,
  formAdd,
  headerHome,
  mediaQuery,
  notesDetelesSection,
  overlay,
  sectionMoreNote,
  sectionNotes,
  sidebar,
  buttonSectionNotes,
  inputSearch,
} from "./element.js";
import { search } from "./search.js";

export const noteButtonState = () => {
  addButton.classList.remove("border_left");
  addButton.classList.remove("text-color-active");
  buttonSectionNotes.classList.add("border_left");
  buttonSectionNotes.classList.add("text-color-active");
  buttonSectionNotes.classList.remove("text-color-disactive");

  notesDetelesSection.classList.remove("none");
  notes.classList.remove("none");
  formAdd.classList.add("none");
  sectionNotes.classList.remove("m-auto");
};
export const layoutEvents = () => {
  closeIcon.addEventListener("click", () => {
    sidebar.classList.remove("sidebar_active");
    overlay.classList.add("none");
  });

  addButton.addEventListener("click", () => {
    addButton.classList.add("border_left");
    addButton.classList.add("text-color-active");

    buttonSectionNotes.classList.remove("border_left");
    buttonSectionNotes.classList.add("text-color-disactive");

    notesDetelesSection.classList.add("none");
    notes.classList.add("none");
    overlay.classList.add("none");

    formAdd.classList.remove("none");
    sectionNotes.classList.add("m-auto");

    sidebar.classList.remove("sidebar_active");
    sidebar.classList.remove("dis-blo");
  });

  buttonSectionNotes.addEventListener("click", () => {
    const containerSearch = document.querySelector(".container_search");
    containerSearch.innerHTML = "";

    notesDetelesSection.classList.remove("secDteTrans");
    sectionNotes.classList.remove("w-81");
    notes.classList.remove("dis-mo");
    inputSearch.value = "";
    sidebar.classList.remove("sidebar_active");
    sidebar.classList.remove("dis-blo");
    notesDetelesSection.classList.add("dis-mo");
    overlay.classList.add("none");

    cards().forEach((c) => c.classList.remove("wCardMove"));
    noteButtonState();
  });

  arrow.addEventListener("click", () => {
    notesDetelesSection.classList.toggle("secDteTrans");
    arrow.classList.toggle("rotate");
    notesDetelesSection.classList.toggle("none");
    sectionNotes.classList.toggle("w-81");
    cards().forEach((c) => c.classList.toggle("wCardMove"));
  });
};
export const updateNotesButtonState = () => {
  if (notes.classList.contains("dis-mo")) {
    buttonSectionNotes.classList.remove("border_left");
    buttonSectionNotes.classList.add("text-color-disactive");
  }
};

export const handleScreenChange = () => {
  if (mediaQuery.matches) {
    document.body.style.flexDirection = "column";
  } else {
    document.body.style.flexDirection = "row";
  }
};

export const addMoreNotes = () => {
  notesDetelesSection.addEventListener("click", (e) => {
    const btn = e.target.closest(".icon-add-note");

    if (btn) {
      sectionMoreNote.classList.remove("none");
      setTimeout(() => {
        sectionMoreNote.classList.add("transition_scale");
        document.querySelector(".overlay").classList.remove("none");
      }, 10);
    }
  });
  sectionMoreNote.addEventListener("click", (e) => {
    const btn = e.target.closest(".close_icon");
    if (btn) {
      sectionMoreNote.classList.remove("transition_scale");
      document.querySelector(".overlay").classList.add("none");
      setTimeout(() => {
        sectionMoreNote.classList.add("none");
      }, 10);
    }
  });
};
export const checkSearchContainer = () => {
  const searchContainer = document.querySelector(".search-container");
  const header = document.querySelector(".header-mo");

  if (mediaQuery.matches) {
    if (searchContainer) searchContainer.remove();

    if (!header) {
      sidebar.insertAdjacentHTML(
        "afterend",
        `
        <div class="header-mo relative">
          <button class="btn-open-sidebar">
            <i class="fi fi-sr-bars-sort menu"></i>
          </button>
          <h1 class="header font-normal text-[#bC7160]">Almdrasa-Notes</h1>
          <button type="submit" class="btn-toggle-search icon_search-header">
            <i class="fa-solid fa-magnifying-glass glass_header text-[#898989] "></i>
            <i class="fa-solid fa-xmark close_header text-3xl none"></i>
          </button>
          <div class="search-mo absolute ">
            <div class="relative">
              <button type="submit" class="btn-search icon_search absolute">
                <i class="fa-solid fa-magnifying-glass text-[#898989]"></i>
              </button>
              <input type="text" name="search-mobile" class="input_search input_search-mo search-input-mobile rounded-2xl text-[#bc7160] text-[13px] w-[210px] h-[34.01px] outline-none bg-[#FFFFFF] placeholder:text-[13px] placeholder:text-[#898989]" placeholder="Search your notes">
            </div>
          </div>
        </div>
        `
      );
      const inputMo = document.querySelector(".input_search-mo");
      if (inputMo) {
        inputMo.addEventListener("input", () => {
          if (!formAdd.classList.contains("none")) {
            formAdd.classList.add("none");
            noteButtonState();
          }
          search();
        });
      }

      const headerMo = document.querySelector(".header-mo");
      const burgerMenu = headerMo.querySelector(".menu");
      const searchIcon = headerMo.querySelector(".glass_header");
      const closeIconHeader = headerMo.querySelector(".close_header");
      const searchSection = headerMo.querySelector(".search-mo");

      burgerMenu.addEventListener("click", () => {
        sidebar.classList.add("sidebar_active");
        overlay.classList.remove("none");
      });

      searchIcon.addEventListener("click", () => {
        searchIcon.classList.add("none");
        closeIconHeader.classList.remove("none");
        headerMo.classList.add("header-mo_acvtive");
        searchSection.classList.add("opacity_active");
        notes.classList.add("pad");
      });

      closeIconHeader.addEventListener("click", () => {
        searchIcon.classList.remove("none");
        closeIconHeader.classList.add("none");
        headerMo.classList.remove("header-mo_acvtive");
        searchSection.classList.remove("opacity_active");
        notes.classList.remove("pad");
      });
    }
  } else {
    if (header) header.remove();

    if (!searchContainer) {
      headerHome.insertAdjacentHTML(
        "afterend",
        `
        <div class="search-container relative flex">
          <button class="btn-search icon_search absolute">
            <i class="fa-solid fa-magnifying-glass text-[#898989]"></i>
          </button>
          <input type="text" name="search" class="input_search search-input rounded-2xl text-[#bc7160] text-[13px] w-[210px] h-[34.01px] outline-none bg-[#FFFFFF] placeholder:text-[13px] placeholder:text-[#898989]" placeholder="Search your notes">
        </div>
        `
      );
    }
    let inputSearch = document.querySelector(".input_search");

    inputSearch.addEventListener("input", () => {
      if (!formAdd.classList.contains("none")) {
        formAdd.classList.add("none");
        noteButtonState();
      }
      search();
    });
  }
};
export const addCardEventListeners = () => {
  sectionNotes.addEventListener("click", (e) => {
    const card = e.target.closest(".card");

    if (card && mediaQuery.matches) {
      if (e.target.closest(".btn-delete-note") || e.target.closest(".delete")) {
        return;
      }
      const containerSearch = document.querySelector(".container_search");
      notes.classList.add("dis-mo");
      notesDetelesSection.classList.remove("dis-mo");
      notesDetelesSection.classList.remove("none");
      containerSearch?.classList.add("none");

      updateNotesButtonState();
    }
  });
};
