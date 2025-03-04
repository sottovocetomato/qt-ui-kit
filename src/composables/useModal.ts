import { ref } from "vue";
import type { Ref } from "vue";
import generateUID from "../helpers/uuid";

export interface ModalsList {
  [key: string]: {
    isOpen: Ref;
    toggleModal: () => void;
    modalId: string;
  };
}

const useModal = (names: string[] = []) => {
  const modalsList = ref<ModalsList>({});

  function initModal(name: string) {
    const modalId = generateUID();
    const isOpen = ref(false);

    function toggleModal() {
      isOpen.value = !isOpen.value;
      console.log(isOpen.value, "isOpen.value");
    }

    modalsList[name] = { isOpen, toggleModal, modalId };
  }

  names.forEach((name) => initModal(name));

  return {
    modalsList,
  };
};

export default useModal;
