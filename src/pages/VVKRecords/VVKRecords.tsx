import { VVKRecordTable } from "@features/VVKRecordTable";
import { Typography } from "@shared/components/ui/typography";

export default function VVKRecords() {
  return (
    <>
      <Typography>Медицинский отрыв/Учёт ВВК</Typography>
      <VVKRecordTable />
    </>
  );
}
