import { VVKFields, type VVKRecord } from "@/entities/VVK/types";
import { type ColumnDef } from "@tanstack/react-table";
import { Typography } from "@shared/components/ui/typography";
import { Badge } from "@/shared/components/ui/badge";
const VKKDecisionTextMap = {
  approved: "Утверждено",
  rejected: "Отказ",
};

const VMUTextMap = {
  start: "Начато",
  rejected: "Отказ",
};

const badgeMap = {
  approved: "success" as const,
  start: "success" as const,
  rejected: "error" as const,
};

export const columns: ColumnDef<VVKRecord>[] = [
  {
    accessorKey: VVKFields.SOLDIER,
    id: VVKFields.SOLDIER,
    header: () => {
      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="medium_bold">Военнослужащий</Typography>
          <Typography type="small">Дата рождения</Typography>
          <Typography type="small">Звание</Typography>
          <Typography type="small">Личный номер</Typography>
          <Typography type="small"> {" \n"}</Typography>
          <Typography type="medium_bold">Ввоинская часть</Typography>
          <Typography type="small">Подразделение</Typography>
        </div>
      );
    },
    filterFn: (row, _columnId, filterValue) => {
      const { fio, birthdayDate, title, personalNumber, unit, division } =
        row.getValue<VVKRecord[VVKFields.SOLDIER]>(VVKFields.SOLDIER);

      const searchValue = filterValue.toLowerCase();
      return (
        fio.toLowerCase().includes(searchValue) ||
        birthdayDate.toLocaleLowerCase().includes(searchValue) ||
        title.toLowerCase().includes(searchValue) ||
        personalNumber.toLowerCase().includes(searchValue) ||
        unit.toLowerCase().includes(searchValue) ||
        division.toLowerCase().includes(searchValue)
      );
    },
    cell: ({ row }) => {
      const { fio, birthdayDate, title, personalNumber, unit, division } =
        row.getValue<VVKRecord[VVKFields.SOLDIER]>(VVKFields.SOLDIER);

      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="small">{fio}</Typography>
          <Typography type="small">{birthdayDate}</Typography>
          <Typography type="small">{title}</Typography>
          <Typography type="small">{personalNumber}</Typography>
          <Typography type="small"> {" \n"}</Typography>
          <Typography type="small">{unit}</Typography>
          <Typography type="small">{division}</Typography>
        </div>
      );
    },
  },
  {
    accessorKey: VVKFields.DETACHMENT,
    id: VVKFields.DETACHMENT,
    header: () => {
      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="medium_bold">Отрыв</Typography>
          <Typography type="small">Вид</Typography>
          <Typography type="small">Дата отрыва</Typography>
        </div>
      );
    },
    filterFn: (row, _columnId, filterValue) => {
      const { type, date } = row.getValue<VVKRecord[VVKFields.DETACHMENT]>(
        VVKFields.DETACHMENT
      );

      const searchValue = filterValue.toLowerCase();
      return (
        type.toLowerCase().includes(searchValue) ||
        date.toLowerCase().includes(searchValue)
      );
    },
    cell: ({ row }) => {
      const { type, date } = row.getValue<VVKRecord[VVKFields.DETACHMENT]>(
        VVKFields.DETACHMENT
      );

      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="small">{type}</Typography>
          <Typography type="small">{date}</Typography>
        </div>
      );
    },
  },
  {
    accessorKey: VVKFields.HOSPITALIZATION,
    header: () => {
      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="medium_bold">Запрос госпитализации</Typography>
          <Typography type="small">Дата</Typography>
        </div>
      );
    },
    filterFn: (row, _columnId, filterValue) => {
      const { date } = row.getValue<VVKRecord[VVKFields.HOSPITALIZATION]>(
        VVKFields.HOSPITALIZATION
      );

      const searchValue = filterValue.toLowerCase();
      return date.toLowerCase().includes(searchValue);
    },
    cell: ({ row }) => {
      const { date } = row.getValue<VVKRecord[VVKFields.HOSPITALIZATION]>(
        VVKFields.HOSPITALIZATION
      );

      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="small">{date}</Typography>
        </div>
      );
    },
  },
  {
    accessorKey: VVKFields.LPU,
    id: VVKFields.LPU,
    header: () => {
      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="medium_bold">ЛПУ</Typography>
          <Typography type="small">Диагноз</Typography>
          <Typography type="small">Дата поступления</Typography>
          <Typography type="small">Дата завершения</Typography>
        </div>
      );
    },
    filterFn: (row, _columnId, filterValue) => {
      const { diagnosis, admissionDate, completionDate } = row.getValue<
        VVKRecord[VVKFields.LPU]
      >(VVKFields.LPU);

      const searchValue = filterValue.toLowerCase();
      return (
        diagnosis.toLowerCase().includes(searchValue) ||
        admissionDate.toLocaleLowerCase().includes(searchValue) ||
        completionDate.toLocaleLowerCase().includes(searchValue)
      );
    },
    cell: ({ row }) => {
      const { diagnosis, admissionDate, completionDate } = row.getValue<
        VVKRecord[VVKFields.LPU]
      >(VVKFields.LPU);

      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="small">{diagnosis}</Typography>
          <Typography type="small">{admissionDate}</Typography>
          <Typography type="small">{completionDate}</Typography>
        </div>
      );
    },
  },
  {
    accessorKey: VVKFields.VMU,
    id: VVKFields.VMU,
    header: () => {
      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="medium_bold">ВМУ проведения ВВК</Typography>
          <Typography type="small">Дата начала/отказа</Typography>
          <Typography type="small">Примечания</Typography>
        </div>
      );
    },
    filterFn: (row, _columnId, filterValue) => {
      const { name, type, date } = row.getValue<VVKRecord[VVKFields.VMU]>(
        VVKFields.VMU
      );

      const searchValue = filterValue.toLowerCase();
      return (
        name.toLowerCase().includes(searchValue) ||
        VMUTextMap[type].toLocaleLowerCase().includes(searchValue) ||
        date.toLocaleLowerCase().includes(searchValue)
      );
    },
    cell: ({ row }) => {
      const { name, type, date } = row.getValue<VVKRecord[VVKFields.VMU]>(
        VVKFields.VMU
      );

      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="small">{name}</Typography>
          <Badge variant={badgeMap[type]} className="w-full justify-start">
            <Typography type="small">{VMUTextMap[type]}</Typography>
          </Badge>
          <Typography type="small">{date}</Typography>
        </div>
      );
    },
  },
  {
    accessorKey: VVKFields.VVK_CONCLUSION,
    id: VVKFields.VVK_CONCLUSION,
    header: () => {
      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="medium_bold">
            Дата и номер заключения ВВК
          </Typography>
        </div>
      );
    },
    filterFn: (row, _columnId, filterValue) => {
      const { date, number } = row.getValue<
        VVKRecord[VVKFields.VVK_CONCLUSION]
      >(VVKFields.VVK_CONCLUSION);

      const searchValue = filterValue.toLowerCase();
      return (
        date.toLowerCase().includes(searchValue) ||
        number.toLocaleLowerCase().includes(searchValue)
      );
    },
    cell: ({ row }) => {
      const { date, number } = row.getValue<
        VVKRecord[VVKFields.VVK_CONCLUSION]
      >(VVKFields.VVK_CONCLUSION);

      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="small">{date}</Typography>
          <Typography type="small">{number}</Typography>
        </div>
      );
    },
  },
  {
    accessorKey: VVKFields.VVK_DECISION,
    id: VVKFields.VVK_DECISION,
    header: () => {
      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="medium_bold">
            Дата утверждения/ отказа ВВК
          </Typography>
          <Typography type="small">Категория годности</Typography>
          <Typography type="small">Красная печать</Typography>
        </div>
      );
    },
    filterFn: (row, _columnId, filterValue) => {
      const { type, date, category } = row.getValue<
        VVKRecord[VVKFields.VVK_DECISION]
      >(VVKFields.VVK_DECISION);

      const searchValue = filterValue.toLowerCase();
      return (
        VKKDecisionTextMap[type].toLowerCase().includes(searchValue) ||
        date.toLocaleLowerCase().includes(searchValue) ||
        category.toLocaleLowerCase().includes(searchValue)
      );
    },
    cell: ({ row }) => {
      const { type, date, category } = row.getValue<
        VVKRecord[VVKFields.VVK_DECISION]
      >(VVKFields.VVK_DECISION);

      return (
        <div className="flex flex-col whitespace-pre-line">
          <Badge variant={badgeMap[type]} className="w-full justify-start">
            <Typography type="small">{VKKDecisionTextMap[type]}</Typography>
          </Badge>
          <Typography type="small">{date}</Typography>
          <Typography type="small">{category}</Typography>
        </div>
      );
    },
  },
  {
    accessorKey: VVKFields.VACATION,
    id: VVKFields.VACATION,
    header: () => {
      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="medium_bold">
            Дней отпуска ожидание увольнения
          </Typography>
        </div>
      );
    },
    filterFn: (row, _columnId, filterValue) => {
      const { days } = row.getValue<VVKRecord[VVKFields.VACATION]>(
        VVKFields.VACATION
      );

      const searchValue = filterValue.toLowerCase();
      return days.toString().toLowerCase().includes(searchValue);
    },
    cell: ({ row }) => {
      const { days } = row.getValue<VVKRecord[VVKFields.VACATION]>(
        VVKFields.VACATION
      );

      return (
        <div className="flex flex-col whitespace-pre-line">
          <Typography type="small">{days.toString()}</Typography>
        </div>
      );
    },
  },
];
