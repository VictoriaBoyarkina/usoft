import { VVKFields } from "@entities/VVK/types";
import { data } from "./mock";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";
import { Typography } from "@shared/components/ui/typography";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@shared/components/ui/table";
import { Input } from "@shared/components/ui/input";
import { Button } from "@shared/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared/components/ui/select";
import { columns } from "./columns";

const TABLE_COLUMN_LABEL_MAP = {
  [VVKFields.SOLDIER]: "Военнослужащий",
  [VVKFields.DETACHMENT]: "Отрыв",
  [VVKFields.HOSPITALIZATION]: "Запрос госпитализации",
  [VVKFields.LPU]: "ЛПУ",
  [VVKFields.VMU]: "ВМУ проведения ВВК",
  [VVKFields.VVK_CONCLUSION]: "Дата и номер заключения ВВК",
  [VVKFields.VVK_DECISION]: "Дата утверждения/ отказа ВВК",
  [VVKFields.VACATION]: "Дней отпуска",
};

export default function VVKRecordTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<string>(VVKFields.SOLDIER);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  console.log(columnFilters);
  console.log(columnVisibility);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4 gap-x-6">
        <Select
          defaultValue={VVKFields.SOLDIER}
          onValueChange={(value) => setColumnFilters(value)}
        >
          <SelectTrigger size="sm" className="w-[280px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <SelectItem value={column.id}>
                    {TABLE_COLUMN_LABEL_MAP[column.id as VVKFields]}
                  </SelectItem>
                );
              })}
          </SelectContent>
        </Select>
        <Input
          placeholder="Введите имя"
          value={
            (table.getColumn(columnFilters)?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn(columnFilters)?.setFilterValue(event.target.value)
          }
          className="w-[500px]"
        />
        <Button size="sm" variant="default">
          <Typography>поиск</Typography>
        </Button>
      </div>
      <div className="overflow-hidden rounded-3xl shadow-(--shadow)">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="px-2">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="align-top px-2 first:pl-6 last:lr-6 py-3 border-x-2 first:border-l-0 last:border-r-0"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="px-2 border-y-2"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="align-top px-2 first:pl-6 last:lr-6 py-3 border-x-2 first:border-l-0 last:border-r-0"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Ничего не нашли. Попробуйте изменить фильтры
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
