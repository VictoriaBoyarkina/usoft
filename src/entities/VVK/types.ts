export enum VVKFields {
  SOLDIER = "soldier",
  DETACHMENT = "detachment",
  HOSPITALIZATION = "hospitalization",
  LPU = "lpu",
  VMU = "vmu",
  VVK_CONCLUSION = "vvkConclusion",
  VVK_DECISION = "vvkDecision",
  VACATION = "vacation",
}

export type VVKRecord = {
  [VVKFields.SOLDIER]: {
    fio: string;
    birthdayDate: string;
    title: string;
    personalNumber: string;
    unit: string;
    division: string;
  };
  [VVKFields.DETACHMENT]: {
    type: string;
    date: string;
  };
  [VVKFields.HOSPITALIZATION]: {
    date: string;
  };
  [VVKFields.LPU]: {
    diagnosis: string;
    admissionDate: string;
    completionDate: string;
  };
  [VVKFields.VMU]: {
    name: string;
    type: "start" | "rejected";
    date: string;
  };
  [VVKFields.VVK_CONCLUSION]: {
    date: string;
    number: string;
  };
  [VVKFields.VVK_DECISION]: {
    type: "approved" | "rejected";
    date: string;
    category: string;
    redSeal: boolean;
  };
  [VVKFields.VACATION]: {
    days: number;
  };
};
