import type { VVKRecord } from "@entities/VVK/types";

export const data: VVKRecord[] = [
  {
    id: "12345098765",
    soldier: {
      fio: "Иванов А.А.",
      birthdayDate: "19.03.1984",
      title: "рядовой",
      personalNumber: "123456789",
      unit: "40318 4 омсбр 3 ОА...",
      division: "2 Рота (резервная «В»)",
    },
    detachment: {
      type: "медрота",
      date: "27.08.2025",
    },
    hospitalization: {
      date: "13.09.2025",
    },
    lpu: {
      diagnosis:
        "Варикозная болезнь вен нижних конечностей. Недостаточность остиального и стволовых клапанов БПВ справа...",
      admissionDate: "13.09.2025 14:01:20",
      completionDate: "20.09.2025",
    },
    vmu: {
      name: "ФГУ 419 ВГ МО Р...",
      type: "rejected",
      date: "20.09.2025",
    },
    vvkConclusion: {
      date: "20.08.2025",
      number: "87/2085",
    },
    vvkDecision: {
      type: "approved",
      date: "21.08.2025",
      category: "Г",
      redSeal: true,
    },
    vacation: {
      days: 30,
    },
  },
  {
    id: "12345976765",
    soldier: {
      fio: "Сидоров А.А.",
      birthdayDate: "19.03.1984",
      title: "рядовой",
      personalNumber: "123456789",
      unit: "40318 4 омсбр 3 ОА...",
      division: "2 Рота (резервная «В»)",
    },
    detachment: {
      type: "медрота",
      date: "27.08.2025",
    },
    hospitalization: {
      date: "13.09.2025",
    },
    lpu: {
      diagnosis:
        "Варикозная болезнь вен нижних конечностей. Недостаточность остиального и стволовых клапанов БПВ справа...",
      admissionDate: "13.09.2025 14:01:20",
      completionDate: "20.09.2025",
    },
    vmu: {
      name: "ФГУ 419 ВГ МО Р...",
      type: "start",
      date: "20.09.2025",
    },
    vvkConclusion: {
      date: "20.08.2025",
      number: "87/2085",
    },
    vvkDecision: {
      type: "rejected",
      date: "21.08.2025",
      category: "Г",
      redSeal: true,
    },
    vacation: {
      days: 10,
    },
  },
  {
    id: "12342346765",
    soldier: {
      fio: "Петров А.А.",
      birthdayDate: "19.03.1984",
      title: "рядовой",
      personalNumber: "123456789",
      unit: "40318 4 омсбр 3 ОА...",
      division: "2 Рота (резервная «В»)",
    },
    detachment: {
      type: "медрота",
      date: "27.08.2025",
    },
    hospitalization: {
      date: "13.09.2025",
    },
    lpu: {
      diagnosis:
        "Варикозная болезнь вен нижних конечностей. Недостаточность остиального и стволовых клапанов БПВ справа...",
      admissionDate: "13.09.2025 14:01:20",
      completionDate: "20.09.2025",
    },
    vmu: {
      name: "ФГУ 419 ВГ МО Р...",
      type: "start",
      date: "20.09.2025",
    },
    vvkConclusion: {
      date: "20.08.2025",
      number: "87/2085",
    },
    vvkDecision: {
      type: "approved",
      date: "21.08.2025",
      category: "Г",
      redSeal: true,
    },
    vacation: {
      days: 20,
    },
  },
];
